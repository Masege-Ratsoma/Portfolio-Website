
/* ===show menu=== */

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose= document.getElementById(nav-close)


/* check if menu shows */

if(navToggle){
  navToggle.addEventListener('click', ()=>{
      navMenu.classList.remove('show-menu')
  })
}

 /* === Menu Hidden === */

 if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
 }

 