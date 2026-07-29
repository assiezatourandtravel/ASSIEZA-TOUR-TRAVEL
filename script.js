/*==================================================
ASSIEZA TOUR & TRAVEL
script.js
==================================================*/

/*=========================================
LOADING SCREEN
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/*=========================================
HEADER BLUR
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = Number(counter.dataset.target);

        const current = Number(counter.innerText);

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});


/*=========================================
SCROLL TO TOP
=========================================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "flex";

        scrollTopBtn.style.justifyContent = "center";

        scrollTopBtn.style.alignItems = "center";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

});


/*=========================================
ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if(pageYOffset >= top){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".section-title,.package-card,.service-card,.about-card,.why-card,.testimonial-card,.gallery-grid img"

);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*=========================================
HERO PARALLAX
=========================================*/

window.addEventListener("scroll",()=>{

    const hero = document.getElementById("hero");

    hero.style.backgroundPositionY = window.scrollY * .45 + "px";

});


/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(

".btn-primary,.btn-navbar,.package-btn,.cta-btn,.contact-btn"

);

buttons.forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        const circle = document.createElement("span");

        const size = Math.max(btn.clientWidth,btn.clientHeight);

        circle.style.width = size + "px";

        circle.style.height = size + "px";

        circle.style.left =

e.clientX - btn.offsetLeft - size/2 + "px";

        circle.style.top =

e.clientY - btn.offsetTop - size/2 + "px";

        circle.classList.add("ripple");

        btn.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});/*=========================================
GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-content">

<img src="" alt="Gallery">

</div>

`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/*=========================================
TESTIMONIAL AUTO SLIDER
=========================================*/

const testimonialWrapper=document.querySelector(".testimonial-wrapper");

let testimonialIndex=0;

function autoSlide(){

const cards=document.querySelectorAll(".testimonial-card");

if(window.innerWidth>768){

testimonialIndex++;

if(testimonialIndex>cards.length-3){

testimonialIndex=0;

}

testimonialWrapper.style.transform=

`translateX(-${testimonialIndex*33.33}%)`;

}

}

setInterval(autoSlide,4000);


/*=========================================
FLOATING WHATSAPP PULSE
=========================================*/

const floatingWA=document.querySelector(".floating-wa");

setInterval(()=>{

floatingWA.classList.add("pulse");

setTimeout(()=>{

floatingWA.classList.remove("pulse");

},900);

},3000);


/*=========================================
HERO TYPING EFFECT
=========================================*/

const heroTitle=document.querySelector(".hero-left h1");

const heroText=heroTitle.innerHTML;

heroTitle.innerHTML="";

let typeIndex=0;

function typing(){

if(typeIndex<heroText.length){

heroTitle.innerHTML+=heroText.charAt(typeIndex);

typeIndex++;

setTimeout(typing,35);

}

}

typing();


/*=========================================
SMOOTH FADE PAGE
=========================================*/

document.body.style.opacity="0";

window.onload=()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

};


/*=========================================
MOUSE GLOW
=========================================*/

const glow=document.createElement("div");

glow.id="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(

"%cAssieza Tour & Travel",

"color:#0B3D91;font-size:22px;font-weight:bold"

);

console.log(

"%cWebsite Developed with ❤️",

"color:#FFD54F;font-size:14px"

);