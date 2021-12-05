import React from "react";
import Definition from "./Definition";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        <small>{props.results.phonetic}</small>
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Definition definition={definition} /> <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
