'use strict';
const menuButton=document.querySelector('.menu');
const nav=document.querySelector('#nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('[data-plan]').forEach(link=>link.addEventListener('click',()=>{const select=document.querySelector('#plan');if(select)select.value=link.dataset.plan;}));
document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const notice=document.querySelector('#notice');if(notice)notice.textContent='Este formulario es una demostración y todavía no envía consultas. Próximamente estará conectado al CRM.';});
