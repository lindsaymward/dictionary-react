import React from "react";

export default function Synonyms(props) {
  return props.synonyms.map(function (synonym, index) {
    return (
      <ul className="Synonyms" key={index}>
        <li>{synonym}</li>
      </ul>
    );
  });
}
