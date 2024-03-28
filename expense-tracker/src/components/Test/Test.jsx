import React from "react";
import Button from "../Card/Button";
import Card from "../Card/Card";
import ExpenseByCategory from "../PieChart/ExpenseByCategory";
import ExpenseTracker from "../ExpenseTracker/ExpenseTracker";
import RecentTransaction from "../RecentTransactions/RecentTransaction";
import TopExpenses from "../TopExpenses/TopExpenses";

function Test() {
  const data02 = [
    { name: "Food", value: 2400 },
    { name: "Entertainment ", value: 4567 },
    { name: "Travel", value: 1398 },
  ];
  return (
    <div style={{ display: "flex", margin: "8px 16px", padding: "4px 8px" }}>
      <div style={{ flex: "6", border: "1px solid black" }}>
        <RecentTransaction />
      </div>
      <div style={{ flex: "4", border: "1px solid black" }}>
        <TopExpenses />
      </div>
    </div>
  );
}

export default Test;
