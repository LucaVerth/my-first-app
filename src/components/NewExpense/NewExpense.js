import React, { useState } from "react";

import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  }
  const stopEditingHandler = () => {
    setEditing(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler} >Add new Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense;