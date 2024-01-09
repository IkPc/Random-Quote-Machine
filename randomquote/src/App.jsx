import "./App.css";
import React from "react";
import Main from "./componentes/basics";

const App = () => {
    <div id="quote-box">
        <div id="quote-text">
            <span id="text"></span>
        </div>
        <div id="quote-author">
            <span id="author"></span>
        </div>
        <div id="buttons">
            <button id="new-quote" onclick="changeColor()">New quote</button>
            <div id="socials">
                <a id="tweet-quote" href="" data-size="large" target="_top" title="Click to tweet this quote">
                    <i class="fa-brands fa-square-twitter" ></i></a>
                <a id="github" href="https://github.com/IkPc" data-size="large" target="_top" title="Creator's Github">
                    <i class="fa-brands fa-square-github" ></i></a>
            </div>
        </div>
    </div>
}
export default () => {
    <div>
        <App />
        <Main />
    </div>
}