import{a as x,k as w,r as D,l as I,n as P,o as v,j as e,e as t}from"./index-BPsbz2y5.js";import{P as j}from"./PaymentItemForm-CcKyuVcj.js";import{C}from"./ConfirmationDialog-jwZNcEZG.js";const d=t.div`
  padding: 1rem;
  /* Add more styles as needed for page layout */
`,E=t.p`
  color: #ccc;
  text-align: center;
  padding: 2rem;
`,k=t.p`
  color: red;
  text-align: center;
  padding: 2rem;
`,S=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`,A=t.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-negative);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #dc2626;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,T=()=>{var u;const l=x(),{id:m}=w(),n=m?parseInt(m,10):void 0,[g,i]=D.useState(!1),{data:c,isLoading:p,isError:y,error:s}=I(n),a=P(),o=v(),h=async r=>{if(typeof r.id!="number"){console.error("handleSubmit in EditItemPage received data without a valid ID. Cannot update.");return}try{await a.mutateAsync(r),l("/")}catch(b){console.error("Failed to update payment item:",b)}},f=async()=>{if(!n){console.error("Cannot delete: No item ID available");return}try{await o.mutateAsync(n),l("/")}catch(r){console.error("Failed to delete payment item:",r)}finally{i(!1)}};return p?e.jsx(d,{children:e.jsx(E,{children:"Loading payment item..."})}):y||!c?e.jsx(d,{children:e.jsxs(k,{children:["Failed to load payment item: ",(s==null?void 0:s.message)||(n?"Item was not found.":"No item ID was provided.")]})}):e.jsxs(d,{children:[e.jsx(j,{initialData:c,onSubmit:h,isSubmitting:a.isPending,submitError:a.isError?((u=a.error)==null?void 0:u.message)||"An unknown error occurred while updating the item.":null}),e.jsx(S,{children:e.jsx(A,{type:"button",onClick:()=>i(!0),disabled:o.isPending,children:o.isPending?"Deleting...":"Delete"})}),e.jsx(C,{isOpen:g,title:"Delete Payment",message:"Are you sure you want to delete this payment? This action cannot be undone. The payment item and any associated invoice documents will be permanently deleted.",confirmText:"Delete",cancelText:"Cancel",confirmVariant:"danger",isLoading:o.isPending,onConfirm:f,onCancel:()=>i(!1)})]})};export{T as default};
