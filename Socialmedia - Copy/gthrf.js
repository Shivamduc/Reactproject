// JavaScript code to add a responsive menu toggle (optional)
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('menu-toggle');
    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
