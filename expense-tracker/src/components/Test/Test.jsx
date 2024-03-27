import React from "react";
import Button from "../Card/Button";
import Card from "../Card/Card";
import ExpenseByCategory from "../PieChart/ExpenseByCategory";

function Test() {
  const data02 = [
    { name: "Food", value: 2400 },
    { name: "Entertainment ", value: 4567 },
    { name: "Travel", value: 1398 },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        margin: "6px 8px",
      }}
    >
      <Card type="wallet" title="Wallet balance" balance={5000} />
      <Card type="expense" title="Expenses" balance={300} />
      <ExpenseByCategory data={data02} />
    </div>
  );
}

export default Test;
