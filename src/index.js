import "./scss/index.scss";
import Flickity from "flickity";


/* hero slider */

const options = {
  accessibility: true,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

const carousel = document.querySelector('[data-carousel]');
const slides = document.getElementsByClassName('carousel-cell');
const flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    const image = slides[i];
    const x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});


/* Accordion */
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/* Nav Scroll */

(function($) {
  $(window).on("load", function() {
      $("a[rel='m_PageScroll2id']").mPageScroll2id();
  });
})(jQuery);

/* SCROLL TO TOP BTN */
const scrollToTopButton = document.getElementById("js-top");
const scrollFunc = () => {
  const y = window.scrollY;
  if (y > 200) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 18);
  }
};

scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
/* burger */
(function () {
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };
  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
  // hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
}());

// Burger onscroll toggle
function burgerButtonToggle() {
  const burgerButton = document.querySelector(".nav-toggle")
  const yPos = window.scrollY;
  if (yPos > 10) {
    burgerButton.classList.add("unvisible")
    burgerButton.classList.remove("visible");
  } else {
    burgerButton.classList.remove("unvisible");
    burgerButton.classList.add("visible");
  }
}
window.addEventListener("scroll", burgerButtonToggle);

// date year
document.getElementById("year").innerHTML = new Date().getFullYear();
