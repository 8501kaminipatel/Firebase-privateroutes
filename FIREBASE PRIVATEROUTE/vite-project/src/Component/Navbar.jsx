import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../SERVICES/firebase';
import { Usercontext } from '../CONTEXT/AuthContext';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const { setUser, user } = useContext(Usercontext);
  
  function handleSignOut() {
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (

    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">MyProductApp</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          {user && <button onClick={handleSignOut}>Sign Out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;