import { useContext, useRef } from "react"
import Card from "../Card";
import classes from '../styles/UserRegistrationForm.module.css'
import AuthContext from "../../contexts/auth-context";


const UserRegistrationForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext)

  const submitHander = (event) =>{
    event.preventDefault();

    const email_value = emailInputRef.current.value;
    const password_value = passwordInputRef.current.value;
    const confirm_password_value = confirmPasswordInputRef.current.value;

    const user = {
      email: email_value,
      password: password_value,
      confirmation_password: confirm_password_value
    }
    
    fetch('http://localhost:3001/users/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then(data => data.json())
    .then(data =>{
      console.log(data)
      if(data.data.user){
        authCtx.login(data.data.user.authentication_token)
      }
      
    } )
  }


  return (
    <div className={classes.form}>
      <Card>
        <form onSubmit={submitHander}>
          <h1>Create Account</h1>
          <div>
            <label>Email</label><br/>
            <input type='email' id='email-input' required ref = {emailInputRef}/>
          </div>
          <div>
            <label>Password</label><br/>
            <input type='password' id='password-input' required ref={passwordInputRef}/>
          </div>
          <div>
            <label>Confirm Password</label><br/>
            <input type='password' id='password-input' required ref={confirmPasswordInputRef}/>
          </div>
          <button>Create Account</button>
        </form>
      </Card>
    </div>
    
  )
}

export default UserRegistrationForm;