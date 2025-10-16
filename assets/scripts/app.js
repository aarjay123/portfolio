//---mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

//check if elements exist before adding event listeners
if(menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

//---sticky header background on scroll
const header = document.getElementById('main-header');
if(header) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.classList.add('bg-primary-container/80', 'shadow-lg', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-primary-container/80', 'shadow-lg', 'backdrop-blur-sm');
        }
    });
}

//---scroll-triggered animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');
if(animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 //trigger when 10% of element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}