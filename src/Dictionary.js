import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [load, setLoaded] = useState(false);

  function loading() {
    search();
    setLoaded(true);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  if (load) {
    return (
      <div className="Dictionary">
        <section className="row">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Enter a word..."
              onChange={handleWordChange}
              className="col-9"
            />
            <input
              type="submit"
              onClick={handleSubmit}
              value="Search"
              className="col-3 search"
            />
          </form>
        </section>
        <Result results={results} />
      </div>
    );
  } else {
    loading();
    return <div>"Loading..."</div>;
  }
}
