document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.getElementById('hero-content');
    const heroElements = heroContent.children;
    const subHeader = document.getElementById('sub-header');
    const downArrow = document.getElementById('down-arrow');
    
    const animateHeroElement = (index) => {
        if (index < heroElements.length) {
            setTimeout(() => {
                heroElements[index].classList.add('animate');
                animateHeroElement(index + 1);
            }, 500);
        } else {
            setTimeout(() => {
                subHeader.classList.add('animate');
                setTimeout(() => {
                    downArrow.classList.add('animate');
                }, 500);
            }, 500);
        }
    };

    setTimeout(() => animateHeroElement(0), 200);
});

const animateElements = document.querySelectorAll('.content .animate-element');
const animateImages = document.querySelectorAll('.content .animate-image');

const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.7;
    const triggerTop = window.innerHeight * 0.3;

    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < triggerBottom && elementBottom > triggerTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });

    animateImages.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        const imageBottom = image.getBoundingClientRect().bottom;

        if (imageTop < triggerBottom && imageBottom > triggerTop) {
            image.classList.add('animate');
        } else {
            image.classList.remove('animate');
        }
    });
};

window.addEventListener('load', () => {
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
});

document.getElementById('down-arrow').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.content').offsetTop,
        behavior: 'smooth'
    });
});

const hoverElements = document.querySelectorAll('.hover-reveal');

hoverElements.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.hover-reveal')) {
        hoverElements.forEach(element => {
            element.classList.remove('active');
        });
    }
});