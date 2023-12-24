import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextLogin } from './LoginContext';

function Header() {
  let [current,setCurrent,userLoginStatus,setuserLoginStatus,onsubmit]=useContext(contextLogin)
  const navigate=useNavigate()
  function logout(){
    setCurrent({})
    setuserLoginStatus(false)
    navigate('/Login')
  }
  return (
    
    <div>
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          {  userLoginStatus===false?<>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="About">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="Technologies">Technologies</Link></li>
          <li className="nav-item"><Link className="nav-link" to="Login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="Register">Register</Link></li>
</>:
          <li className="nav-item"><Link className="nav-link" to="/" onClick={logout}>Logout</Link></li>
}
        </ul>
      </header>
    </div>
  );
}

export default Header;
