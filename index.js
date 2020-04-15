const scroll = new SmoothScroll('a[href*="#"]');

const anims = document.querySelectorAll('.anim');
const landing = document.querySelector('#landing');
const nav = document.querySelector('nav');

observerOptions = {
    threshold: 0.5,
};

navOptions = {
    threshold: 0.85,
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

anims.forEach(anim => {
    observer.observe(anim);
})


const landing_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('scroll');
        }
        else {
            nav.classList.add('scroll');
        }
    });
}, navOptions);

landing_observer.observe(landing);


