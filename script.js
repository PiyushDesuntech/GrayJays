// Side Drawer
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close-btn");

  if (menuToggle && mobileNav && overlay && closeBtn) {
    menuToggle.addEventListener("click", () => {
      mobileNav.style.left = "0";
      overlay.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      mobileNav.style.left = "-250px";
      overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
      mobileNav.style.left = "-250px";
      overlay.style.display = "none";
    });
  }
});

// Switch Button
document.querySelectorAll(".toggle-switch").forEach((toggle) => {
  const labels = toggle.querySelectorAll(".switch-label");
  const switchSelector = toggle.querySelector(".switch-selector");
  const packageCard = toggle.closest(".package-card");
  const priceElement = packageCard ? packageCard.querySelector(".price") : null;

  if (!priceElement) return;

  labels.forEach((label) => {
    label.addEventListener("click", () => {
      labels.forEach((l) => l.classList.remove("active"));
      label.classList.add("active");

      const option = label.dataset.option;
      if (option === "with-car") {
        toggle.classList.remove("without-car");
        priceElement.textContent = priceElement.dataset.withCar;
        switchSelector.style.transform = "translateX(0%)";
      } else if (option === "without-car") {
        toggle.classList.add("without-car");
        priceElement.textContent = priceElement.dataset.withoutCar;
        switchSelector.style.transform = "translateX(100%)";
      }
    });
  });
});


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function isMobile() {
    return window.innerWidth <= 768;
}

function updateSlider() {
    const slideWidth = isMobile() ? 100 : 100/3;
    const transformValue = -(currentIndex * slideWidth);
    slider.style.transform = `translateX(${transformValue}%)`;
    
    // Update button states
    if (isMobile()) {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    } else {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 3;
    }
}

function nextSlide() {
    const maxIndex = isMobile() ? slides.length - 1 : slides.length - 3;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

// Event Listeners
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Touch support
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        nextSlide();
    } else if (touchEndX - touchStartX > 50) {
        prevSlide();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reset position if needed when switching between mobile and desktop
    if (isMobile() && currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

// Initial setup
updateSlider();



const slider1 = document.querySelector('.slider1');
const slides1 = document.querySelectorAll('.slide1');
const prevButton1 = document.querySelector('.prev1');
const nextButton1 = document.querySelector('.next1');
let currentIndex1 = 0;

function isMobile() {
    return window.innerWidth <= 768;
}

function updateSlider1() {
    const slideWidth = isMobile() ? 100 : 100/3;
    const transformValue = -(currentIndex1 * slideWidth);
    slider1.style.transform = `translateX(${transformValue}%)`;
    
    // Update button states
    if (isMobile()) {
        prevButton1.disabled = currentIndex1 === 0;
        nextButton1.disabled = currentIndex1 === slides1.length - 1;
    } else {
        prevButton1.disabled = currentIndex1 === 0;
        nextButton1.disabled = currentIndex1 === slides1.length - 3;
    }
}

function nextSlide1() {
    const maxIndex = isMobile() ? slides1.length - 1 : slides1.length - 3;
    if (currentIndex1 < maxIndex) {
        currentIndex1++;
        updateSlider1();
    }
}

function prevSlide1() {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateSlider1();
    }
}

// Event Listeners
prevButton1.addEventListener('click', prevSlide1);
nextButton1.addEventListener('click', nextSlide1);

// Touch support
let touchStartX1 = 0;
let touchEndX1 = 0;

slider1.addEventListener('touchstart', e => {
    touchStartX1 = e.changedTouches[0].screenX;
});

slider1.addEventListener('touchend', e => {
    touchEndX1 = e.changedTouches[0].screenX;
    if (touchStartX1 - touchEndX1 > 50) {
        nextSlide1();
    } else if (touchEndX1 - touchStartX1 > 50) {
        prevSlide1();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reset position if needed when switching between mobile and desktop
    if (isMobile() && currentIndex1 > slides1.length - 1) {
        currentIndex1 = slides1.length - 1;
    }
    updateSlider1();
});

// Initial setup
updateSlider1();
