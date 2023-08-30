import { configureStore } from '@reduxjs/toolkit';

import authReducer from './AuthReducer';

import expenseReducer from './ExpenseReducer';
import themeReducer from './ThemeReducer';




const store = configureStore({

    reducer: {auth: authReducer, expense: expenseReducer , theme: themeReducer}

});




export default store;