import React, { useEffect } from 'react'
import w from '../../store/WebSocket'
import { observer } from 'mobx-react-lite';
import FindFriendsStore from '../../store/FindFriendsStore';
import c from '../../store/PostStore';
import SockJsClient from 'react-stomp';
import AuthHeader from '../../service/AuthHeader';

const FriendsReq=observer(()=>{

   function onClick(e){
    w.sendMessageToChangeStatus(e.target.value,e.target.innerText)
       localStorage.setItem("friendReq",JSON.stringify(FindFriendsStore.getFriendsWithStatus()))
  
  }
  


  return (
    <>{   

    w.data.map((d)=>{
      return (
    <div className="friends-find-content">
    <span >{"Request from: "+ d.sender.user.nickname}</span>
    <button value={d.id.senderId} onClick={onClick} >Accept</button>
    <button value={d.id.senderId} onClick={onClick}>Reject</button>
    </div>
      )

    })}
    <SockJsClient url='http://localhost:8080/ws'
                              topics={[`/user/${FindFriendsStore.currentUserId.id}/queue/friend/add`]}
                              headers={AuthHeader()}
                              onConnect={() => {
                                  console.log("connected");
                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={(msg) => {
                                console.log("msg",msg)
                                  w.ref(msg)
                              }}
                              ref={(client) => {
                                
                                w.setClient(client)
                                
                            }}
                              /></>
  )
})

export default FriendsReq