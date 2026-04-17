// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, revealOptions);

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });
  
  // Also activate the first few sections immediately if they are in view on load
  setTimeout(() => {
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        reveal.classList.add("active");
      }
    });
  }, 100);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
