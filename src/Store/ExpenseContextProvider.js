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

    const deleteExpenseHandler = (id) => {
        const key = Object.keys(expense).find(key => expense[key].id === id)
         fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses/${key}.json`,{
             method:'DELETE'
         })
         .then(res => {
             if(res.ok) {
                 console.log("expenses deleted successfully")
                 window.location.reload()
             }
         })
 
 
     }
     const editExpenseHandler =(item) => {

        const key = Object.keys(expense).find(key => expense[key].id === item.id)
        console.log(item)
        fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses/${key}.json`,{
            method:'PUT',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                console.log("expenses edited successfully");
                window.location.reload()
            }
        })
    }


    const expenseContext = {
        expense:expense,
        addExpenses:addExpenseHandler,
        deleteExpenses: deleteExpenseHandler,
        editExpenses: editExpenseHandler
            
    }
    console.log(expense)
    return (
        
        <ExpenseContext.Provider value={expenseContext}>
            {props.children}
        </ExpenseContext.Provider>
    )
};
export default ExpenseContextProvider;