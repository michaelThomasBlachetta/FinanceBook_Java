package com.financebook.service;

import com.financebook.dto.response.ImportCsvSummary;
import com.financebook.entity.*;
import com.financebook.repository.*;
import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvValidationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import java.util.HashSet;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImportService {

    private final PaymentItemRepository paymentItemRepository;
    private final RecipientRepository recipientRepository;
    private final CategoryRepository categoryRepository;
    private final CategoryTypeRepository categoryTypeRepository;
    private final UserRepository userRepository;

    @Transactional
    public ImportCsvSummary importCsv(MultipartFile file, String username) throws IOException, CsvValidationException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        int createdPayments = 0;
        int createdRecipients = 0;
        int updatedRecipients = 0;
        int createdCategories = 0;

        // Configure CSV parser with semicolon separator
        CSVParser parser = new CSVParserBuilder()
                .withSeparator(';')
                .withIgnoreQuotations(false)
                .build();

        try (CSVReader reader = new CSVReaderBuilder(new InputStreamReader(file.getInputStream()))
                .withCSVParser(parser)
                .withSkipLines(1) // Skip header
                .build()) {

            String[] line;
            while ((line = reader.readNext()) != null) {
                // Expected format: amount;date;description;Recipient name;Recipient
                // address;standard_category name;periodic
                if (line.length < 7) {
                    log.warn("Skipping invalid line: {}", (Object) line);
                    continue;
                }

                try {
                    String amountStr = line[0];
                    String dateStr = line[1];
                    String description = line[2];
                    String recipientName = line[3];
                    String recipientAddress = line[4];
                    String categoryName = line[5];
                    String periodicStr = line[6];

                    // Parse basic fields
                    BigDecimal amount = new BigDecimal(amountStr);
                    // Conversion to LocalDateTime as expected by PaymentItem
                    LocalDate parsedDate = LocalDate.parse(dateStr, DateTimeFormatter.ISO_LOCAL_DATE);
                    boolean periodic = Boolean.parseBoolean(periodicStr);

                    // Handle Recipient
                    Recipient recipient = null;
                    if (recipientName != null && !recipientName.isBlank()) {
                        Optional<Recipient> existingRecipient = recipientRepository.findByUserIdAndName(user.getId(),
                                recipientName);
                        if (existingRecipient.isPresent()) {
                            recipient = existingRecipient.get();
                            // Update address if provided and currently empty
                            if (recipientAddress != null && !recipientAddress.isBlank() &&
                                    (recipient.getAddress() == null || recipient.getAddress().isBlank())) {
                                recipient.setAddress(recipientAddress);
                                recipientRepository.save(recipient);
                                updatedRecipients++;
                            }
                        } else {
                            recipient = Recipient.builder()
                                    .name(recipientName)
                                    .address(recipientAddress)
                                    .user(user)
                                    .build();
                            recipientRepository.save(recipient);
                            createdRecipients++;
                        }
                    }

                    // Handle Category
                    Category category = null;
                    if (categoryName != null && !categoryName.isBlank()) {
                        Optional<Category> existingCategory = categoryRepository.findByUserIdAndName(user.getId(),
                                categoryName);
                        if (existingCategory.isPresent()) {
                            category = existingCategory.get();
                        } else {
                            // Find or create "standard" category type
                            CategoryType standardType = categoryTypeRepository
                                    .findByUserIdAndName(user.getId(), "standard")
                                    .orElseGet(() -> {
                                        CategoryType newType = CategoryType.builder()
                                                .name("standard")
                                                .description("Default category type for imports")
                                                .user(user)
                                                .build();
                                        return categoryTypeRepository.save(newType);
                                    });

                            category = Category.builder()
                                    .name(categoryName)
                                    .type(standardType)
                                    .user(user)
                                    .children(new java.util.ArrayList<>()) // Initialize children list
                                    .build();

                            categoryRepository.save(category);
                            createdCategories++;
                        }
                    }

                    // Create Payment Item
                    PaymentItem paymentItem = PaymentItem.builder()
                            .amount(amount)
                            .date(parsedDate.atStartOfDay())
                            .description(description)
                            .periodic(periodic)
                            .user(user)
                            .recipient(recipient)
                            .standardCategory(category)
                            .categories(new HashSet<>())
                            .build();

                    // Associate category
                    if (category != null) {
                        paymentItem.getCategories().add(category);
                    }

                    paymentItemRepository.save(paymentItem);
                    createdPayments++;

                } catch (Exception e) {
                    log.error("Error processing CSV line: {}", (Object) line, e);
                    // Continue processing other lines
                }
            }
        }

        return ImportCsvSummary.builder()
                .created_payments(createdPayments)
                .created_recipients(createdRecipients)
                .updated_recipients(updatedRecipients)
                .created_categories(createdCategories)
                .build();
    }
}
