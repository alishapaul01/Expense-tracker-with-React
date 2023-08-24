import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage";


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
  <Route path='/home'>
    <HomePage />
  </Route>

  <Route path= '/profile'>
  <ProfilePage/>
  </Route>
  </Switch>
  </>
  )
}
export default App;