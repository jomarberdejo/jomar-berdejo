const fadeElements = document.querySelectorAll('.fade-in, .fade-out');


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2, 
};


const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
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
      