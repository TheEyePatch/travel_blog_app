import { useRef, useContext } from "react"
import AuthContext from "../../contexts/auth-context";

function SignInForm(){
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authContext = useContext(AuthContext)

  const submitHandler = (event) =>{
    event.preventDefault();
    const email_value = emailInputRef.current.value;
    const password_value = passwordInputRef.current.value;
    


    fetch('http://localhost:3001/users/users/sign_in',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sign_in: {
          email: email_value,
          password: password_value, 
        }
      }
      )
    }
    ).then(data =>{
      return data.json()
    }).then(data => authContext.login(data.data.user.authentication_token) )
  }

  return(
    <div>
      <h1>User Log In</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor = 'email'>Email</label>
          <input type='email' required id='email' ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor = 'password'>Password</label>
          <input type='password' required id='password' ref={passwordInputRef}/>
        </div>
        <button>Sign In</button>
      </form>
    </div>
    
  )
}

export default SignInForm;