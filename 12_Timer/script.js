document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let seconds;

    const timerInput = document.getElementById('timerInput');
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', startTimer);

    function startTimer() {
        if (!timer) {
            seconds = parseInt(timerInput.value, 10);

            if (isNaN(seconds) || seconds < 1) {
                alert('Please enter a valid positive number for the timer.');
                return;
            }

            updateTimer(); // Update timer immediately on start
            timer = setInterval(updateTimer, 1000); // Update timer every second
            startButton.disabled = true; // Disable the button while the timer is running
        }
    }

    function updateTimer() {
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            timer = null;
            startButton.disabled = false; // Enable the button when the timer is done
        } else {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;

            // Format the time as MM:SS
            const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
            
            timerDisplay.innerText = formattedTime;
        }
    }
});
