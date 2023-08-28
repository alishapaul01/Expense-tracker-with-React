import { createSlice } from "@reduxjs/toolkit";

const intialExpenseState={expense: [], totalAmount: 0}
const expenseSlice= createSlice({
    name: 'expense',
    initialState: intialExpenseState,
    reducers:{
        addExpenses(state,action) {

            fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses.json`,{
                method:'POST',
                body:JSON.stringify(action.payload),
                headers: {
                    'Content-Type':'application.json'
                }
              }).then(res => {
                if(res.ok) {
                    console.log(res)
                }
              })
              state.expense = [...Object.values(state.expense),action.payload]
        },
        fetchData(state, action) {
            state.expense = action.payload
        },
        deleteExpense(state,action) {
            const key = Object.keys(state.expense).find(key => state.expense[key].id === action.payload)

        fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses/${key}.json`,{
            method:'DELETE'
        })
        .then(res => {
            if(res.ok) {
                console.log("expenses deleted successfully")
                window.location.reload()
            }
        })


    },
    editExpense(state,action)  {

        const key = Object.keys(state.expense).find(key => state.expense[key].id === action.payload.id)
        console.log(key)
        fetch(`https://expense-tracker-5d0ea-default-rtdb.firebaseio.com/expenses/${key}.json`,{
            method:'PUT',
            body:JSON.stringify(action.payload),
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
    }
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;