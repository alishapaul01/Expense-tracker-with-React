import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


const ExpenseList = props => {
    let data = Object.values(props.items);
    return(
    <Card className={classes.list}>
        <ul>
        {data.map((key) => (
        <ExpenseItem key={key.id} id={key.id} title={key.title} amount={Number(key.amount)} category={key.category}/>
        ))}
        </ul>
        </Card>
    )

};

export default ExpenseList;