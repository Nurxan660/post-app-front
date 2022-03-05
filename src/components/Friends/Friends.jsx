import React from 'react'
import './Friends.css'
import { Link } from 'react-router-dom'


function Friends() {
  return (
      <>
    <div className="friends-navigation">
    <span>Friends requests </span>
    <Link to='/messages/friends/req' className='friends'><button className="find-friends">Show all</button></Link>
  </div>
    <div className="friends-navigation">
      <span>Your friends </span>
      <Link to='/messages/friends/find' className='friends'><button className="find-friends">Find friends </button></Link>
    </div>
    <div className="friends-navigation">
      <span>List of friends </span>
      <Link to='/messages/friends/list' className='friends'><button className="find-friends">Check </button></Link>
    </div>
    </>
  )
}

export default Friends
