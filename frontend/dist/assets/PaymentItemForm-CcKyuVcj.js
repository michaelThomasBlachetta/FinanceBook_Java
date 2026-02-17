import{a as or,r as i,p as tr,c as nr,q as sr,s as ir,t as ar,v as dr,w as cr,x as lr,y as ur,j as o,e as n,z as be}from"./index-BPsbz2y5.js";import{C as pr}from"./ConfirmationDialog-jwZNcEZG.js";const gr=1e3,we=255,mr=500,Se=255,fr=n.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: var(--color-background);
  color: var(--color-text-primary);
`,hr=n.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-text-primary);
`,F=n.div`
  margin-bottom: 1.5rem;
`,R=n.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`,vr=n.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  background: #2a2a2a;
  color: var(--color-text-primary);
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-positive);
  }
`,xr=n.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 0.5rem;
`,je=n.button`
  flex: 1;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  background-color: ${r=>r.active?r.isPositive?"var(--color-positive)":"var(--color-negative)":"#666"};
  
  color: ${r=>r.active?"white":"#ccc"};

  &:hover {
    background-color: ${r=>r.active?r.isPositive?"#059669":"#dc2626":"#777"};
  }
`,yr=n.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,br=n.input`
  width: 18px;
  height: 18px;
`,wr=n.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  background: #2a2a2a;
  color: var(--color-text-primary);
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-positive);
  }
`,Sr=n.div`
  background: #2a2a2a;
  border-radius: var(--radius-md);
  padding: 1rem;
  border: 1px solid #444;
`,Ce=n.div`
  position: relative;
  margin-bottom: 1rem;
`,ke=n.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  background: ${r=>r.disabled?"#2a2a2a":"#333"};
  color: var(--color-text-primary);
  box-sizing: border-box;
  cursor: ${r=>r.disabled?"not-allowed":"text"};

  &:focus {
    outline: none;
    border-color: var(--color-positive);
  }
`,Ie=n.ul`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  background: #2a2a2a;
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
  z-index: 10;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`,X=n.li`
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background: ${r=>r.isSelected?"#3a3a3a":"transparent"};
  color: var(--color-text-primary);

  &:hover {
    background: #444;
  }
`,q=n.li`
  padding: 0.5rem 0.75rem;
  color: var(--color-text-secondary);
`,K=r=>r.trim().replace(/\s+/g," "),Pe=n.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  background: #333;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  box-sizing: border-box;
`,jr=n.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-positive);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    background: #059669;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,Cr=n.div`
  background: #2a2a2a;
  border-radius: var(--radius-md);
  padding: 1rem;
  border: 1px solid #444;
`,kr=n.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Ir=n.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  background: #333;
  color: var(--color-text-primary);
`,Pr=n.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-positive);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #059669;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,Fr=n.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-positive);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 2rem;

  &:hover {
    background: #059669;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,Fe=n.div`
  color: var(--color-negative);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,Rr=n.div`
  background: #2a2a2a;
  border-radius: var(--radius-md);
  padding: 1rem;
  border: 1px solid #444;
`,Er=n.div`
  border: 2px dashed ${r=>r.isDragOver||r.hasFile?"var(--color-positive)":"#666"};
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${r=>r.isDragOver?"rgba(46, 204, 113, 0.1)":"transparent"};

  &:hover {
    border-color: var(--color-positive);
    background: rgba(46, 204, 113, 0.05);
  }
`,Ar=n.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #888;
`,Mr=n.div`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,_r=n.div`
  color: #666;
  font-size: 0.8rem;
`,Re=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
`,Ee=n.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ae=n.div`
  color: var(--color-text-primary);
  font-size: 0.9rem;
  font-weight: 500;
`,Me=n.div`
  color: var(--color-text-secondary);
  font-size: 0.8rem;
`,_e=n.div`
  display: flex;
  gap: 0.5rem;
`,ze=n.button`
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  background: ${r=>r.variant==="danger"?"var(--color-negative)":"#555"};
  color: white;

  &:hover {
    background: ${r=>r.variant==="danger"?"#dc2626":"#666"};
  }

  &:disabled {
    background: #444;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,zr=n.input`
  display: none;
`,Tr=n.div`
  margin-top: 1rem;
`,Lr=n.div`
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
`,Nr=n.div`
  height: 100%;
  background: var(--color-positive);
  width: ${r=>r.progress}%;
  transition: width 0.3s ease;
`,Or=n.div`
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
`,Gr=({initialData:r,onSubmit:W,isSubmitting:ie=!1,submitError:ae})=>{const Te=or(),m=!!(W&&r),[Y,de]=i.useState(r?Math.abs(r.amount).toString():""),[V,J]=i.useState(r?r.amount>=0:!0),[ce,le]=i.useState((r==null?void 0:r.periodic)??!1),[Q,ue]=i.useState((r==null?void 0:r.description)??""),[u,z]=i.useState(r!=null&&r.recipient_id?r.recipient_id.toString():""),[f,y]=i.useState(""),[b,w]=i.useState(""),[Le,E]=i.useState(!1),[Ne,h]=i.useState(!1),[T,v]=i.useState(""),Z=i.useRef(null),[S,I]=i.useState(()=>r!=null&&r.standard_category_id?r.standard_category_id.toString():r!=null&&r.categories&&r.categories[0]?r.categories[0].id.toString():""),[L,D]=i.useState(""),[Oe,j]=i.useState(!1),[N,C]=i.useState(""),ee=i.useRef(null),[pe,a]=i.useState(null),[Ue,A]=i.useState(!1),[p,re]=i.useState(null),[Be,oe]=i.useState(!1),[ge,g]=i.useState(0),[te,P]=i.useState(!1),{data:l,isLoading:M,refetch:Ur}=tr(),{data:O}=nr(),me=i.useMemo(()=>{var t;if(!O)return;const e=O.find(s=>s.name.toLowerCase()==="standard");return e?e.id:(t=O[0])==null?void 0:t.id},[O]),{data:fe,isLoading:_}=sr(me),ne=ir(),$e=ar(),Ge=dr(),He=cr(),he=lr(),se=ur(),k=i.useMemo(()=>(fe??[]).filter(e=>e.name!=="UNCLASSIFIED"),[fe]),U=i.useMemo(()=>{const e=T.trim().toLowerCase();return l?e?l.filter(t=>t.name.toLowerCase().startsWith(e)):l:[]},[l,T]),B=i.useMemo(()=>{const e=N.trim().toLowerCase();return e?k.filter(t=>t.name.toLowerCase().startsWith(e)):k},[k,N]);i.useEffect(()=>{r&&(de(Math.abs(r.amount).toString()),J(r.amount>=0),le(r.periodic),ue(r.description??""),z(r.recipient_id?r.recipient_id.toString():""),r.standard_category_id?I(r.standard_category_id.toString()):r.categories&&r.categories[0]?I(r.categories[0].id.toString()):I(""))},[r]),i.useEffect(()=>{const e=t=>{Z.current&&!Z.current.contains(t.target)&&h(!1),ee.current&&!ee.current.contains(t.target)&&j(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),i.useEffect(()=>{if(u&&l){const e=l.find(t=>t.id.toString()===u);e&&(v(e.name),y(t=>t||e.name),w(t=>t||e.address||""))}else u||v("")},[u,l]),i.useEffect(()=>{if(S){const e=k.find(t=>t.id.toString()===S);e&&C(e.name)}else C("")},[S,k]);const $=e=>{if(z(e),E(!1),e&&l){const t=l.find(s=>s.id.toString()===e);t&&(y(t.name),w(t.address||""),v(t.name))}else y(""),w(""),v("");h(!1)},G=e=>{if(I(e),e){const t=k.find(s=>s.id.toString()===e);t&&C(t.name)}else C("");j(!1)};i.useEffect(()=>{if(u&&l){const e=l.find(t=>t.id.toString()===u);if(e){const t=f!==e.name,s=b!==(e.address||"");E(t||s)}}else E(f.trim()!==""||b.trim()!=="")},[f,b,u,l]);const Xe=async()=>{var x,H,xe,ye;const e=K(f);if(!e){a("Recipient name is required");return}if(f.includes(";")||b.includes(";")){A(!0);return}const t=b.trim(),s=t||null;if(u){try{const d=await Ge.mutateAsync({id:Number(u),name:e,address:s});y(d.name),w(d.address??""),v(d.name),E(!1),h(!1),a(null)}catch(d){console.error("Error updating recipient:",d),be(d)&&((H=(x=d.response)==null?void 0:x.data)!=null&&H.detail)?a(String(d.response.data.detail)):a("Failed to update recipient. Please try again.")}return}const c=l==null?void 0:l.find(d=>K(d.name)===e);if(c){a("Recipient name already exists. Select it to update instead."),z(c.id.toString()),y(c.name),w(t||(c.address??"")),v(c.name),h(!1);return}try{const d=await $e.mutateAsync({name:e,address:s});z(d.id.toString()),y(d.name),w(d.address??""),E(!1),v(d.name),h(!1),a(null)}catch(d){console.error("Error creating recipient:",d),be(d)&&((ye=(xe=d.response)==null?void 0:xe.data)!=null&&ye.detail)?a(String(d.response.data.detail)):a("Failed to create recipient. Please try again.")}},qe=async()=>{const e=K(L);if(!e)return;if(e.includes(";")){A(!0);return}const t=k.find(s=>K(s.name)===e);if(t){a("Category name already exists. Select it instead."),I(t.id.toString()),C(t.name),D(""),j(!1);return}try{const s=await He.mutateAsync({name:e,type_id:me??1,parent_id:null});I(s.id.toString()),C(s.name),j(!1),D(""),a(null)}catch(s){console.error("Error creating category:",s),a("Failed to create category. Please try again.")}},Ke=e=>{if(!["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/msword","image/jpeg","image/png","image/gif","image/bmp","image/tiff"].includes(e.type))return"File type not supported. Please upload PDF, DOCX, DOC, or image files.";const s=25*1024*1024;return e.size>s?"File size exceeds 25MB limit.":null},We=e=>{if(e===0)return"0 Bytes";const t=1024,s=["Bytes","KB","MB","GB"],c=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,c)).toFixed(2))+" "+s[c]},ve=e=>{const t=Ke(e);if(t){a(t);return}re(e),a(null)},Ye=e=>{var s;const t=(s=e.target.files)==null?void 0:s[0];t&&ve(t)},Ve=e=>{e.preventDefault(),oe(!0)},Je=e=>{e.preventDefault(),oe(!1)},Qe=e=>{e.preventDefault(),oe(!1);const t=e.dataTransfer.files[0];t&&ve(t)},Ze=async()=>{if(r!=null&&r.id)try{await se.mutateAsync(r.id),a(null)}catch(e){console.error("Error deleting invoice:",e),a("Failed to delete invoice. Please try again.")}},De=()=>{re(null),a(null)},er=()=>{const e=[{value:Q,name:"Payment Description"},{value:f,name:"Recipient Name"},{value:b,name:"Recipient Address"},{value:L,name:"Category Name"}];for(const t of e)if(t.value&&t.value.includes(";"))return!1;return!0},rr=async e=>{if(e.preventDefault(),a(null),!er()){A(!0);return}const t=parseFloat(Y);if(isNaN(t)||t<=0){a("Please enter a valid amount greater than 0");return}try{const s={amount:V?t:-t,date:m&&r?r.date:new Date().toISOString(),periodic:ce,description:Q.trim()||null,recipient_id:null,category_ids:[],standard_category_id:null};if(m&&(r==null?void 0:r.id)!==void 0&&(s.id=r.id),u&&!u.startsWith("new:")&&(s.recipient_id=parseInt(u)),S){const c=parseInt(S);s.category_ids=[c],s.standard_category_id=c}if(m&&W){if(await W(s),p&&(r!=null&&r.id))try{P(!0),g(0);const c=setInterval(()=>{g(x=>Math.min(x+10,90))},100);await he.mutateAsync({paymentItemId:r.id,file:p}),clearInterval(c),g(100),re(null),setTimeout(()=>{g(0),P(!1)},1e3)}catch(c){console.error("Error uploading invoice after payment update:",c),a("Payment updated successfully, but failed to upload invoice. You can try uploading it again."),P(!1),g(0)}}else{const c=await ne.mutateAsync(s);if(p&&c.id)try{P(!0),g(0);const x=setInterval(()=>{g(H=>Math.min(H+10,90))},100);await he.mutateAsync({paymentItemId:c.id,file:p}),clearInterval(x),g(100),setTimeout(()=>{g(0),P(!1)},500)}catch(x){console.error("Error uploading invoice after payment creation:",x),a("Payment created successfully, but failed to upload invoice. You can upload it later by editing the payment."),P(!1),g(0)}Te("/add-success")}}catch(s){console.error("Error creating payment:",s),a("Failed to submit payment. Please try again.")}};return o.jsxs(fr,{children:[o.jsx(hr,{children:m?"Edit Payment":"Add New Payment"}),o.jsxs("form",{onSubmit:rr,children:[o.jsxs(F,{children:[o.jsx(R,{children:"Amount (€)"}),o.jsx(vr,{type:"number",step:"0.01",min:"0",value:Y,onChange:e=>de(e.target.value),placeholder:"0.00",required:!0}),o.jsxs(xr,{children:[o.jsx(je,{type:"button",active:V,isPositive:!0,onClick:()=>J(!0),children:"+"}),o.jsx(je,{type:"button",active:!V,isPositive:!1,onClick:()=>J(!1),children:"-"})]})]}),o.jsxs(F,{children:[o.jsx(R,{children:"Payment Description"}),o.jsx(wr,{placeholder:"Describe what this payment is for...",value:Q,onChange:e=>ue(e.target.value),maxLength:gr})]}),o.jsx(F,{children:o.jsxs(yr,{children:[o.jsx(br,{type:"checkbox",checked:ce,onChange:e=>le(e.target.checked)}),o.jsx(R,{style:{margin:0},children:"Periodic Payment"})]})}),o.jsxs(F,{children:[o.jsx(R,{children:"Recipient"}),o.jsxs(Sr,{children:[o.jsxs(Ce,{ref:Z,children:[o.jsx(ke,{type:"text",placeholder:M?"Loading recipients...":"Search recipient...",value:T,onChange:e=>{v(e.target.value),M||h(!0)},onFocus:()=>{M||h(!0)},onKeyDown:e=>{e.key==="Escape"&&h(!1),e.key==="Enter"&&(e.preventDefault(),T.trim()?U.length>0&&$(U[0].id.toString()):$(""))},maxLength:we,disabled:M}),Ne&&o.jsx(Ie,{children:M?o.jsx(q,{children:"Loading recipients..."}):o.jsxs(o.Fragment,{children:[o.jsx(X,{isSelected:u==="",onMouseDown:()=>$(""),children:"-- Select Recipient (Optional) --"}),U.length>0?U.map(e=>o.jsx(X,{isSelected:u===e.id.toString(),onMouseDown:()=>$(e.id.toString()),children:e.name},e.id)):o.jsx(q,{children:"No matching recipients"})]})})]}),o.jsx(Pe,{type:"text",placeholder:"Name",value:f,onChange:e=>y(e.target.value),maxLength:we}),o.jsx(Pe,{type:"text",placeholder:"Address",value:b,onChange:e=>w(e.target.value),maxLength:mr}),o.jsx(jr,{type:"button",onClick:Xe,disabled:!f.trim()||!Le,children:"Add Recipient"})]})]}),o.jsxs(F,{children:[o.jsx(R,{children:"Category"}),o.jsxs(Cr,{children:[o.jsxs(Ce,{ref:ee,children:[o.jsx(ke,{type:"text",placeholder:_?"Loading categories...":"Search category...",value:N,onChange:e=>{C(e.target.value),_||j(!0)},onFocus:()=>{_||j(!0)},onKeyDown:e=>{e.key==="Escape"&&j(!1),e.key==="Enter"&&(e.preventDefault(),N.trim()?B.length>0&&G(B[0].id.toString()):G(""))},maxLength:Se,disabled:_}),Oe&&o.jsx(Ie,{children:_?o.jsx(q,{children:"Loading categories..."}):o.jsxs(o.Fragment,{children:[o.jsx(X,{isSelected:S==="",onMouseDown:()=>G(""),children:"-- Select Category (Optional) --"}),B.length>0?B.map(e=>o.jsx(X,{isSelected:S===e.id.toString(),onMouseDown:()=>G(e.id.toString()),children:e.name},e.id)):o.jsx(q,{children:"No matching categories"})]})})]}),o.jsxs(kr,{children:[o.jsx(Ir,{type:"text",placeholder:"Add new category",value:L,onChange:e=>D(e.target.value),maxLength:Se}),o.jsx(Pr,{type:"button",onClick:qe,disabled:!L.trim(),children:"Add"})]})]})]}),o.jsxs(F,{children:[o.jsx(R,{children:"Invoice Document"}),o.jsxs(Rr,{children:[m&&r&&r.invoice_path&&!p&&o.jsxs(Re,{children:[o.jsxs(Ee,{children:[o.jsx(Ae,{children:"Invoice uploaded"}),o.jsx(Me,{children:"Click download to view file"})]}),o.jsx(_e,{children:o.jsx(ze,{type:"button",variant:"danger",onClick:Ze,disabled:se.isPending,children:se.isPending?"Deleting...":"Delete"})})]}),!te&&o.jsxs(o.Fragment,{children:[o.jsx(zr,{ref:e=>{e&&(e.onclick=()=>e.click())},type:"file",accept:".pdf,.docx,.doc,.jpg,.jpeg,.png,.gif,.bmp,.tiff",onChange:Ye}),o.jsxs(Er,{isDragOver:Be,hasFile:!!p,onClick:()=>{var e;return(e=document.querySelector('input[type="file"]'))==null?void 0:e.click()},onDragOver:Ve,onDragLeave:Je,onDrop:Qe,children:[o.jsx(Ar,{}),o.jsx(Mr,{children:p?m?"File selected - will be uploaded when UPDATE is pressed":"File selected - will be uploaded after payment creation":m&&(r!=null&&r.invoice_path)?"Drop a new file here or click to replace":"Drop your invoice here or click to browse"}),o.jsx(_r,{children:"Supports PDF, DOCX, DOC, and image files up to 25MB"})]})]}),p&&!te&&o.jsxs(Re,{children:[o.jsxs(Ee,{children:[o.jsx(Ae,{children:p.name}),o.jsx(Me,{children:We(p.size)})]}),o.jsx(_e,{children:o.jsx(ze,{type:"button",variant:"danger",onClick:De,children:"Remove"})})]}),te&&o.jsxs(Tr,{children:[o.jsx(Lr,{children:o.jsx(Nr,{progress:ge})}),o.jsxs(Or,{children:["Uploading... ",ge,"%"]})]})]})]}),ae&&o.jsx(Fe,{children:ae}),pe&&o.jsx(Fe,{children:pe}),o.jsx(Fr,{type:"submit",disabled:(m?ie:ne.isPending)||!Y,children:m?ie?"Updating...":"Update":ne.isPending?"Creating...":"Submit"})]}),o.jsx(pr,{isOpen:Ue,title:"Invalid Character",message:"Semicolon (;) characters are not allowed in any input fields. Please remove them before submitting.",confirmText:"OK",confirmVariant:"primary",onConfirm:()=>A(!1),onCancel:()=>A(!1)})]})};export{Gr as P};
