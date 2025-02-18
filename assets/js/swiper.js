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
  