// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 20,
     // Space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true, // Enable looping
    autoplay: {
      delay: 4000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: 'fade', // Smooth fade effect
    fadeEffect: {
      crossFade: true,
    },
  });

  var hero_swiper = new Swiper(".hero-swiper", {
    spaceBetween: 3,
    effect: "fade",
    loop: true,
    
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var info_swiper = new Swiper(".info_swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  