import{b as I,c as S,w as _,r as o,j as n,e as s,B as k,C as A}from"./index-BPsbz2y5.js";import{C as E}from"./ConfirmationDialog-jwZNcEZG.js";const L=s.div`
  padding: 1rem;
  color: #eaeaea;
`,R=s.div`
  width: 45px;
  height: 45px;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    font-size: 0.8rem;
    text-align: center;
  }
`,U=s.button`
  margin-left: auto;
  height: 45px;
  padding: 0 1.25rem;
  border: none;
  border-radius: var(--radius-md);
  background: white;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background: #dedede;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,D=s.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #555;
  border-radius: var(--radius-md);
  background: #2a2a2a;
`,N=s.div`
  font-size: 0.8rem;
  color: #bbb;
  margin-bottom: 0.5rem;
`,P=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,M=s.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #555;
  border-radius: var(--radius-md);
  background: #333;
  color: #eaeaea;
`,z=s.button`
  padding: 0.5rem 1rem;
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
`,j=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 100%;
  justify-content: flex-end;
`,C=s.label`
  font-size: 0.75rem;
  color: #bbb;
`,w=s.select`
  padding: 0.5rem;
  border: 1px solid #555;
  border-radius: var(--radius-md);
  background: #333;
  color: #eaeaea;
  height: 45px;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
`,T=s.div`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) minmax(0, 1fr) 60px auto;
  gap: 1.25rem;
  align-items: flex-end;
  margin-bottom: 1rem;
  min-height: 65px;
`,B=({cat:r,categories:d,types:f,getDescendants:p})=>{const[m,h]=o.useState(r.parent_id??null),[l,c]=o.useState(r.type_id),[u,b]=o.useState(null),[x,t]=o.useState(null),i=o.useRef(null),a=k(r.id);o.useEffect(()=>{h(r.parent_id??null),c(r.type_id)},[r.parent_id,r.type_id]),o.useEffect(()=>{if(!u){t(null);return}const e=URL.createObjectURL(u);return t(e),()=>URL.revokeObjectURL(e)},[u]);const g=d.filter(e=>e.type_id===l&&e.id!==r.id&&!p(r.id).includes(e.id)&&e.name!=="UNCLASSIFIED"),y=async()=>{let e=r.icon_file;u&&(e=await A(u)),await a.mutateAsync({parent_id:m,type_id:l,icon_file:e})};return n.jsxs(T,{children:[n.jsx("span",{children:r.name}),n.jsxs(j,{children:[n.jsx(C,{children:"Parent category"}),n.jsxs(w,{value:m??"",onChange:e=>h(e.target.value===""?null:parseInt(e.target.value)),children:[n.jsx("option",{value:"",children:"No parent"}),g.map(e=>n.jsx("option",{value:e.id,children:e.name},e.id))]})]}),n.jsxs(j,{children:[n.jsx(C,{children:"Type"}),n.jsx(w,{value:l,onChange:e=>c(parseInt(e.target.value)),children:f.map(e=>n.jsx("option",{value:e.id,children:e.name},e.id))})]}),n.jsxs(R,{onClick:()=>{var e;return(e=i.current)==null?void 0:e.click()},children:[x?n.jsx("img",{src:x,alt:"icon preview"}):r.icon_file?n.jsx("img",{src:`/api/download_static/${r.icon_file}`,alt:"icon"}):n.jsx("span",{children:" add icon "}),n.jsx("input",{type:"file",accept:"image/png",style:{display:"none"},ref:i,onChange:e=>{var v;return b(((v=e.target.files)==null?void 0:v[0])||null)}})]}),n.jsx(U,{onClick:y,children:"Save"})]})};function G(){const{data:r=[]}=I(),{data:d=[]}=S(),f=_(),[p,m]=o.useState(""),[h,l]=o.useState(!1),c=o.useMemo(()=>{var t;return(t=d.find(i=>i.name==="standard"))==null?void 0:t.id},[d]),u=o.useMemo(()=>{if(!c)return r.filter(a=>a.name!=="UNCLASSIFIED");const t=r.findIndex(a=>a.type_id===c);if(t===-1)return r.filter(a=>a.name!=="UNCLASSIFIED");const i=r.filter((a,g)=>g!==t);return[r[t],...i].filter(a=>a.name!=="UNCLASSIFIED")},[r,c]),b=o.useMemo(()=>{const t={};return r.forEach(i=>{i.parent_id&&(t[i.parent_id]||(t[i.parent_id]=[]),t[i.parent_id].push(i.id))}),t},[r]),x=t=>{const i=[],a=[t];for(;a.length;){const g=a.pop(),y=b[g]||[];for(const e of y)i.push(e),a.push(e)}return i};return n.jsxs(L,{children:[n.jsx("h1",{children:"Categories"}),n.jsxs(D,{children:[n.jsx(N,{children:"Add new Category"}),n.jsxs(P,{children:[n.jsx(M,{type:"text",value:p,onChange:t=>m(t.target.value),placeholder:"Category name"}),n.jsx(z,{onClick:async()=>{const t=p.trim();if(!t)return;if(t.includes(";")){l(!0);return}const i=c||d[0]&&d[0].id;i&&(await f.mutateAsync({name:t,type_id:i,parent_id:null}),m(""))},disabled:!p.trim()||f.isPending,children:"Add"})]})]}),u.map(t=>n.jsx(B,{cat:t,categories:r,types:d,getDescendants:x},t.id)),n.jsx(E,{isOpen:h,title:"Invalid Character",message:"Semicolon (;) characters are not allowed in category names. Please remove them before submitting.",confirmText:"OK",confirmVariant:"primary",onConfirm:()=>l(!1),onCancel:()=>l(!1)})]})}export{G as default};
