import{c as h,A as j,r as l,j as e,e as o}from"./index-BPsbz2y5.js";import{C}from"./ConfirmationDialog-jwZNcEZG.js";const T=o.div`
  padding: 1rem;
  color: #eaeaea;
`,w=o.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #555;
  padding-bottom: 0.5rem;
`,v=o.ul`
  list-style: none;
  padding: 0;
`,S=o.li`
  background-color: #2a2a2a;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,k=o.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #333;
  border-radius: 8px;
`,u=o.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #444;
  color: #fff;
  font-size: 1rem;
`,A=o.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`,y=o.p`
  color: red;
  font-size: 0.8rem;
`,L=()=>{var g;const{data:n,isLoading:i,error:t}=h(),a=j(),[s,p]=l.useState(""),[d,m]=l.useState(""),[x,c]=l.useState(!1),b=async r=>{if(r.preventDefault(),!s.trim()){alert("Category type name cannot be empty.");return}if(s.includes(";")||d.includes(";")){c(!0);return}try{await a.mutateAsync({name:s,description:d||null}),p(""),m("")}catch(f){console.error("Failed to create category type",f)}};return e.jsxs(T,{children:[e.jsx(w,{children:"Category Types"}),e.jsxs(k,{onSubmit:b,children:[e.jsx("h3",{children:"Add New Category Type"}),e.jsx(u,{type:"text",placeholder:"Type Name (e.g., Expense Type, Income Source)",value:s,onChange:r=>p(r.target.value),required:!0}),e.jsx(u,{type:"text",placeholder:"Optional Description",value:d,onChange:r=>m(r.target.value)}),e.jsxs(A,{type:"submit",disabled:a.isPending,children:[" ",a.isPending?"Adding...":"Add Type"]}),a.isError&&e.jsxs(y,{children:["Failed to add type: ",((g=a.error)==null?void 0:g.message)||"An unknown error occurred."]})]}),i&&e.jsx("p",{children:"Loading category types..."}),t&&e.jsxs(y,{children:["Error loading types: ",(t==null?void 0:t.message)||"Could not fetch category types."]}),!i&&!t&&n&&n.length>0&&e.jsx(v,{children:n.map(r=>e.jsx(S,{children:e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),r.description&&e.jsxs("em",{style:{marginLeft:"0.5rem",fontSize:"0.9em",color:"#bbb"},children:["(",r.description,")"]})]})},r.id))}),!i&&!t&&(!n||n.length===0)&&e.jsx("p",{children:"No category types defined yet. Add one using the form above."}),e.jsx(C,{isOpen:x,title:"Invalid Character",message:"Semicolon (;) characters are not allowed in category type names or descriptions. Please remove them before submitting.",confirmText:"OK",confirmVariant:"primary",onConfirm:()=>c(!1),onCancel:()=>c(!1)})]})};export{L as default};
