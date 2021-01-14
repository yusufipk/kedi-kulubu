import React from "react";
import { Card } from "../card/card-component";
import "./card-style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.kediler.map((cat) => (
        <Card key={cat.id} kedi={cat} />
      ))}
    </div>
  );
};
