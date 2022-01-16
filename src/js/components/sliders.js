
const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap')); //get

// document.body.style.setProperty('gap', newValue);

const portfolioSlider = document.querySelector('.portfolio-section__items');

if (portfolioSlider) {
  const portfolioSwiper = new Swiper(portfolioSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.portfolio-section__next',
      prevEl: '.portfolio-section__prev',
    },
  });
};

const testimonialsSlider = document.querySelector('.testimonials__items');

if (testimonialsSlider) {
  const testimonialsSwiper = new Swiper(testimonialsSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },
  });
}

const relatedProjectsSlider = document.querySelector('.related-projects__items');

if (relatedProjectsSlider) {
  const relatedProjectsSwiper = new Swiper(relatedProjectsSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
    },
  });
}



// testimonials__items