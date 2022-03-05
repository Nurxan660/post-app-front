import React, { useEffect } from 'react'
import WebSocket from '../../store/WebSocket';
import { observer } from 'mobx-react-lite';
import FindFriends from '../../store/FindFriendsStore';
import w from '../../store/WebSocket';




const FindFriendsContent=observer(({friend})=>{

 
  

    
 
 
   const sendMessage=(e)=>{
     w.sendMessageToAddFriend(e.target.value)
   }
   
  
  return (
    <div className="friends-find-content">
    <span >{friend.nickname+' '+'('+friend.firstName+' '+friend.lastName+')'}</span>
    <button type="submit" value={friend.id} onClick={sendMessage} >Add friend</button>
    </div>
    
  )
})

export default FindFriendsContent