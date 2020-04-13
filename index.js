const scroll = new SmoothScroll('a[href*="#"]');

const anims = document.querySelectorAll('.anim');

observerOptions={
    threshold: 0.5,
    
};

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('animate');
            } 
    });
}, observerOptions);

anims.forEach(anim=>{
    observer.observe(anim);
})



