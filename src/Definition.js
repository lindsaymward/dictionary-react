import React from "react";
import Synonyms from "./Synonyms";

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
            <Synonyms synonyms={defined.synonyms} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
