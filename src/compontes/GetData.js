import React, { useState } from "react";
import receipts from "../Data/data";
import Receipts from "./Receipts";

const GetData = () => {
  const [receipt, setReceipt] = useState(receipts);

  const order = receipts.map((item, index) => {
    return <Receipts {...item} key={index} />;
  });

  return <div>{order}</div>;
};

export default GetData;
