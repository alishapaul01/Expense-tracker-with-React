import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import {Switch, Route , Redirect} from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage";
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import EditPage from './Pages/EditPage'
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {fetchExpenseData, sendExpenseItems} from './Store/expense-actions'

let isInitial= true;
const App=()=>{

  const isDarkMode = useSelector(state => state.theme.isClicked)
  const isLogin = useSelector(state => state.auth.isLoggedIn)
  const expense = useSelector(state => state.expense)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseData())
  },[dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    if(expense.changed) {
      dispatch(sendExpenseItems(expense));
    }
  }, [expense,dispatch])

   useEffect(() => {
    if(isLogin) {
    document.body.style.backgroundColor = isDarkMode ? "#292c35" : "#fff";
    } else {
      document.body.style.backgroundColor =  "#fff";
    }
  }, [isDarkMode , isLogin]);
  return(
  <>
  <Switch>
  <Route path='/' exact>
    <LoginPage />
  </Route>
  <Route path='/login'>
    <LoginPage />
  </Route>
  <Route path='/home'>
  {isLogin &&  <HomePage />}
  {!isLogin && <Redirect to='/' />}
  </Route>
  <Route path= '/profile'>
  {isLogin && <ProfilePage /> }
  {!isLogin && <Redirect to='/' />}
  </Route>
  <Route path= '/forgot'>
  <ForgetPasswordPage/>
  </Route>
  <Route path='/edit'>
  {isLogin && <EditPage /> }
  {!isLogin && <Redirect to='/' />}
  </Route>
  </Switch>
  </>
  )
}
export default App;