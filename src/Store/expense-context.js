import React from "react";

const ExpenseContext = React.createContext({
    expense:[],
    addExpenses:()=>{},
    deleteExpenses:()=>{},
    editExpenses: ()=>{}
})

export default ExpenseContext;