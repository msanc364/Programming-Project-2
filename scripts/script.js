document.getElementById('startBtn').addEventListener('click', function() {
    let time = parseInt(document.getElementById('timeInput').value);

    if (isNaN(time) || time <= 0 || time > 60) {
        alert("Please enter a valid time between 1 and 60 seconds.");
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `Time Left: ${time}s`;

    const countdown = setInterval(function() {
        time--;
        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            timerDisplay.textContent = `Time Left: 0s`;
        } else {
            timerDisplay.textContent = `Time Left: ${time}s`;
        }
    }, 1000);
});
