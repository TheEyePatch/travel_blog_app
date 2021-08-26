import { useRef, useContext } from "react"
import { useHistory } from "react-router";
import Card from "../Card";
import AuthContext from "../../contexts/auth-context";

function SignInForm(props){
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) =>{
    event.preventDefault();
    const email_value = emailInputRef.current.value;
    const password_value = passwordInputRef.current.value;
    


    fetch('http://localhost:3001/users/users/sign_in',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    }).then(data => {
      if(data.data.user){
        authContext.login(data.data.user.authentication_token)
        history.replace('/')
      }else{
        alert(data.messages)
      }
    })
  }

  return(
    <Card>
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
      <a onClick={props.onSet} >Create Account</a> 
    </Card>
      
  )
}

export default SignInForm;