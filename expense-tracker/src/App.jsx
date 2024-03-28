import { useState } from "react";
import Test from "./components/Test/Test";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import Analytics from "./components/Analytics/Analytics";

function App() {
  return (
    <div>
      <ExpenseTracker />
      <Analytics />
    </div>
  );
}

export default App;
