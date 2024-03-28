window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });
});

const swiper1 = new Swiper(".sample-slider", {
    grid: {
        rows: 2,
    },
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: false,
    scrollbar: '.swiper-scrollbar',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: {
                rows: 2,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
                rows: 2,
            },
        },
        // when window width is >= 640px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is <= 991px
        991: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: false,
        }
    }
})

const swiper2 = new Swiper(".commonity-swiper", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
        },
        grid: {
            rows: 2,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        // when window width is <= 999px
        992: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        1400: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
    }
});

const swiper3 = new Swiper(".commonity-swipe", {
    slidesPerView: 2,
    centeredSlides: false,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
        },
        grid: {
            rows: 2,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 80,
        },
        // when window width is <= 999px
        992: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
        1200: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        }
    }
});