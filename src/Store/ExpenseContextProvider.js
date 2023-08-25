import { useCallback, useContext, useEffect, useState } from "react";
import ExpenseContext from "./expense-context";
import AuthContext from "./auth-context";;
const ExpenseContextProvider = props => {
    const authCtx = useContext(AuthContext);
    const modifiedEmail = authCtx.isLoggedIn ? authCtx.email.split('@')[0] : '';
    const [expense,setExpense] = useState([]);
    // const [receivedExpenses,setReceivedExpenses] = useState([]);
    const addExpenseHandler = (expense) => {
        setExpense(preExpenses => {
            return [expense,...Object.values(preExpenses)]
          })

              fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses.json`,{
                method:'POST',
                body:JSON.stringify({
                    ...expense,
                    email: modifiedEmail
                }),
                headers: {
                    'Content-Type':'application.json'
                }
              }).then(res => {
                if(res.ok) {
                    console.log(res)
                }
              })
    }
    const fetchData = useCallback(() => {
        fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses.json`,)
        .then(res => res.json())
        .then(data => setExpense(data))

    },[]);

    useEffect(() => {
        fetchData();
    },[fetchData])



    const expenseContext = {
        expense:expense,
        addExpenses:addExpenseHandler
            
    }
    console.log(expense)
    return (
        
        <ExpenseContext.Provider value={expenseContext}>
            {props.children}
        </ExpenseContext.Provider>
    )
};
export default ExpenseContextProvider;