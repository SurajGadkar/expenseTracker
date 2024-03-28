import React from "react";
import styles from "./ExpenseTracker.module.css";
import Card from "../Card/Card";
import ExpenseByCategory from "../PieChart/ExpenseByCategory";

function ExpenseTracker() {
  const pieChartData = [
    { name: "Food", value: 2400 },
    { name: "Entertainment ", value: 4567 },
    { name: "Travel", value: 1398 },
  ];

  return (
    <div className={styles.main__container}>
      <h1>Expense Tracker</h1>
      <div className={styles.content}>
        <Card type="wallet" title="Wallet balance" balance={5000} />
        <Card type="expense" title="Expenses" balance={300} />
        <ExpenseByCategory data={pieChartData} />
      </div>
    </div>
  );
}

export default ExpenseTracker;
