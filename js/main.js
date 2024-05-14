window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

const header = document.querySelector('.header-content');
const main = document.querySelector('main');

window.addEventListener("scroll", checkScrollHeader);
document.addEventListener("DOMContentLoaded", checkScrollHeader);

function checkScrollHeader() {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('headerScroll');
        main.style.boxShadow = '0 -40px 60px black';
    } else {
        header.classList.remove('headerScroll');
        main.style.removeProperty('box-shadow');
    }
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-element');
            observer.unobserve(entry.target);
        };
    });
});
document.querySelectorAll('.showBlock').forEach(el => {observer.observe(el)});


const swiper1 = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    speed: 700,
    spaceBetween: 30,
    centeredSlides: true,
    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    history: {
        replaceState: true,
    },
    
    // autoplay: {
    //     delay: 5000,
    // },

    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    }
});