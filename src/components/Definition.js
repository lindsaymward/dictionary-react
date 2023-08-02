import React from "react";
import Synonyms from "./Synonyms";
import "../styles/Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map(function (defined, index) {
        let definition =
          defined.definition.charAt(0).toUpperCase() +
          defined.definition.slice(1);
        let example =
          defined.example.charAt(0).toUpperCase() + defined.example.slice(1);
        return (
          <div key={index}>
            {definition}
            <br />
            <strong>Example:</strong> <em>{example}</em>
            <br />
            <span className="row">
              <Synonyms synonyms={defined.synonyms} />
            </span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
