const fadeElements = document.querySelectorAll('.fade-in, .fade-out');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
      
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.add('hidden');
      entry.target.classList.remove('visible');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

fadeElements.forEach((element) => {
  observer.observe(element);
});
