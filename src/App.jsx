import "./App.css";
import "./components/css/StyleRandomQuote.css";
import React, { useEffect, useState } from 'react';
import RandomQuote from "./components/basics/RandomQuote.js";
import RandomColor from "./components/basics/RandomColor.jsx";

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    handleNewQuote();
  }, []);

  const handleNewQuote = () => {
    const newQuote = RandomQuote();
    const newColor = RandomColor();
  
    console.log('New Quote:', newQuote);
    console.log('New Author:', newQuote.author);
    console.log('New Color:', newColor);
  
    setQuote(newQuote.text);
    setAuthor(newQuote.author);
    setColor(newColor);
  };

  return (
    <div id="quote-box" style={{ backgroundColor: color }}>
      <div id="quote-text">
        <span id="text">{quote}</span>
      </div>
      <div id="quote-author">
        <span id="author">- {author}</span>
      </div>
      <div id="buttons">
        <button
          id="new-quote"
          onClick={handleNewQuote}
          title="Click to generate another quote!"
        >
          New quote
        </button>
        <div id="socials">
          <a
            id="tweet-quote"
            href=""
            data-size="large"
            target="_top"
            title="Click to tweet this quote!"
          >
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a
            id="github"
            href="https://github.com/IkPc"
            data-size="large"
            target="_blank"
            rel="noreferrer"
            title="Creator's Github"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default AppWrapper;
