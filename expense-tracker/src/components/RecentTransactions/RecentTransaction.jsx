import React from "react";
import styles from "./RecentTransaction.module.css";

function RecentTransaction() {
  return (
    <div className={styles.main__container}>
      <h1>Recent Transactions</h1>
      <div className={styles.content}>List of expenses</div>
    </div>
  );
}

export default RecentTransaction;
