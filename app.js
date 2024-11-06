/* infinity scroll animation*/

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
function removeDuplicates(scrollerInner) {
  const items = Array.from(scrollerInner.children);
  items.forEach((item) => {
    if (item.getAttribute('aria-hidden') === 'true') {
      scrollerInner.removeChild(item);
    }
  });
}
/* end infinity scroll animation*/
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

const scrollerInner = document.querySelector('.scroller__inner');
function showSlide(index) {
  removeDuplicates(scrollerInner);
  const articles = document.querySelectorAll('.tst_box');

  if (index < 0) {
    return;
    // currentIndex = articles.length - 1;
  } else if (index >= articles.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 400 + 100;
  scrollerInner.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// menu controlls
// document.addEventListener('DOMContentLoaded', () => {
//   const openMenuBtn = document.querySelector('.open-menu-btn');
//   const closeMenuBtn = document.querySelector('.close-menu-btn');
//   const nav = document.querySelector('.nav');

//   openMenuBtn.addEventListener('click', () => {
//     nav.classList.add('popup', 'active');
//     openMenuBtn.style.display = 'none';
//     closeMenuBtn.style.display = 'block';
//   });

//   closeMenuBtn.addEventListener('click', () => {
//     nav.classList.remove('popup', 'active');
//     openMenuBtn.style.display = 'block';
//     closeMenuBtn.style.display = 'none';
//   });
// });
