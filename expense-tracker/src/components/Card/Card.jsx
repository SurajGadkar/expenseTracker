import React from "react";
import styles from "./Card.module.css";
import Button from "./Button";

function Card({ balance, title, type }) {
  return (
    <div className={styles.main__container}>
      <div className={styles.title}>
        {title}:{" "}
        <span
          className={`${styles.balance} ${
            type === "wallet" ? styles.wallet : styles.expense
          }`}
        >
          ₹{balance}
        </span>
      </div>
      <div className={styles.btn}>
        {type === "wallet" ? (
          <Button title="Add income" type="income" />
        ) : (
          <Button title="Add Expense" type="expense" />
        )}
      </div>
    </div>
  );
}

export default Card;
