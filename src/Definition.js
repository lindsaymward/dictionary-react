import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map(function (defined, index) {
        return (
          <div key={index}>
            {defined.definition}
            <br />
            Example: <em>{defined.example}</em>
            <Synonyms synonyms={defined.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
