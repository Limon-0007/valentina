//countdown.js

const myCountdown = new countdown({
  target: ".countdown",
  dayWord: " Days",
  hourWord: " Hours",
  minWord: " Mins",
  secWord: " Secs",
});

// swiper js

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  centerSlider: true,
  fade: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //breakpoints

  breakpoints: {
    0:   { slidesPerView: 1 },
    520: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    950: { slidesPerView: 2 },
  },
});
