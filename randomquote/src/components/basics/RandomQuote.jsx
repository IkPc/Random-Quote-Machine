import "./css/StyleRandomQuote.css";
import quotes from "./data/Quotes.jsx";
import updateTweetLink from "./twitter-button/updateTweetLink.jsx";

export default function RandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
        
            document.getElementById("text").textContent = randomQuote.text;
            document.getElementById("author").textContent = `- ${randomQuote.author}`;
        
            updateTweetLink(randomQuote);
            return randomQuote;
        }