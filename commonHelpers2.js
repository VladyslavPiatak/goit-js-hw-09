import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),s="feedback-form-state",a=localStorage.getItem(s),r=JSON.parse(a),m=()=>{try{const t=JSON.parse(a)}catch(t){console.error("Помилка при розборі JSON:",t),e.reset()}if(a!==null)return e.elements.email.value=r.email,e.elements.message.value=r.message,a};m();e.addEventListener("input",l);e.addEventListener("submit",n);function l(t){const o={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(s,JSON.stringify(o))}function n(t){t.preventDefault(),console.log({email:e.elements.email.value,message:e.elements.message.value}),localStorage.removeItem(s),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map