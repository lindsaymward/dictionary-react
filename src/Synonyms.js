import React from "react";

export default function Synonyms(props) {
  return props.synonyms.map(function (synonym, index) {
    if (index < 5) {
      return (
        <ul className="Synonyms" key={index}>
          <li>{synonym}</li>
        </ul>
      );
    }
  });
}
