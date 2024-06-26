const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].style.display = 'block';
}

function hideSlide() {
  slides[currentSlide].style.display = 'none';
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function previousSlide() {
  hideSlide();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

showSlide();
setInterval(nextSlide, 3000); // Change slide every 3 seconds