const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
// console.log(portfolioTabsNav);

const portfolioItems = document.querySelectorAll('.portfolio-tabs__item');
// console.log(portfolioItems);

portfolioTabsNav.addEventListener('click', switchTab);

function switchTab(element) {
    let target = element.target.closest('.portfolio-tabs-nav__btn');
    let targetAttribute = target.getAttribute('data-filter');

    portfolioItems.forEach(item => {
        let btn = item.firstElementChild;
    });
    
    target.classList.add('portfolio-tabs-nav__btn--active');
    
    console.log(target);
    // console.log(targetAttribute);

    // portfolioItems.forEach(item => {

    //     let innerItem = item.firstElementChild;
    //     let innerItemAttribute = innerItem.getAttribute('data-target');



    //     if (targetAttribute == innerItemAttribute && targetAttribute != 'All') {
    //         item.classList.add('hidden');
    //     }
    // })
    
}












// if (!target) return;
    // if (!portfolioTabsNav.contains(target)) return;
    // if (target.getAttribute('data-filter') === 'projects') {
    //     console.log('совпало')
    // } else {
    //     console.log('пидор')
    // }