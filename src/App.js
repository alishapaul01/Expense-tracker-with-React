import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage";
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import EditPage from './Pages/EditPage'
import { useEffect } from "react";
import { useSelector} from "react-redux";

const App=()=>{
  const isDarkMode = useSelector(state => state.theme.isClicked)
  const isLogin = useSelector(state => state.auth.isLoggedIn)

   useEffect(() => {
    if(isLogin) {
    document.body.style.backgroundColor = isDarkMode ? "#292c35" : "#fff";
    } else {
      document.body.style.backgroundColor =  "#fff";
    }
  }, [isDarkMode]);
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
  </Switch>
  </>
  )
}
export default App;