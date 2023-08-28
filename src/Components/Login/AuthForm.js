import { useState, useRef} from 'react';
import classes from './AuthForm.module.css'
import { useHistory } from 'react-router-dom';
import { authActions } from '../../Store/AuthReducer';
import { useDispatch} from 'react-redux'


const AuthForm = () => {
  const dispatch = useDispatch();
  const emailInputRef= useRef('');
  const passwordInputRef= useRef('');
  const confirmPasswordInputRef = useRef();
  const history= useHistory();
  const [isLogin, setIsLogin] = useState(true);

  const passwordResetHandler=()=>{
    history.push('/forgot');
  }
  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  async function submitHandler(event){
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
    let url;
    
    if(enteredPassword !== enteredConfirmPassword){
      alert('Password does not match')
      confirmPasswordInputRef.current.value = '';
  } 
    
  else{
    
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNOz1MYeGBYHHahcUQZuKj7rteQi0uYbM'
    }
    else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNOz1MYeGBYHHahcUQZuKj7rteQi0uYbM'
    }

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
      }),
      headers: {
          'Content-Type': 'application/json'
      },
  }).then((res) => {
      if (res.ok) {
          return res.json();
      } else {
          return res.json().then((data) => {
              let errorMessage = "Authenticatiion failed";
              throw new Error(errorMessage)
          })
      }
  })
      .then((data) => {
          dispatch(authActions.login(data));
          history.replace('/home');


      })
      .catch((err) => {
          alert(err.message);
      })
    }
  }
 
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input 
          type='email' 
          id='email' 
          ref={emailInputRef} 
          required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
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
        <div className={classes.forgot}>
          <p onClick={passwordResetHandler}>{isLogin ? 'Forget Password?' : ''}</p>
          </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button className={classes.toggle} onClick={switchAuthModeHandler}
          > 
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

            
    