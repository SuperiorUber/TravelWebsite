const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
navToggle.addEventListener("click", function () {
  //show the menu
  navMenu.classList.add("show-menu");
});

//Hide menu
navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== Video ====================*/
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playPause() {
  if(videoFile.paused) {
    //Play the vid
    videoFile.play()
    //Change the icon
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  }
  else{
    videoFile.pause()
    //Change the icon
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
  }
}

videoButton.addEventListener('click', playPause)

/*==================== Scroll ====================*/

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if(this.scrollY >=200) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}

window.addEventListener("scroll", scrollUp)

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
})

sr.reveal('.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights',{
  origin: 'top',
  interval: 100,
})

sr.reveal('.about__data, .video__description, .subscribe__description',{
  origin: 'left',
  interval: 100,
})

sr.reveal('.about__img-overlay, .video__content, .subscribe__form',{
  origin: 'left',
  interval: 100,
})