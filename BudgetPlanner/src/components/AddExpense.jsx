import { useState, useContext } from "react";
import { ExpenseContext } from "../App";

function AddExpense() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(name, amount);
    setName("");
    setAmount("");
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
