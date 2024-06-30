document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    timeDisplay.textContent = `The time is ${minutes} minutes after ${hours} hours.`;
});

