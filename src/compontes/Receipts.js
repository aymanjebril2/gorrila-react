import React from "react";

const Receipts = ({ person, order }) => {
  const { sauce, main, protein, rice, cost, drink } = order;

  return (
    <div>
      <h1> {person}</h1>
      <div>
        <h2> Main :{main}</h2>
        <h2> protein :{protein}</h2>
        <h2> Rice :{rice}</h2>
        <h2> Sauce :{sauce}</h2>
        <h2> Drink:{drink}</h2>
        <h2> Cost :{cost}</h2>
      </div>
    </div>
  );
};

export default Receipts;
