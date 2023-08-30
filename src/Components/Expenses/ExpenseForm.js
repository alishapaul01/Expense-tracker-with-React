import classes from './ExpenseForm.module.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredDescription, setEnteredDescription] = useState('');
    const[enteredAmount, setEnteredAmount] = useState();
    const[enteredCategory, setEnteredCategory] = useState('');

    const updateDescription = (e) =>{
        setEnteredDescription(e.target.value);
    }

    const updateAmount = (e) =>{
        setEnteredAmount(e.target.value);

    }
    const updateCategory = (e) => {
        setEnteredCategory(e.target.value);
    }
    const addExpense = (e) => {
        e.preventDefault();

        const expenseDetails = {
            title: enteredDescription,
            amount: enteredAmount,
            category:enteredCategory
        }
        console.log(expenseDetails)
        props.onSaveExpenseData(expenseDetails);
        setEnteredDescription('');
        setEnteredAmount('');
        setEnteredCategory('');
        props.onCancel();
    }
    const cancelForm = (e) => {
        props.onCancel();
    }
    return (
        <div>

        <form onSubmit={addExpense}>
       <div className={classes.controls}>
           <div className={classes.control}>
               <label>Expense Description</label><br />
               <input type="text" id="title" value={enteredDescription} onChange={updateDescription}/>
           </div>
           <div className={classes.control}>
               <label>Expense Amount</label><br />
               <input type="number" id="amount" value={enteredAmount} min="0.01" step="0.01" onChange={updateAmount}/>
           </div>
           <div className={classes.control}>
               <label>Expense Category</label><br />
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
               <button type= "button" onClick={cancelForm}>Cancel</button>
              <button type="submit">Add Expense</button>
           </div>
       </form>

       <ul id="myList"></ul>
       </div>
    )

}

export default ExpenseForm;