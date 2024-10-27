let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // If index goes out of bounds, wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    // Move the slides container to show the current slide
    document.querySelector('.slides').style.marginLeft = `-${currentSlide * 100}%`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

//////////////////////////

const carousel = document.getElementById("carousel");
const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight");

let isDown = false;
let startX;
let scrollLeft;

// Scroll the slider left
slideLeft.addEventListener('click', function () {
    carousel.scrollLeft -= 500; // Adjust based on slide width + margin
});

// Scroll the slider right
slideRight.addEventListener('click', function () {
    carousel.scrollLeft += 500; // Adjust based on slide width + margin
});

// Grab to move functionality
carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active'); // Optional: for adding some styling on grab
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active'); // Remove grab effect when mouse leaves
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active'); // Remove grab effect on mouse release
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop the function if mouse is not clicked
    e.preventDefault(); // Prevent selecting text or images
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed
    carousel.scrollLeft = scrollLeft - walk;
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        } else counter.innerText = target;
    };
    updateCounter();
});

// Get the hamburger and nav menu elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Add click event listener to the hamburger
hamburger.addEventListener('click', () => {
    // Toggle the visibility of the nav menu
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});
