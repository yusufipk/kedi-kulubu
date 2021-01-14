import React from "react";
import "./card-style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="cat"
        src={`https://robohash.org/${props.kedi.id}?set=set4&size=180x180`}
      ></img>
      <h1>{props.kedi.name}</h1>{" "}
    </div>
  );
};
