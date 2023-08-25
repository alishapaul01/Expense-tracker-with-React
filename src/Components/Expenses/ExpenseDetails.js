import { Fragment, useContext, useState } from 'react';
import classes from './ExpenseItem.module.css';
import ExpenseContext from '../../Store/expense-context';
import EditExpense from '../EditExpenses/EditExpense';
const ExpenseDetails = (props) => {
    const [isShown, setIsShown] = useState(false);
   const expCtx= useContext(ExpenseContext);
    const deleteExpenseHandler=(id)=>{
        expCtx.deleteExpenses(id);
    }
    const redirectToEdit = () => {
        setIsShown(current => !current);
    }
    return (
    <Fragment>
        <div className={classes.description}>
        <span>{props.title}</span>
        <span>{props.category}</span> 
        <span>Rs {props.amount}</span>
        </div>
        <div className={classes.action}>
        <button onClick={redirectToEdit}>Edit</button>
          {isShown && <EditExpense items={props} />}
        <button onClick={deleteExpenseHandler.bind(null,props.id)}>Delete</button></div>
    </Fragment>
    )
};

export default ExpenseDetails;