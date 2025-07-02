document.addEventListener('DOMContentLoaded', () => {
  new Typed('.multiple-text', {
    strings: ['WordPress Developer', 'Virtual Assistant', 'Web Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});

/*skills*/
document.addEventListener('DOMContentLoaded', () => {
  const devBtn = document.getElementById('toggle-development-btn');
  const designBtn = document.getElementById('toggle-design-btn');

  const devSection = document.getElementById('development-skills');
  const designSection = document.getElementById('design-skills');

  devBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isVisible = devSection.style.display === 'block';
    devSection.style.display = isVisible ? 'none' : 'block';
    designSection.style.display = 'none';
  });

  designBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isVisible = designSection.style.display === 'block';
    designSection.style.display = isVisible ? 'none' : 'block';
    devSection.style.display = 'none';
  });
});



/* carousel */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.projects-carousel');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const projectBoxes = carousel.querySelectorAll('.project-box');

  let currentIndex = 0;

function scrollToIndex(index) {
  if (index < 0) index = 0;
  if (index > projectBoxes.length - 1) index = projectBoxes.length - 1;

  const target = projectBoxes[index];
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    currentIndex = index;
  }
}


  nextBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex - 1);
  });

  // Optional: Recalculate index on resize
  window.addEventListener('resize', () => {
    scrollToIndex(currentIndex);
  });
});



