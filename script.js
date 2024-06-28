// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date('June 28, 2024 18:53:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    if (distance < 0) {
        clearInterval(interval);
        window.location.href = "home.html";

    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// // Example: Simple JavaScript to show an alert when an image is clicked
// document.querySelectorAll('.cake-container img, .sticker-container img').forEach(img => {
//     img.addEventListener('click', () => {
//         alert('You clicked on ' + img.alt);
//     });
// });

