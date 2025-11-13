const observerOptions = {
    root: null,
    rootMargin: '-50px 0px -50px 0px', // Trigger only when 50px inside viewport
    threshold: 0.2 // Need 20% visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Small delay to ensure smooth animation
            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, 50);
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const elementsToObserve = document.querySelectorAll('.animate-fly-in-from-left, .animate-fly-in-from-right, .fade-in, .fly-in-left, .fly-in-right');

elementsToObserve.forEach(el => {
    observer.observe(el);
});



