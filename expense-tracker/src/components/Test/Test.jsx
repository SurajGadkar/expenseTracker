import React from "react";
import Button from "../Card/Button";
import Card from "../Card/Card";

function Test() {
  return (
    <div style={{ display: "flex" }}>
      <Card type="wallet" title="Wallet balance" balance={5000} />

      <Card type="expense" title="Expenses" balance={300} />
    </div>
  );
}

export default Test;
