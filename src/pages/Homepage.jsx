import "./Homepage.css";
import React, { useEffect, useState } from 'react';
import RandomQuote from "../components/RandomQuote.js";
import RandomColor from "../utils/RandomColor.jsx";
import updateTweetLink from '../components/twitter-button/updateTweetLink.jsx';

const Homepage = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    handleNewQuote();
  }, []);

  const handleNewQuote = () => {
    const newQuote = RandomQuote();
    const newColor = RandomColor();
  
  
    setQuote(newQuote.text);
    setAuthor(newQuote.author);
    setColor(newColor);
    updateTweetLink(newQuote);
  };

  return (
    <div id="quote-box" style={{ backgroundColor: color }}>
      <div id="quote-text">
        <span id="text">{quote}</span>
      </div>
      <div id="quote-author">
        <span id="author">- <u><i>{author}</i></u></span>
      </div>
      <div id="buttons">
        <div id="socials">
          <a
            id="tweet-quote"
            href="{tweetLink}"
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
        <button
          id="new-quote"
          onClick={handleNewQuote}
          title="Click to generate another quote!"
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Homepage;
