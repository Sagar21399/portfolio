// You can add JavaScript for interactive elements
// For example, highlighting sections on click, or smooth scrolling

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        section.style.backgroundColor = '#f0f0f0';
        setTimeout(() => {
            section.style.backgroundColor = 'white';
        }, 500); // Lightly highlight the section
    });
});