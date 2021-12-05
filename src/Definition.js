import React from "react";

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
          </div>
        );
      })}
    </div>
  );
}
