import React, { useEffect, useState } from 'react'
import {getFriendsAccepted} from '../../service/AddToFriendService'
import FindFriendsStore from '../../store/FindFriendsStore'
function FriendsList() {
    const [friends,setFriends]=useState([])

    useEffect(()=>{
     getFriendsAccepted(FindFriendsStore.currentUserId.id).then((res)=>{
         console.log(res.data)
         setFriends([...res.data])
     })
    },[])
  return (
      friends.map((d)=>{
          return(
        <div className="friends-navigation">
        <span>{d.recipient.nickname}</span>
        </div>
          )
      })
    
  )
}

export default FriendsList