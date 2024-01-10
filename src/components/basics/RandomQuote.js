import quotes from '../data/Quotes.jsx';

const getRandomQuote = () => {
  try {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    console.log('Random Index:', randomIndex);
    console.log('Random Quote:', randomQuote);

    return randomQuote;
  } catch (error) {
    console.error('Error in getRandomQuote:', error);
    return { text: 'Error fetching quote', author: 'Unknown' };
  }
};

export default getRandomQuote;
