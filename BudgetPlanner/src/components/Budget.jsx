import { useContext } from "react";
import { ExpenseContext } from "../App";

function Budget() {
  const { budget, spent, remaining } = useContext(ExpenseContext);

  return (
    <div className="budget-container">
      <h2>Budget: ${budget}</h2>
      <h2>Spent: ${spent}</h2>
      <h2>Remaining: ${remaining}</h2>
    </div>
  );
}

export default Budget;
