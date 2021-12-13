import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetics.text}
      <br />
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Hear this word
      </a>
    </div>
  );
}
