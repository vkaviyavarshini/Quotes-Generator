import React, { useState } from "react";

const quotes = [
  {
    text: "\"Be the change you wish to see in the world.\"",
    author: "- Mahatma Gandhi"
  },
  {
    text: "\"In three words I can sum up everything I've learned about life: it goes on.\"",
    author: "- Robert Frost"
  },
  {
    text: "\"The only way to do great work is to love what you do.\"",
    author: "- Steve Jobs"
  },
  {
    text: "\"Genius is one percent inspiration and ninety-nine percent perspiration.\"",
    author: "- Thomas Edison"
  },
  {
    text: "\"Having nothing, nothing can he lose.\"",
    author: "- William Shakespeare"
  },
  {
    text: "\"One today is worth two tomorrows.\"",
    author: "- Benjamin Franklin"
  },
  {
    text: "\"Be as you wish to seem.\"",
    author: "- Socrates"
  },
  {
    text: "\"Only do what your heart tells you.\"",
    author: "- Princess Diana"
  },
  {
    text: "\"All our knowledge has its origins in our perceptions.\"",
    author: "- Leonardo da Vinci"
  },
  {
    text: "\"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.\"",
    author: "- Abraham Lincoln"
  },
  {
    text: "\"All children are artists. The problem is how to remain an artist once he grows up.\"",
    author: "- Pablo Picasso"
  },
  {
    text: "\"If one way be better than another, that you may be sure is natures way.\"",
    author: "- Aristotle"
  },
  {
    text: "\"To hell with circumstances; I create opportunities.\"",
    author: "- Bruce Lee"
  },
  {
    text: "\"If you find yourself in a hole, the first thing to do is stop digging.\"",
    author: "- Will Rogers"
  },
  {
    text: "\"Life is what happens to you while you're busy making other plans.\"",
    author: "- John Lennon"
  },
  {
    text: "\"We lost because we told ourselves we lost.\"",
    author: "- Leo Tolstoy"
  },
  {
    text: "\"Never mistake motion for action.\"",
    author: "- Ernest Hemingway"
  }  
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({});

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="random-quote-generator">
      <button className="generate-button" onClick={generateRandomQuote}>Generate Quote</button>
      <p className="quote-text">{quote.text}</p>
      <p className="quote-author">{quote.author}</p>
      <p className='footer'>Done by KAVIYAVARSHINI.V</p>
    </div>
  );
};

export default RandomQuoteGenerator;
