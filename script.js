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

// Event listener for button click
document.getElementById('generate-btn').addEventListener('click', generateQuote);

// Generate initial quote on page load
generateQuote();
