import { configureStore } from '@reduxjs/toolkit';

import authSlice from './AuthReducer';
import expenseSlice from './ExpenseReducer';
import themeSlice from './ThemeReducer';




const store = configureStore({

    reducer: {auth: authSlice.reducer, theme: themeSlice.reducer , expense: expenseSlice.reducer }

});




export default store;