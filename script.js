window.lucide?.createIcons();const CONFIG={whatsapp:"5581999289575",phone:"(81) 99928-9575",email:"contato@transportadoragoncalo.com.br"};const wa="https://wa.me/"+CONFIG.whatsapp;document.querySelectorAll(".js-whatsapp").forEach(a=>a.href=wa);document.querySelectorAll(".js-quote").forEach(a=>a.href=wa+"?text="+encodeURIComponent("Olá! Vim pelo site da Gonçalo Transportadora e gostaria de solicitar uma cotação."));document.querySelectorAll(".js-phone").forEach(e=>e.textContent=CONFIG.phone);document.querySelectorAll(".js-email-text").forEach(e=>e.textContent=CONFIG.email);document.querySelectorAll(".js-email").forEach(a=>a.href="mailto:"+CONFIG.email);document.getElementById("year").textContent=new Date().getFullYear();const header=document.querySelector(".header");addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>15),{passive:true});const menu=document.querySelector(".menu"),links=document.querySelector(".links");menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)});links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(e=>io.observe(e));const phone=document.querySelector('input[name="phone"]');phone?.addEventListener("input",e=>{const d=e.target.value.replace(/\D/g,"").slice(0,11);let v=d;if(d.length>2)v=`(${d.slice(0,2)}) ${d.slice(2)}`;if(d.length>7)v=`(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;e.target.value=v});document.getElementById("quote-form").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget),v=(k,f="Não informado")=>(d.get(k)||"").trim()||f;const msg=["Olá! Vim pelo site da Gonçalo Transportadora e gostaria de solicitar uma cotação.","",`Nome: ${v("name","")}`,`Empresa: ${v("company")}`,`Meu WhatsApp: ${v("phone","")}`,"","DADOS DA OPERAÇÃO",`Origem / coleta: ${v("origin","")}`,`Destino / entrega: ${v("destination","")}`,`Tipo de carga: ${v("cargo","")}`,`Peso aproximado: ${v("weight","")}`,`Dimensões: ${v("dimensions","")}`,`Quantidade de volumes: ${v("quantity","")}`,`Prazo / data desejada: ${v("deadline","")}`,`Observações: ${v("message","Sem observações adicionais")}`].join("\n");open(wa+"?text="+encodeURIComponent(msg),"_blank","noopener,noreferrer")});
// Premium micro-interactions
const counters=[...document.querySelectorAll("[data-counter]")];
const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  const el=entry.target,target=Number(el.dataset.counter||0),prefix=el.dataset.prefix||"";
  const start=performance.now(),duration=900;
  const tick=now=>{
    const p=Math.min(1,(now-start)/duration);
    const eased=1-Math.pow(1-p,3);
    el.textContent=prefix+Math.round(target*eased);
    if(p<1)requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  counterObserver.unobserve(el);
}),{threshold:.6});
counters.forEach(el=>counterObserver.observe(el));

const heroMedia=document.querySelector(".hero-media img");
if(heroMedia && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches){
  document.querySelector(".hero")?.addEventListener("mousemove",e=>{
    const r=e.currentTarget.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    heroMedia.style.setProperty("--mx",x.toFixed(3));
    heroMedia.style.setProperty("--my",y.toFixed(3));
  });
}
