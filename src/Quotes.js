import React, { useEffect, useState } from "react";
import next from "./assets/next.png"

export default function Quotes() {
  const [quotes, setQuotes] = useState("");
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <div className="quotes">
        {quotes.text}
        <div className="author text-right underline underline-offset-1">{quotes.author}</div>

        <button onClick={getQuotes}> <img className="img" src={next} alt="next pic" /> </button>
      </div>

    
    </div>
  );
}
