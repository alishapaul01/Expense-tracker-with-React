import { useContext, Fragment } from "react";
import Home from "../Components/Home/Home";
import NewExpenses from '../Components/Expenses/NewExpenses'
import ExpenseList from '../Components/Expenses/ExpenseList'
import ExpenseContext from '../Store/expense-context';
const HomePage=()=>{
    const expenseContext = useContext(ExpenseContext);

    const addExpenseHandler = expense => {
        expenseContext.addExpenses(expense);
    }
    const expenses = expenseContext.expense
    return (
    <Fragment>
    <Home />
    <NewExpenses onAddExpense={addExpenseHandler}/>
    <ExpenseList  items={expenses}/>
    </Fragment>
    )
}
export default HomePage;