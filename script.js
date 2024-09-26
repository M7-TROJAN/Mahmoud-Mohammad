// Typing Animation
var options = {
    strings: ["Full-Stack Web Developer", "Back-End Developer", "Script Writer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000, 
    loop: true,
};
var typed = new Typed(".dynamic-text", options);

// Script to handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    const form = this;
    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            form.reset(); // Clear the form fields after submission
        } else {
            alert('Oops! There was a problem.');
        }
    }).catch(() => alert('Error! Please try again later.'));
});

// Script to show scroll-up button when user scrolls past first section
const scrollUpButton = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const firstSectionHeight = document.querySelector('#home').offsetHeight;

    // Show the button when the user scrolls past the first section
    if (scrollPosition > firstSectionHeight) {
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
});
