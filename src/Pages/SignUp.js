import classes from './SignUp.module.css'
import {useRef, Fragment } from 'react';

const SignUp = props => {

    // const [isLogin, setIsLogin] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
 const handleSubmit = e => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;
        const signUpData = {
            email:enteredEmail,
            password:enteredConfirmPassword,
            returnSecureToken: true
          }

        if(enteredPassword !== enteredConfirmPassword){
            alert('Password does not match')
            confirmPasswordInputRef.current.value = '';
        }
        else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNOz1MYeGBYHHahcUQZuKj7rteQi0uYbM',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signUpData)
            }).then(res => {
                if(res.ok){
                    console.log('User has successfully signed up')
                }else{
                    res.json().then(data => {
                        alert(data.error.message);
                    })
                }
            })
        }
    

}
    return (
        <Fragment>
        <section className={classes.auth}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className={classes.control} >
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' ref={emailInputRef} required />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                ref={passwordInputRef}
                required
              />
            </div>
           <div className={classes.control}>
              <label htmlFor='Cpassword'>Confirm Password</label>
              <input
                type='password'
                id='Cpassword'
                ref={confirmPasswordInputRef}
                required
              />
            </div>
            <div className={classes.actions}>
          <button type='submit'>Create Account</button>
            </div>
          </form>

        </section>

       </Fragment>
      );

}

export default SignUp;