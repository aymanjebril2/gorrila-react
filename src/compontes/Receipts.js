import React from "react";
import "./Receipts.css";

const Receipts = ({ person, order }) => {
  const { sauce, main, protein, rice, cost, drink, toppings } = order;

  return (
    <div className="continer">
      <div className="each-person">
        <h1> {person}</h1>
        <h2> Main :{main}</h2>
        <h2> protein :{protein}</h2>
        <h2> Rice :{rice}</h2>
        <h2> Sauce :{sauce}</h2>
        <h2> Drink:{drink}</h2>
        <h2>Toppings: {toppings} </h2>
        <h2> Cost :{cost}</h2>
      </div>
    </div>
  );
};

export default Receipts;
