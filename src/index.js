const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let interval;

// create navigation dots
for (let i = 0; i < carouselImages.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('carousel-dot');
  dotsContainer.appendChild(dot);
  
  // add click event listener to each dot
  dot.addEventListener('click', () => {
    goToImage(i);
  });
}

const dots = document.querySelectorAll('.carousel-dot');
dots[currentIndex].classList.add('active');

function goToImage(index) {
  if (index < 0 || index > carouselImages.length - 1) return;

  carouselSlide.style.transform = `translateX(-${index * 100}%)`;

  dots[currentIndex].classList.remove('active');
  dots[index].classList.add('active');

  currentIndex = index;
}

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }

  goToImage(currentIndex);
}

function nextImage() {
  currentIndex++;

  if (currentIndex > carouselImages.length - 1) {
    currentIndex = 0;
  }

  goToImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// start automatic slideshow
function startSlideshow() {
  interval = setInterval(() => {
    nextImage();
  }, 5000);
}

// stop automatic slideshow
function stopSlideshow() {
  clearInterval(interval);
}

carouselSlide.addEventListener('mouseenter', stopSlideshow);
carouselSlide.addEventListener('mouseleave', startSlideshow);

startSlideshow();