function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function updateClock() {
    const clockElement = document.getElementById('current-time');
    if (clockElement) {
        const now = new Date();
        const hours = padZero(now.getHours());
        const minutes = padZero(now.getMinutes());
        clockElement.textContent = `${hours}:${minutes}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000); 

    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navApp = document.querySelector('.nav-app');

    if (menuToggle && navApp) {
        menuToggle.addEventListener('click', () => {
            navApp.classList.add('nav-app-mobile-active');
        });
    }

    if (menuClose && navApp) {
        menuClose.addEventListener('click', () => {
            navApp.classList.remove('nav-app-mobile-active');
        });
    }
});