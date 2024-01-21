
var swiper = new Swiper(".slide-content", {
  slidesPerView: slides(),
  spaceBetween: 20,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});


function slides(){
  let box = document.querySelector(".section-2")
let width = parseInt(box.offsetWidth);

if(width< 1160 && width >662){
return 2;
}
else if(width< 662){
return 1;
}

else{
  return 3;
}
  
}

slides()







let sections = document.querySelectorAll('section')

let navLinks = document.querySelectorAll('.nav-right a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('.nav-right a[href*=' + id + ']').classList.add('active')
      });
    };

  });
};




let hamBurger= document.querySelector(".hamburger")
let navRight= document.querySelector(".nav-right") 
let social= document.querySelector(".social-media")
let navRightA= document.querySelector(".nav-right a")
hamBurger.addEventListener("click", ()=>{
  navRight.classList.toggle("show")
  social.classList.toggle("show-social")
  navRightA.classList.toggle("margin")


  if(navRight.className == "nav-right show"){
    document.getElementById("close").className= "ri-close-fill";
  }

  else{
    document.getElementById("close").className= 
    "ri-menu-fill"
  }

})