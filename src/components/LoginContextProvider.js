import React, { useState} from 'react';
 
import { contextLogin } from './LoginContext';
import { compareSync } from 'bcryptjs';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


function LoginContextProvider({ children }) {
  const [current, setCurrent] = useState({});
  const [userLoginStatus, setUserLoginStatus] = useState(false);



  const onSubmit = async (userObj) => {
    let userSearch = await axios.get(`http://localhost:4000/users?email=${userObj.email}`);
    let userList = userSearch.data;

    if (userList.length === 0) {
      // setErr("email is invalid")
    } else {
      let passwordCompare = compareSync(userObj.password, userList[0].password);

      if (passwordCompare) {
        setCurrent(userList[0]);
        setUserLoginStatus(true);
       
      } else {
        // setErr("Password invalid")
      }
    }
  };

  return (
    <contextLogin.Provider value={[current, setCurrent, userLoginStatus, setUserLoginStatus, onSubmit]}>
      {children}
    </contextLogin.Provider>
  );
}

export default LoginContextProvider;
