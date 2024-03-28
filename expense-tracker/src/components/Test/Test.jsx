import React from "react";
import Button from "../Card/Button";
import Card from "../Card/Card";
import ExpenseByCategory from "../PieChart/ExpenseByCategory";
import ExpenseTracker from "../ExpenseTracker/ExpenseTracker";

function Test() {
  const data02 = [
    { name: "Food", value: 2400 },
    { name: "Entertainment ", value: 4567 },
    { name: "Travel", value: 1398 },
  ];
  return (
    <div>
      <ExpenseTracker />
    </div>
  );
}

export default Test;
