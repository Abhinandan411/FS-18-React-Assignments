import { createContext, useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import Expense from "./components/Expense";
import './App.css'; // Make sure to import the CSS file

export const ExpenseContext = createContext(null);

function App() {
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spent, setSpent] = useState(0);

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("expense")) {
      setExpenses(JSON.parse(localStorage.getItem("expense")));
    }
  }, []);

  const addExpense = (name, amount) => {
    setExpenses([...expenses, { name, amount: parseInt(amount) }]);
  };

  const deleteExpense = (index) => {
    let temp = [...expenses];
    temp.splice(index, 1);
    setExpenses(temp);
  };

  useEffect(() => {
    let amount = 0;
    for (let item of expenses) {
      amount += item.amount;
    }
    let rm = budget - amount;

    setSpent(amount);
    setRemaining(rm);
    if (expenses.length > 0) {
      localStorage.setItem("expense", JSON.stringify(expenses));
    }
    else{
      localStorage.removeItem("expense");
    }
  }, [expenses]);

  return (
    <div id="container">
      <ExpenseContext.Provider value={{ budget, spent, remaining, addExpense }}>
        <Budget />
        <h1>Expenses</h1>
        {expenses.length === 0 ? (
          <p id="exLen">Add item to your list....</p>
        ) : (
          expenses.map((item, index) => (
            <Expense
              key={index}
              amount={item.amount}
              name={item.name}
              deleteExpense={deleteExpense}
              index={index}
            />
          ))
        )}

        <AddExpense />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
