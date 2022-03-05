import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

function  Navigation() {
  return (
    
    <ul className="navigation">
        <li>
            {JSON.parse(localStorage.getItem("token")).nickname}
        </li>
        <Link to='/messages/chats' className='chats'>
        <li>
            My posts
        </li>
        </Link>
        <Link to='/messages/Allchats' className='chats'>
        <li>
            All posts
        </li>
        </Link>
        <Link to='/messages/friendsPosts' className='chats'>
        <li>
            Friends posts
        </li>
        </Link>
        <Link to='/messages/friends' className='friends'>
        <li>
            Friends
        </li>
        
        </Link>
    </ul>


  



    
  )
}

export default Navigation