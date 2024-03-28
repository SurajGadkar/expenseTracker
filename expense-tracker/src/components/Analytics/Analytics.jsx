import React from "react";
import RecentTransaction from "../RecentTransactions/RecentTransaction";
import TopExpenses from "../TopExpenses/TopExpenses";
import styles from "./Analytics.module.css";

function Analytics() {
  return (
    <div className={styles.main__container}>
      <div className={styles.transactions}>
        <RecentTransaction />
      </div>
      <div className={styles.expenses}>
        <TopExpenses />
      </div>
    </div>
  );
}

export default Analytics;
