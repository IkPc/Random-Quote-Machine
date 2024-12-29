import quotes from '../utils/Quotes.jsx';

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    console.log('Random Index:', randomIndex);
    console.log('Random Quote:', randomQuote);

    return randomQuote;
};

export default getRandomQuote;
