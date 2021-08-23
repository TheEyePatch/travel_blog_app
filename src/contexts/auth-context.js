import React, {useState} from 'react';


const AuthContext = React.createContext({
  token:'',
  userLoggedIn: false,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props) =>{
  const [token, setToken] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const logInHandler = (token) =>{
    setToken(token)
    setUserLoggedIn(true)
  };
  
  const logOutHander = () =>{
    fetch('http://localhost:3001/users/users/sign_out',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'AUTH-TOKEN': token
        }
      }
    ).then(data => data.json()).then(
        data =>{
          console.log(data)
        }
    )
  };

  const aut_ctx = {
    token: token,
    userLoggedIn: userLoggedIn,
    login: logInHandler,
    logout: logOutHander
  }

  return <AuthContext.Provider value ={aut_ctx}>{props.children}</AuthContext.Provider>
}

export default AuthContext;