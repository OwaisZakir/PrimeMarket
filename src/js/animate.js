// ============== Navigation Bar ============
let navTimeLine = gsap.timeline();
// Smooth navbar reveal with bounce effect
navTimeLine.from("#navigation", {
  duration: 1.2,
  y: -100,
  opacity: 0,
  ease: "bounce.out",
});

// Fade-in with elastic ease for navbar brand
navTimeLine.from(".navbar-brand", {
  duration: 1.5,
  opacity: 0,
  x: -40,
  ease: "elastic.out(1.2, 0.5)",
});

// Sequential slide-in for nav links with better timing
gsap.from(".nav-link", {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.15,
  ease: "power2.out",
});

// Subtle grow effect for search bar
gsap.from(".search-bar", {
  duration: 0.9,
  opacity: 1,
  scale: 0.8,
  ease: "circ.out",
});

// Bounce effect for cart icon with smoother scaling
gsap.from(".cart-icon", {
  duration: 1,
  opacity: 0,
  scale: 0.6,
  ease: "elastic.out(1.5, 0.3)",
  delay: 0.3,
});

// Improved hover animations
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.05,
      duration: 0.2,
      ease: "power1.out",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.2,
      ease: "power1.in",
    });
  });
});

const cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("mouseenter", () => {
  gsap.to(cartIcon, {
    scale: 1.15,
    rotation: 5,
    duration: 0.3,
    ease: "back.out(2)",
  });
});
cartIcon.addEventListener("mouseleave", () => {
  gsap.to(cartIcon, {
    scale: 1,
    rotation: 0,
    duration: 0.2,
    ease: "bounce.out",
  });
});

// ================= Navigation Bar Done =================

// GSAP Animation for the limited-time items
gsap.from(".limited-time-item", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2, // Delay between each item animation
  scrollTrigger: {
    trigger: ".swiper-container",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// Smooth Scroll
document.querySelectorAll(".footer .footer-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});



// gsap.from(".hero-title", {
//   opacity: 0,
//   y: -50,
//   duration: 1.5,
//   ease: "power3.out"
// });

// gsap.from(".hero-description", {
//   opacity: 0,
//   y: -30,
//   delay: 0.5,
//   duration: 1.5,
//   ease: "power3.out"
// });

// gsap.from(".hero-btn", {
//   opacity: 0,
//   y: 30,
//   delay: 1,
//   duration: 1,
//   ease: "power3.out"
// });

// gsap.from(".category-card", {
//   opacity: 0,
//   y: 50,
//   stagger: 0.2,
//   duration: 1,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".categories",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none"
//   }
// });

// gsap.from(".limited-time-item", {
//   opacity: 0,
//   x: 100,
//   stagger: 0.3,
//   duration: 1.2,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".limited-time-offers",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none"
//   }
// });

// gsap.from(".testimonial-card", {
//   opacity: 0,
//   y: 50,
//   stagger: 0.2,
//   duration: 1,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".testimonials",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none"
//   }
// });

// gsap.from(".btn", {
//   scale: 0.9,
//   opacity: 0,
//   duration: 0.3,
//   ease: "back.out(1.7)",
//   delay: 0.5
// });

// gsap.from(".sliding-text", {
//   opacity: 0,
//   x: -200,
//   duration: 1,
//   ease: "power3.out",
//   delay: 0.5
// });

// gsap.from(".product-card img", {
//   scale: 1.1,
//   duration: 0.4,
//   ease: "power3.out",
//   paused: true
// });

// document.querySelectorAll(".product-card").forEach(card => {
//   card.addEventListener("mouseenter", () => {
//     gsap.to(card.querySelector("img"), { scale: 1.2 });
//   });
//   card.addEventListener("mouseleave", () => {
//     gsap.to(card.querySelector("img"), { scale: 1.1 });
//   });
// });

// gsap.from(".section-title", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".section-title",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none none"
//   }
// });

// gsap.from(".category-card", {
//   rotationY: 180,
//   transformOrigin: "50% 50%",
//   duration: 0.5,
//   ease: "power3.out",
//   paused: true
// });

// document.querySelectorAll(".category-card").forEach(card => {
//   card.addEventListener("mouseenter", () => {
//     gsap.to(card, { rotationY: 180 });
//   });
//   card.addEventListener("mouseleave", () => {
//     gsap.to(card, { rotationY: 0 });
//   });
// });
