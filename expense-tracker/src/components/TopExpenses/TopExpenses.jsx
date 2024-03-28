import React from "react";
import styles from "./TopExpenses.module.css";

function TopExpenses() {
  return (
    <div className={styles.main__container}>
      <h1>Top Expenses</h1>
      <div className={styles.content}>chart of expense based on category</div>
    </div>
  );
}

export default TopExpenses;
