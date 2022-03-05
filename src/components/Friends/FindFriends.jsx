import React,{useState} from 'react'
import FindFriendsContent from './FindFriendsContent'
import FindFriendsStore from '../../store/FindFriendsStore'
import { observer } from 'mobx-react-lite';
import SockJsClient from 'react-stomp';
import w from '../../store/WebSocket';
import AuthHeader from '../../service/AuthHeader';
const FindFriends=observer(()=>{

  

  const onChangeNickname=(e)=>{
    FindFriendsStore.onChangeNickaname(e.target.value)
  }
  const onSubmit=(e)=>{
    FindFriendsStore.onSubmit(e)
  }
  return (
      <>
    <div className="friends-navigation">
      <span>Find Friends</span>
    </div>
    <form onSubmit={onSubmit}>
    <div className="friends-find-input">
    <input type="text" placeholder='Enter nickname' value={FindFriendsStore.nickname} onChange={onChangeNickname}/><button type="submit">Find</button>
  </div>
  </form>
  {FindFriendsStore.friends.map((f)=>{
    return <FindFriendsContent friend={f} />
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
                              />
  </>
  )
})

export default FindFriends