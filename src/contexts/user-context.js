import React, { useState } from "react";

const UserContext = React.createContext({
  email: '',
  getUser: () => {}
});


export const UserContextProvider = (props) => {
  const [email, setEmail] = useState(null);

  const fetchUser = () =>{
    fetch('http://localhost:3001/users/:username',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('auth_token')
      }
    })
    .then(data => data.json())
    .then(data => setEmail(data.email))
  }

  const user = {
    email: email,
    getUser: fetchUser,
  }

  return (<UserContext.Provider value={user}>{props.children}</UserContext.Provider>)
}

export default UserContext;