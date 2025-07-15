const ham = document.querySelector('.ham');
const navLinks = document.querySelector('.nav-links');
const icon = ham.querySelector('i');
const nav = document.querySelector('.nav');
const contactUsBtn = document.querySelector('#contact-us-btn');
const imgContainer = document.querySelector('.image-container');
const scrollbtnRight = document.querySelector('#scrollRight');
const scrollbtnLeft = document.querySelector('#scrollLeft')
const links = document.querySelectorAll('.nav-links li')


// Responsive nav bar toggle
ham.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');

});

links.forEach(li => {
  li.addEventListener('click', () => {
  navLinks.classList.remove('show');
  icon.classList.add('fa-bars');
  icon.classList.remove('fa-times');
  })
})

// Close nav links when clicking outside
document.addEventListener('click', (e) => {
  const isClickedInside = navLinks.contains(e.target);
  const isClickedOnHam = ham.contains(e.target);

  if (!isClickedInside && !isClickedOnHam && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  }
});

// Make navbar sticky on scroll
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > 40) {
    nav.classList.add('position');
  } else {
    nav.classList.remove('position');
  }
});

// Scroll horizontally through product cards
scrollbtnRight.addEventListener('click', () => {
  const card = imgContainer.querySelector('.img-container');
  if (card) {
    const scrollAmount = card.offsetWidth + 20; // adjust gap if needed
    imgContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

scrollbtnLeft.addEventListener('click', () => {
  const card = imgContainer.querySelector('.img-container');
  if (card) {
    const scrollAmount = card.offsetWidth + 20; // match your right scroll
    imgContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});



