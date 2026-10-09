const menuBtn=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
}));

const dialog=document.querySelector('#lightbox');
const dialogImg=dialog?.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img=>{
  img.parentElement.addEventListener('click',()=>{
    dialogImg.src=img.src;
    dialogImg.alt=img.alt;
    dialog.showModal();
  });
});
dialog?.querySelector('.close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

document.addEventListener('keydown',e=>{if(e.key==='Escape'&&dialog?.open)dialog.close()});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
