import{r as d,j as e,e as r,m as l}from"./index-BPsbz2y5.js";const v=l`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,h=l`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`,k=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${v} 0.2s ease-out;
`,w=r.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-surface, #1c1c1c);
  border: 1px solid #333;
  border-radius: var(--radius-lg, 0.75rem);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 400px;
  animation: ${h} 0.2s ease-out;
`,j=r.div`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #333;
`,D=r.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary, #eaeaea);
  margin: 0;
`,C=r.div`
  padding: 1.5rem;
`,E=r.p`
  color: var(--color-text-secondary, #9e9e9e);
  line-height: 1.5;
  margin: 0;
`,R=r.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #333;
`,s=r.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-md, 0.5rem);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;
  
  ${o=>{switch(o.variant){case"danger":return`
          background: var(--color-negative, #e74c3c);
          color: white;
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `;case"primary":return`
          background: var(--color-positive, #2ecc71);
          color: white;
          &:hover:not(:disabled) {
            background: #059669;
          }
        `;case"secondary":default:return`
          background: #444;
          color: var(--color-text-primary, #eaeaea);
          border: 1px solid #555;
          &:hover:not(:disabled) {
            background: #555;
          }
        `}}}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid var(--color-positive, #2ecc71);
    outline-offset: 2px;
  }
`,B=({isOpen:o,title:c,message:u,confirmText:m="Confirm",cancelText:f="Cancel",confirmVariant:p="primary",isLoading:i=!1,onConfirm:g,onCancel:a})=>{const x=d.useRef(null),n=d.useRef(null);d.useEffect(()=>{if(!o)return;const t=y=>{y.key==="Escape"&&a()};return n.current&&n.current.focus(),document.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",t),document.body.style.overflow="unset"}},[o,a]);const b=t=>{t.target===t.currentTarget&&a()};return o?e.jsx(k,{onClick:b,children:e.jsxs(w,{ref:x,role:"dialog","aria-modal":"true","aria-labelledby":"dialog-title",children:[e.jsx(j,{children:e.jsx(D,{id:"dialog-title",children:c})}),e.jsx(C,{children:e.jsx(E,{children:u})}),e.jsxs(R,{children:[e.jsx(s,{type:"button",variant:"secondary",onClick:a,disabled:i,children:f}),e.jsx(s,{ref:n,type:"button",variant:p,onClick:g,disabled:i,children:i?"Loading...":m})]})]})}):null};export{B as C};
