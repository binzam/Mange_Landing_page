/* infinity scroll animation*/
const scroller = document.querySelector('.scroller');

const testimonials = [
  {
    id: 1,
    name: 'Anisha Li',
    image: './images/avatar-anisha.png',
    message: `“Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”`,
  },
  {
    id: 2,
    name: 'Ali Bravo',
    image: './images/avatar-ali.png',
    message: `“We have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused.”`,
  },
  {
    id: 3,
    name: 'Richard Watts',
    image: './images/avatar-richard.png',
    message: `“Manage allows us to provide structure and process. It keeps
                    us organized and focused. I can’t stop recommending them to
                    everyone I talk to!”`,
  },
  {
    id: 4,
    name: 'Shanai Gough',
    image: './images/avatar-shanai.png',
    message: `“Their software allows us to track, manage and collaborate
                    on our projects from anywhere. It keeps the whole team
                    in-sync without being intrusive.”`,
  },
];
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation();
}

function addAnimation() {
  scroller.setAttribute('data-animated', true);

  const scrollerInner = scroller.querySelector('.scroller__inner');

  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
    scrollerInner.appendChild(duplicatedItem);
  });
}

/* end infinity scroll animation*/

/* small screen testimonial scroller with controls */
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const avatar = document.querySelector('.avatar');
const nameElement = document.querySelector('.sm_box h3');
const messageElement = document.querySelector('.sm_box p');
const dots = document.querySelectorAll('.dots span');

let currentIndex = 0;

// Function to update the testimonial display
function updateTestimonial(index) {
  const testimonial = testimonials[index];
  avatar.src = testimonial.image;
  nameElement.textContent = testimonial.name;
  messageElement.textContent = testimonial.message;

  // Update active dot
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// Event listeners for previos/next buttons
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

/* end small screen testimonial scroller with controls */


/* email validation */
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
// Email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('error');
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
    emailInput.value = '';
    successMessage.style.display = 'flex';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 2000);
  }
});
/* end email validation */

// small screen nav menu controlls
document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const nav = document.querySelector('.nav');

  openMenuBtn.addEventListener('click', () => {
    nav.classList.add('popup', 'active');
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'flex';
  });

  closeMenuBtn.addEventListener('click', () => {
    nav.classList.remove('popup', 'active');
    openMenuBtn.style.display = 'flex';
    closeMenuBtn.style.display = 'none';
  });
});
// emd menu controlls
