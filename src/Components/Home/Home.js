// import { NavLink } from "react-bootstrap";
import classes from './Home.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home=()=>{
    return (
        <div className={classes.home}>
        <h2>Welcome to Expense Tracker !</h2>
        <p>Your profile is incomplete.
            <Link to='/profile'>Complete Now</Link>
            </p>
        </div>
    )
    
}
export default Home;