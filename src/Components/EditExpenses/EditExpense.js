import classes from './EditExpense.module.css';

import {useState} from 'react';
import {expenseActions} from '../../Store/ExpenseReducer';
import {useDispatch} from 'react-redux'
const EditExpense = props => {
    const dispatch = useDispatch();
    const[enteredDescription, setEnteredDescription] = useState(props.items.title);
    const[enteredAmount, setEnteredAmount] = useState(props.items.amount);
    const[enteredCategory, setEnteredCategory] = useState(props.items.category);
    
    const updateDescription= (e) =>{
        setEnteredDescription(e.target.value);
    }
    const updateAmount = (e) =>{
         setEnteredAmount(e.target.value);
    }

    const updateCategory = (e) => {
        setEnteredCategory(e.target.value);
    }

    const editExpenseData = (e) => {
        e.preventDefault();
        const updatedExpense = {
            title: enteredDescription,
            amount: enteredAmount,
            category: enteredCategory,
            id:props.items.id
        }
        dispatch(expenseActions.editExpense(updatedExpense))
    }
  return (

        <div className={classes.expense}>
            <form onSubmit={editExpenseData}>
                <div className={classes.controls}>
                <div className={classes.control}>
                <label htmlFor='title'>Expense Description</label><br />
                <input type="text" id="title" 
                value={enteredDescription} 
                onChange={updateDescription}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='amount'>Expense Amount</label><br />
                    <input type="number" id="amount" 
                    value={enteredAmount}
                    min="0.01" step="0.01"
                    onChange={updateAmount}/>

            </div>
            <div className={classes.control}>
                <label htmlFor="category">Expense Category</label><br />
                <select id="category" name="category" value={enteredCategory} onChange={updateCategory}>
                    <option value="Select a Category" defaultValue >Select a Category</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Food">Food</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Movies">Movies</option>
                    <option value="Fees">Fees</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Furniture">Furniture</option>
            </select>
            </div>
            </div>

        <div className={classes.actions}>
            <button type="submit">Edit Expense</button>
            </div>
        </form>
        </div> 
        )
    };
export default EditExpense;