var swiper = new Swiper(".mySwiper", {
    loop: true,  // Enable infinite looping
    autoplay: {
        delay: 3000,  // Change slide every 3 seconds
        disableOnInteraction: false  // Keep autoplay even when user interacts
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },  // Mobile
        768: { slidesPerView: 2, spaceBetween: 20 },  // Tablet
        1024: { slidesPerView: 3, spaceBetween: 20 }  // Desktop
    }
});



var swiper = new Swiper(".clints", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay:800,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        400: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});
