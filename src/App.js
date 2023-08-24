import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage";
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import ExpenseContextProvider from './Store/ExpenseContextProvider';

const App=()=>{
  return(
    <>
  <Switch>
  <Route path='/' exact>
    <LoginPage />
  </Route>
  <Route path='/login'>
    <LoginPage />
  </Route>
  <ExpenseContextProvider>
  <Route path='/home'>
    <HomePage />
  </Route>
  </ExpenseContextProvider>

  <Route path= '/profile'>
  <ProfilePage/>
  </Route>
  <Route path= '/forgot'>
  <ForgetPasswordPage/>
  </Route>
  </Switch>
  </>
  )
}
export default App;