import { Fragment, useCallback, useEffect} from "react";
import Home from "../Components/Home/Home";
import NewExpenses from '../Components/Expenses/NewExpenses'
import ExpenseList from '../Components/Expenses/ExpenseList'
import { expenseActions } from '../Store/ExpenseReducer';
import Premium from "../Components/Premium Components/Premium";
import {useDispatch, useSelector} from 'react-redux';
import Toggle from'../Components/Premium Components/Toggle';
import classes from './HomePage.module.css';

const HomePage = () => {

    const dispatch = useDispatch();
    const receivedExpenses = useSelector(state => state.expense.expense)
    const fetchData = useCallback(() => {
    fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses.json`,)
            .then(res => res.json())
            .then(data => dispatch(expenseActions.fetchData(data)))
}, [])
    useEffect(() => {
       fetchData()
    }, [fetchData])
    const addExpenseHandler = expense => {
        dispatch(expenseActions.addExpenses(expense));
    }
    let expenses = []
    if(receivedExpenses !== null){
        expenses = receivedExpenses;
    }
    let totalAmount = 0;
    Object.values(receivedExpenses).map(item => {
        totalAmount = totalAmount + Number(item.amount)
    });

    return (
    <Fragment>
    <Home />
    <Toggle/>
    <NewExpenses onAddExpense={addExpenseHandler}/>
    {totalAmount > 10000 && <Premium  expense={expenses} amount={totalAmount}/>}
    <ExpenseList items={(receivedExpenses !== null) ? receivedExpenses : ''} />
    <div className={classes.total}>Total Expense Amount: Rs {totalAmount}</div>
    </Fragment>
    )
}

export default HomePage
	