import{a,r as s,j as t,e as r}from"./index-BPsbz2y5.js";const c=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
`,i=r.h1`
  color: var(--color-positive);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`,d=r.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-positive);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #059669;
  }
`,l=()=>{const o=a(),e=s.useCallback(()=>{o("/")},[o]);return s.useEffect(()=>{const n=setTimeout(()=>{e()},2500);return()=>clearTimeout(n)},[e]),t.jsxs(c,{children:[t.jsx(i,{children:"OK, payment added successfully"}),t.jsx(d,{onClick:e,children:"Back"})]})};export{l as default};
