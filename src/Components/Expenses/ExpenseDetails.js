import { Fragment,useState } from 'react';
import classes from './ExpenseItem.module.css';
import EditExpense from '../EditExpenses/EditExpense';
import { useDispatch } from 'react-redux';
import {expenseActions} from '../../Store/ExpenseReducer';
const ExpenseDetails = (props) => {
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch()
    const removeExpenses = (id) => {
       dispatch(expenseActions.deleteExpense(id))
    }



    const redirectToEdit = () => {
        setIsShown(current => !current);
    }
    const closeForm=()=>{
        setIsShown(false)
    }
    return (
  
   <Fragment>
        <div className={classes.description}>
            <span>{props.title}</span>
            <span>{props.category}</span> 
            <span>Rs {Number(props.amount)}</span>
        </div>
        <div className={classes.action}>
            <button onClick={removeExpenses.bind(null,props.id)}>Delete</button>
            <button onClick={redirectToEdit}>Edit</button>
            {isShown && <EditExpense items={props} onClose={closeForm}/>}
            </div> 
        </Fragment>
      
    )
};

export default ExpenseDetails;