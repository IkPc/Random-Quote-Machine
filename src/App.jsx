import "./App.css";
import "./components/css/StyleRandomQuote.css"
import React, { useEffect } from 'react';
import RandomQuote from "./components/basics/RandomQuoteComponent.jsx";
import RandomColor from "./components/basics/RandomColor.jsx";

const App = () => {
    useEffect(() => {
      RandomQuote();
      RandomColor();
    }, []);
  
    const handleNewQuote = () => {
      RandomQuote();
      RandomColor();
    };
  return (
    <div id="quote-box">
      <div id="quote-text">
        <span id="text"></span>
      </div>
      <div id="quote-author">
        <span id="author"></span>
      </div>
      <div id="buttons">
        <button id="new-quote" onClick={() => handleNewQuote()}>
          New quote
        </button>
        <div id="socials">
          <a
            id="tweet-quote"
            href=""
            data-size="large"
            target="_top"
            title="Click to tweet this quote"
          >
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a
            id="github"
            href="https://github.com/IkPc"
            data-size="large"
            target="_blank"
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
