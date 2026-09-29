/* =====================================================
   NAVBAR BACKGROUND ON SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");

    const icon = menuButton.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* CLOSE MOBILE MENU */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const correspondingLink =
            document.querySelector(
                `.nav-link[href="#${sectionId}"]`
            );

        if (!correspondingLink) return;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link =>
                link.classList.remove("active")
            );

            correspondingLink.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   PROFILE IMAGE FALLBACK
===================================================== */

const profileImage =
    document.getElementById("profile-image");

const profilePlaceholder =
    document.getElementById("profile-placeholder");


if (profileImage && profilePlaceholder) {

    profileImage.addEventListener("load", () => {

        profilePlaceholder.style.display = "none";

    });


    profileImage.addEventListener("error", () => {

        profileImage.style.display = "none";

        profilePlaceholder.style.display = "flex";

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}