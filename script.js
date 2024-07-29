document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.getElementById('hero-content');
    const heroElements = heroContent.children;
    const downArrow = document.getElementById('down-arrow');
    const subHeader = document.getElementById('sub-header');

    // Function to animate hero elements sequentially
    const animateHeroElements = () => {
        Array.from(heroElements).forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate');
            }, index * 250); // Delays each element
        });

        setTimeout(() => {
            downArrow.classList.add('animate');
        }, heroElements.length * 250); // Animate downArrow after hero elements

        setTimeout(() => {
            subHeader.classList.add('animate');
        }, (heroElements.length + 1) * 250); // Animate subHeader after downArrow
    };

    // Start the hero animations after a short delay
    setTimeout(() => animateHeroElements(), 200);
});

// Function to animate elements on scroll
const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    const triggerTop = window.innerHeight * 0.15;

    document.querySelectorAll('.content .animate-element').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Add the animate class when the element is within the viewport
        if (elementTop < triggerBottom && elementBottom > triggerTop) {
            element.classList.add('animate');
        }
    });

    document.querySelectorAll('.content .animate-image').forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        const imageBottom = image.getBoundingClientRect().bottom;

        // Add the animate class when the image is within the viewport
        if (imageTop < triggerBottom && imageBottom > triggerTop) {
            image.classList.add('animate');
        }
    });
};

// Event listeners for scrolling and resizing to trigger animations
window.addEventListener('load', () => {
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
});

// Smooth scroll to content on down-arrow click
document.getElementById('down-arrow').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.content').offsetTop,
        behavior: 'smooth'
    });
});

// Toggle active class on hover-reveal elements
const hoverElements = document.querySelectorAll('.hover-reveal');

hoverElements.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
    });
});

// Close hover elements when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.hover-reveal')) {
        hoverElements.forEach(element => {
            element.classList.remove('active');
        });
    }
});
