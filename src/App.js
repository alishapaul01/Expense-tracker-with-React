import Login from "./Pages/LoginPage";
import Home from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
const App=()=>{
  return(
    <>
  <Switch>
  <Route path='/' exact>
    <Login />
  </Route>
  <Route path='/home'>
    <Home />
  </Route>
  </Switch>
  </>
  )
}
export default App;