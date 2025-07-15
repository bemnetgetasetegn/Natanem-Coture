const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      console.log(triggerBottom);
      

      if (elementTop < triggerBottom) {
        el.classList.add('reveal');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
