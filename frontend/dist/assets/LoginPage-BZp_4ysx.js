import{a as w,i as j,r as t,j as e,e as r,m as k}from"./index-BPsbz2y5.js";const S=k`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,z=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background: #000;
  padding: var(--spacing-md);
`,C=r.form`
  width: 100%;
  max-width: 400px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  animation: ${S} 0.4s ease-out;
  border: 1px solid #272727;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
`,E=r.div`
  text-align: center;
  margin-bottom: 2rem;
`,F=r.span`
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--color-positive);
  display: block;
  margin-bottom: 0.5rem;
`,I=r.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
`,L=r.p`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-top: 0.25rem;
`,p=r.div`
  margin-bottom: 1.25rem;
`,b=r.label`
  display: block;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  margin-bottom: 0.35rem;
  font-weight: 500;
`,h=r.input`
  width: 100%;
  padding: 0.65rem 0.85rem;
  background: #111;
  border: 1px solid #333;
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2563eb;
  }

  &::placeholder {
    color: #555;
  }
`,P=r.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  user-select: none;

  input[type='checkbox'] {
    accent-color: #2563eb;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`,B=r.button`
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #1d4ed8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,R=r.div`
  background: rgba(231, 76, 60, 0.15);
  border: 1px solid rgba(231, 76, 60, 0.4);
  color: #e74c3c;
  padding: 0.6rem 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,A=()=>{const i=w(),{login:c}=j(),[n,x]=t.useState(""),[a,f]=t.useState(""),[s,v]=t.useState(!1),[d,l]=t.useState(null),[m,u]=t.useState(!1),y=t.useCallback(async o=>{o.preventDefault(),l(null),u(!0);try{await c(n,a,s),i("/",{replace:!0})}catch(g){l(g instanceof Error?g.message:"Login failed")}finally{u(!1)}},[n,a,s,c,i]);return e.jsx(z,{children:e.jsxs(C,{onSubmit:y,children:[e.jsxs(E,{children:[e.jsx(F,{children:"€"}),e.jsx(I,{children:"FinanceBook"}),e.jsx(L,{children:"Sign in to manage your finances"})]}),d&&e.jsxs(R,{children:[e.jsx("span",{children:"⚠️"})," ",d]}),e.jsxs(p,{children:[e.jsx(b,{htmlFor:"login-username",children:"Username"}),e.jsx(h,{id:"login-username",type:"text",placeholder:"Enter your username",value:n,onChange:o=>x(o.target.value),autoComplete:"username",autoFocus:!0,required:!0})]}),e.jsxs(p,{children:[e.jsx(b,{htmlFor:"login-password",children:"Password"}),e.jsx(h,{id:"login-password",type:"password",placeholder:"Enter your password",value:a,onChange:o=>f(o.target.value),autoComplete:"current-password",required:!0})]}),e.jsxs(P,{children:[e.jsx("input",{id:"login-remember",type:"checkbox",checked:s,onChange:o=>v(o.target.checked)}),"Stay logged in"]}),e.jsx(B,{type:"submit",disabled:m,children:m?"Signing in…":"Sign In"})]})})};export{A as default};
