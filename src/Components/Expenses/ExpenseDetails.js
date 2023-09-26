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
            <h5>Description :<br/><br/>{props.title}</h5><hr/>
            <h5>Category :<br/><br/>{props.category}</h5><hr/>
            <h5>Price :<br/><br/>Rs {Number(props.amount)}</h5>
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