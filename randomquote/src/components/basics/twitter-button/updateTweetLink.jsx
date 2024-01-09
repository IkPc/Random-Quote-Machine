import FilterLink from "./FilterLink";

export default function updateTweetLink(randomQuote) {
  if (!randomQuote || !randomQuote.text) {
    alert("Random quote or its text is undefined or null");
    return;
  }

  const encodedQuote = FilterLink(randomQuote.text, randomQuote.author);
  const tweetLink = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  document.getElementById("tweet-quote").href = tweetLink;
}
