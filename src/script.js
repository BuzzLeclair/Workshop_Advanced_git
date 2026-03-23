// Get DOM elements
const clickBtn = document.getElementById('clickBtn');
const message = document.getElementById('message');

// Click event listener
clickBtn.addEventListener('click', () => {
    message.textContent = ' Button clicked! You can add more interactivity here.';
    message.style.opacity = '0';
    setTimeout(() => {
        message.style.transition = 'opacity 0.5s ease';
        message.style.opacity = '1';
    }, 10);
});

// Page load message
window.addEventListener('load', () => {
    console.log('Web project loaded successfully!');
});
