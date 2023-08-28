import { configureStore } from '@reduxjs/toolkit';

import authReducer from './AuthReducer';

import expenseReducer from './ExpenseReducer';




const store = configureStore({

    reducer: {auth: authReducer, expense: expenseReducer}

});




export default store;