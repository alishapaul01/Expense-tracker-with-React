import { Fragment } from 'react';
import classes from './ExpenseItem.module.css';

const ExpenseDetails = (props) => {
    return (
    <Fragment>
    <div className={classes.description}>
        <span>Description: {props.title}</span>
        <span>Category: {props.des}</span> 
        <span>Price: Rs {props.amount}</span></div>
    </Fragment>
    )
};

export default ExpenseDetails;