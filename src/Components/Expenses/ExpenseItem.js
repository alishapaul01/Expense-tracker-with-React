

import ExpenseDetails from './ExpenseDetails';




const ExpenseItem = props => {

    return (
        <li>
        <ExpenseDetails  key={props.id} id={props.id} title={props.title} amount={Number(props.amount)} category={props.category} />
        </li>
             
      
        
    )
}
export default ExpenseItem;