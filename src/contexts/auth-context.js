import React, {useState} from 'react';


const AuthContext = React.createContext({
  token:'',
  userLoggedIn: false,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props) =>{
  const [token, setToken] = useState(sessionStorage.getItem('auth_token'));
  const userLoggedIn = !!token;
  
  
  const logInHandler = (token) =>{
    setToken(token)
    sessionStorage.setItem('auth_token', token)
  };
  
  const logOutHander = (event) =>{
    event.preventDefault();
    fetch('http://localhost:3001/users/users/sign_out',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('auth_token', token)
        }
      }
    ).then(data => data.json()
    ).then(
      data =>{
        console.log(data)
        sessionStorage.removeItem('auth_token')
        setToken(sessionStorage.getItem('auth_token'))
               
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