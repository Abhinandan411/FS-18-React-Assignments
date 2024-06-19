function Expense({ amount, name, deleteExpense, index }) {
    return (
      <div className="expense-item">
        <span className="expense-name">{name}</span>
        <span className="expense-amount">${amount}</span>
        <button className="delete-button" onClick={() => deleteExpense(index)}>Delete</button>
      </div>
    );
  }
  
  export default Expense;
  