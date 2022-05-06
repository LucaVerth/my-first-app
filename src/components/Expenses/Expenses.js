import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFitler";
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
      <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
