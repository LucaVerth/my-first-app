import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFitler";
import ExpensesChart from "../Expenses/ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  // date filter based on year
  const [filterValue, setFilter] = useState("2021");
  const filterChange = (filterValue) => {
    setFilter(filterValue);
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterValue}
          onFilterChange={filterChange}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
