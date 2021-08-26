import classes from './styles/SignIn.module.css'
import SignInForm from '../components/Forms/SignInForm'
import UserRegistrationForm from '../components/Forms/UserRegistrationForm'
import ModalBackground from '../components/ModalBackground'
import { useState } from 'react'
function SignIn(){
  const [register, setRegister] = useState(false);

  const registerHandler = (event) =>{
    event.preventDefault();
    if(!register){
      setRegister(true)
    }else{
      setRegister(false)
    }
    
  }

  return (
    <section>
      <SignInForm onSet={registerHandler}/>
      {register && <ModalBackground setRegister={registerHandler}/>}
      {register && <UserRegistrationForm/>}
      
    </section>
  )
}

export default SignIn;