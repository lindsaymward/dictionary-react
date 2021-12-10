import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        <small>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetics={phonetic} />
              </div>
            );
          })}
        </small>
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
