import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return props.synonyms.map(function (synonym, index) {
    if (index < 5) {
      return (
        <span className="Synonyms">
          <ul key={index}>
            <li className="Synonym">{synonym}</li>
          </ul>
        </span>
      );
    } else {
      return null;
    }
  });
}
