import React from 'react';
import getRandomQuote from './RandomQuote.js';

const RandomQuoteComponent = () => {
  const randomQuote = getRandomQuote();

  return (
    <div id="quote-box">
      <div id="quote-text">
        <span id="text">{randomQuote.text}</span>
      </div>
      <div id="quote-author">
        <span id="author">- {randomQuote.author}</span>
      </div>
    </div>
  );
};

export default RandomQuoteComponent;
