import React from "react";
import "../styles/Synonyms.css";

export default function Synonyms(props) {
  return props.synonyms.map(function (synonym, index) {
    synonym = synonym.charAt(0).toUpperCase() + synonym.slice(1);
    if (index < 3) {
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
