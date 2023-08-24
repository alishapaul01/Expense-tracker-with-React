

import ExpenseDetails from './ExpenseDetails';




const ExpenseItem = props => {

    return (

       <li>
           <ExpenseDetails title={props.title} amount={props.amount} des={props.des} />
        </li>

    )
}




export default ExpenseItem;