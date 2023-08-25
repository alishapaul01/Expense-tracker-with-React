import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage";
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import ExpenseContextProvider from './Store/ExpenseContextProvider';
import EditPage from './Pages/EditPage'

const App=()=>{
  return(
    <>
  <Switch>
  <ExpenseContextProvider>
  <Route path='/' exact>
    <LoginPage />
  </Route>
  <Route path='/login'>
    <LoginPage />
  </Route>
  <Route path='/home'>
    <HomePage />
  </Route>
  <Route path= '/profile'>
  <ProfilePage/>
  </Route>
  <Route path= '/forgot'>
  <ForgetPasswordPage/>
  </Route>
  <Route path='/edit'>
    <EditPage/>
  </Route>
  </ExpenseContextProvider>
  </Switch>
  </>
  )
}
export default App;