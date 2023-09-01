
import classes from './Home.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import {authActions} from '../../Store/AuthReducer';
import {useDispatch, useSelector} from 'react-redux'



const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const verifyEmailHandler = (e) => {
        
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBNOz1MYeGBYHHahcUQZuKj7rteQi0uYbM',{
            method:'POST',
            body :JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken:token

            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => {
            if(res.ok){
                console.log(res)
            } else {
                res.json().then(data => {
                    alert(data.error.message)
                })
            }
        })
    }
    const logoutHandler=()=>{
        dispatch(authActions.logout());
        history.replace('/login');

    }
    return (<>
        
        <div className={classes.home}>
        <h2>Welcome to Expense Tracker !</h2>
        <p>Your profile is incomplete.
            <Link to='/profile'>Complete Now</Link>
        </p>
        <div className={classes.action}><button onClick={verifyEmailHandler}>Verify Your Email</button></div> 
        <div className={classes.logout}><button onClick={logoutHandler}>Logout</button></div>
        </div>
        </>
        
       
    )
    
}
export default Home;