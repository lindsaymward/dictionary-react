import axios from "axios";
import React, { useState, useEffect } from "react";
import { createClient } from 'pexels';
import Result from "./Result";
import Images from "./Images";

import "../styles/Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [load, setLoaded] = useState(false);
  let [images, setImages] = useState(null);
  console.log(process.env);
  const client = createClient(process.env.PEXELS_API_KEY);

  useEffect(() => {
    search();
  }, [load])

  function loading() {
    search();
    
  }
  function handleResponse(response) {
    setResults(response.data[0]);
    
  }

  function handleImageResponse(response) {
    setImages(response.photos);
    setLoaded(true);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    client.photos.search({ word, per_page: 3 })
      .then(photos => {handleImageResponse(photos)})
    // axios
    //   .get(pexelsApiUrl, {
    //     headers: { Authorization: `Bearer ${process.env.PEXELS_API_KEY}` },
    //   })
    //   .then(handleImageResponse);
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
        <Images images={images} />
      </div>
    );
  } else {
    return <div>"Loading..."</div>;
  }
}
