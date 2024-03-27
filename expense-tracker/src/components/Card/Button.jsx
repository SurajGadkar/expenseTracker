import React from "react";
import styles from "./Button.module.css";

function Button({ type, title }) {
  return (
    <div
      className={`${styles.main__container} ${
        type === "income" ? styles.income : styles.expense
      }`}
    >
      + {title}
    </div>
  );
}

export default Button;
