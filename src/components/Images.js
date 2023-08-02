import React from "react";
import "../styles/Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function(image, index) {
            return (
              <div className="col-4" key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    className="img-fluid"
                    alt="From Pexels"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <a href="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels-white.png" />
        </a>
      </section>
    );
  } else {
    return null;
  }
}
