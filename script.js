// Array of quotes
const quotes = [
    "Causal Layered Analysis",
    "Two-Curves Framework",
    "Futures Wheel",
    "Scenario Planning",
    "Back-casting",
    "Preparedness v Impact matrix",
    "Signals to Insights",
    "Look back to look forward",
    // Add more quotes here
];

// Function to generate random quote
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    document.getElementById('quote').textContent = randomQuote;

    // Start countdown timer
    startTimer(60); // 60 seconds = 1 minute
}

// Function to start countdown timer
function startTimer(duration) {
    let timer = duration;
    const timerElement = document.getElementById('timer');

    const countdownInterval = setInterval(function () {
        timerElement.textContent = timer + ' seconds remaining';
        if (--timer < 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Time's Up!";
            // Add any additional actions you want to take when the timer expires
        }
    }, 1000); // Update timer every 1 second (1000 milliseconds)
}

// Event listener for button click
document.getElementById('generate-btn').addEventListener('click', generateQuote);

// Generate initial quote on page load
generateQuote();
