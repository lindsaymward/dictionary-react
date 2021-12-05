import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleWordChange}
        />
      </form>
      <Result results={results} />
    </div>
  );
}
