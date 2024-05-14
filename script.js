// Array of quotes
const quotes = [
    "Every story I create, creates me. I write to create myself. - Octavia E. Butler",
    "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler",
    "Tomorrow belongs to those who can hear it coming. - David Bowie",
    "We are prisoners of our own metaphors, metaphorically speaking… - R. Buckminster Fuller",
    "A writer is a person who cares what words mean, what they say, how they say it. Writers know words are their way towards truth and freedom, and so they use them with care, with thought, with fear, with delight. By using words well they strengthen their souls. Story-tellers and poets spend their lives learning that skill and art of using words well. And their words make the souls of their readers stronger, brighter, deeper. - Ursula K. Le Guin",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "There is an art, it says, or rather, a knack to flying. The knack lies in learning how to throw yourself at the ground and miss.- Douglas Adams",
    "Who controls the past controls the future. Who controls the present controls the past. - George Orwell", 
    "The wave of the future is not the conquest of the world by a single dogmatic creed but the liberation of the diverse energies of free nations and free men. - John F. Kennedy",
    "If I speak of myself in different ways, that is because I look at myself in different ways. - Michel de Montaigne",
    "The future is there… looking back at us. Trying to make sense of the fiction we will have become. - William Gibson",
    "The only thing that makes life possible is permanent, intolerable uncertainty: not knowing what comes next. - Ursula K. Le Guin",
    "The future has already arrived. It's just not evenly distributed yet. - William Gibson",
    // Add more quotes here
];

// Function to generate random quote
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    document.getElementById('quote').textContent = randomQuote;
}

// Event listener for button click
document.getElementById('generate-btn').addEventListener('click', generateQuote);

// Generate initial quote on page load
generateQuote();