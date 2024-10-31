const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true);

    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const nav = document.querySelector('.nav');

  openMenuBtn.addEventListener('click', () => {
    nav.classList.add('popup', 'active');
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
  });

  closeMenuBtn.addEventListener('click', () => {
    nav.classList.remove('popup', 'active');
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none';
  });
});
