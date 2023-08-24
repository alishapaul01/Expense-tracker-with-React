import { Fragment, useContext, useRef } from 'react';
import classes from './Profile.module.css';
import AuthContext from '../../Store/auth-context';

const Profile = () => {

    const authCtx = useContext(AuthContext);
    const nameInputRef = useRef();
    const photoURLRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredPhotoURL = photoURLRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBNOz1MYeGBYHHahcUQZuKj7rteQi0uYbM', {
            method:'POST',
            body:JSON.stringify({
                idToken:authCtx.token,
                displayName:enteredName,
                photoUrl:enteredPhotoURL,
                returnSecureToken:true,

            })
        })

    }
    return (
        <Fragment>
        <div className={classes.profile}>
        <h3>Complete Your Profile</h3>

        </div>

        <section className={classes.form}>
              <h1>Contact Details</h1>
              <form onSubmit={submitHandler}>
                <div className={classes.control}>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' id='name' 
                  ref={nameInputRef } 
                  required />
                </div>
                <div className={classes.control}>
                  <label htmlFor='photo'>Photo URL</label>
                  <input
                    type='text'
                    id='photo'
                    ref={photoURLRef}
                    required
                  />
                </div>

                <div className={classes.actions}>
                 <button type='submit'>Update</button> 

                </div>
              </form>
            </section>
        </Fragment>


    )

};

export default Profile;