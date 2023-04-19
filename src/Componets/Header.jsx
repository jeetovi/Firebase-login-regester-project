import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from './UseContex/AuthProviders';

const Header = () => {
   const {user,logOut} = useContext(AuthContex)

   const handleLogOut = () => {
    logOut()
    .then (() => { })
    .catch(error => console.log(error))
   }
    return (
        <div>
<div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  <Link  className="btn btn-ghost normal-case text-xl" to='/' >Home</Link>
  <Link  className="btn btn-ghost normal-case text-xl" to='/login' >Login</Link>
 
  <Link  className="btn btn-ghost normal-case text-xl" to='/regester' >Regester</Link>
  <Link  className="btn btn-ghost normal-case text-xl" to='/order' >Order</Link>
{user && <Link  className="btn btn-ghost normal-case text-xl" to='/user' >UserProfile</Link>}
  {/* {
    user ? <span>{user.email}</span> : <button className='btn btn-xs'> SignOut</button>
  } */}
  {
    user ? <>   
    <span>{ user.email}</span>
    <button onClick={handleLogOut}   className='btn btn-xs'> SignOut</button>
     </> : <Link to='/login'> Login</Link>

  
  }
</div>
       
            
        </div>
    );
};

export default Header;