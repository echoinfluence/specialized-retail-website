/*====================================================
    Specialized Retail Group
    Main JavaScript File
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*====================================================
        Cached Elements
    ======================================================*/

    const navbar = document.querySelector(".custom-navbar");
    const backToTop = document.getElementById("backToTop");
    const year = document.getElementById("year");
    const fadeElements = document.querySelectorAll(
        ".company-card, .project-preview-card, .stat-card, .feature-item, section"
    );


    /*====================================================
        Footer Year
    ======================================================*/

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /*====================================================
        Navbar Scroll Effect
    ======================================================*/

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        }
        else {

            navbar.classList.remove("scrolled");

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);


    /*====================================================
        Back To Top Button
    ======================================================*/

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        }
        else {

            backToTop.classList.remove("show");

        }

    }

    updateBackToTop();

    window.addEventListener("scroll", updateBackToTop);


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*====================================================
        Smooth Scrolling
    ======================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });


    /*====================================================
        Fade In On Scroll
    ======================================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });


    fadeElements.forEach(element => {

        element.classList.add("fade-up");

        observer.observe(element);

    });


    /*====================================================
        Active Navigation Link
    ======================================================*/

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.remove("active-nav");

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active-nav");

        }

    });


    /*====================================================
        Navbar Collapse On Mobile
    ======================================================*/

    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992 && navCollapse.classList.contains("show")) {

                bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();

            }

        });

    });


    /*====================================================
        Hero Buttons Animation
    ======================================================*/

    const heroButtons = document.querySelectorAll(".hero-buttons .btn");

    heroButtons.forEach((button, index) => {

        button.style.opacity = "0";

        button.style.transform = "translateY(25px)";

        setTimeout(() => {

            button.style.transition = "0.6s ease";

            button.style.opacity = "1";

            button.style.transform = "translateY(0)";

        }, 600 + (index * 200));

    });


    /*====================================================
        Image Hover Effect
    ======================================================*/

    const projectImages = document.querySelectorAll(".project-preview-card img");

    projectImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.filter = "brightness(1.05)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.filter = "brightness(1)";

        });

    });

});


/*====================================================
    Window Loaded
======================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});