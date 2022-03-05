
import './Navbar.css'
import { Link } from 'react-router-dom'
import {getUser,logOut} from '../../service/AuthService'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FindFriendsStore from '../../store/FindFriendsStore'

function Navbar() {
    const [curUser,setCurUser]=useState(undefined)
    const navigate = useNavigate();

    useEffect(() => {
        const user=getUser();
    if(user){
        setCurUser(user);
       
    }
       
    }, [])

    const logout=()=>{
        logOut();
        setCurUser(undefined);
        FindFriendsStore.onChangeNavbar()
        navigate('/')
        window.location.reload();
        
        
    }
    return (
      <header>
      <nav className="navbar">
                 <Link to='/' className='home'>
              <div className="nav-item-name">
                      <span className="icon-e">C</span>
                      <span className="commerce">hat app</span>  
              </div>
              
              

              
              
              </Link>
              {!curUser&&<Link to='/login' className='login'>
              <div className="nav-login">
                      Login
                  </div>
                  </Link>}
                  {!curUser&&<Link to='/postsForAll' className='login'>
                  <div className="nav-login">
                      Posts
                  </div>
                  </Link>}
              {curUser&&<Link to='/logout' className='login'>
              <div className="nav-login" onClick={logout}>
                      LogOut
                  </div>
                  </Link>}
                 
                  
                  
          </nav>
          </header>
      );
    }


export default Navbar