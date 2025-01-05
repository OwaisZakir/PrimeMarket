const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-swiper-button-next",
    prevEl: ".hero-swiper-button-prev",
  },
  //   effect: "fade",
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 10,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// Initialize Swiper for Product Carousel without Next/Prev Buttons and Pagination
var customProductSwiper = new Swiper(".custom-product-swiper", {
  slidesPerView: "auto", // Automatically calculate how many slides should fit based on width
  spaceBetween: 20, // Space between each slide
  loop: true, // Enable infinite loop
  autoplay: {
    delay: 5000, // Auto slide delay in milliseconds
  },
  pagination: {
    clickable: true, // Enable pagination bullets
  },
  breakpoints: {
    480: {
      slidesPerView: 1, // Show 1 product per slide on mobile
      spaceBetween: 10, // Less space on mobile
    },
    768: {
      slidesPerView: 3, // Show 2 products per slide on tablets
      spaceBetween: 15, // Medium space on tablets
    },
    1024: {
      slidesPerView: 3, // Show 3 products per slide on laptops
      spaceBetween: 20, // Default space on laptops
    },
    1200: {
      slidesPerView: 4, // Show 3 products per slide on larger screens (desktop)
      spaceBetween: 20, // Default space on larger screens
    },
  },
});

var saleSwiper = new Swiper(".on-sale-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Swiper Initialization
var swiper = new Swiper(".product-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000, // 5 seconds between slides
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    clickable: true,
  },
});

var testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    clickable: true,
  },
});
