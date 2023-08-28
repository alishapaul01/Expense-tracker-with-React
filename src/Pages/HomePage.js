import { Fragment, useCallback, useEffect} from "react";
import Home from "../Components/Home/Home";
import NewExpenses from '../Components/Expenses/NewExpenses'
import ExpenseList from '../Components/Expenses/ExpenseList'
import { expenseActions } from '../Store/ExpenseReducer';
import Premium from "../Components/Premium/Premium";
import {useDispatch, useSelector} from 'react-redux';

const HomePage = () => {

    const dispatch = useDispatch();
    //const email = localStorage.getItem("email");
    //const isLogin = useSelector(state => state.auth.isLoggedIn)
    // const emailId = isLogin ? email.split('@')[0] : '';
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
    <NewExpenses onAddExpense={addExpenseHandler}/>
    {totalAmount > 10000 && <Premium />}
    <ExpenseList items={(receivedExpenses !== null) ? receivedExpenses : ''} />
    </Fragment>
    )
}

export default HomePage
	