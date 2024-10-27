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