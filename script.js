// kiedy strona gotowa
document.addEventListener("DOMContentLoaded", () => {

    // sticky navbar + scroll-up-btn
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        const scrollUpBtn = document.querySelector(".scroll-up-btn");

        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    // scroll top
    document.querySelector(".scroll-up-btn").addEventListener("click", () => {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // smooth scroll back when clicking menu links
    document.querySelectorAll(".navbar .menu li a").forEach(link => {
        link.addEventListener("click", () => {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // menu toggle (hamburger)
    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".navbar .menu").classList.toggle("active");
        document.querySelector(".menu-btn i").classList.toggle("active");
    });

    // typing text animations
    new Typed(".typing", {
        strings: ["Front end developerem", "Back end developerem", "Technikiem", "Informatykiem", "Designerem", "Freelancerem"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Front end developerem", "Back end developerem", "Technikiem", "Informatykiem", "Designerem", "Freelancerem"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // SWIPER (zamiast OwlCarousel)
    new Swiper(".carousel", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 }
        }
    });

});