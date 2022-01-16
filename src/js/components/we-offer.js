const accordions = document.querySelectorAll('.accordion');

// console.log(accordions);


accordions.forEach(item => {
    item.addEventListener('click', openAccordion);
});

function openAccordion(event) {
    let accordionContent = this.querySelector('.accordion__content');
    let accordionDescr = this.querySelector('.accordion__descr');
    
    // console.log(this);
    
    if (this.dataset.openlist !== "true") {
        this.removeAttribute('aria-expanded');
        this.setAttribute('aria-expanded', 'true');

        this.classList.add('accordion--active');

        accordionContent.style.maxHeight = `${this.scrollHeight}px`;

        accordionDescr.removeAttribute('aria-hidden');
        accordionDescr.setAttribute('aria-hidden', 'false') ;

        this.dataset.openlist = "true";
        
    } else {
        this.removeAttribute('aria-expanded');
        this.setAttribute('aria-expanded', 'false');

        this.classList.remove('accordion--active');

        accordionContent.style.maxHeight = `0px`;

        accordionDescr.removeAttribute('aria-hidden');
        accordionDescr.setAttribute('aria-hidden', 'true') ;

        this.dataset.openlist = "false";
        
    }
};