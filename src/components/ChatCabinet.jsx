import React from 'react'
import Navigation from './Navigation/Navigation'
import Messages from './Messages/Messages'
import Friends from './Friends/Friends'
import {  Route, Routes } from 'react-router-dom'
import FindFriends from './Friends/FindFriends'
import FriendsReq from './Friends/FriendsReq'

import SockJsClient from 'react-stomp';
import AllMessages from './Messages/AllMesages'
import AuthHeader from '../service/AuthHeader'
import PostStore from '../store/PostStore'
import FindFriendsStore from '../store/FindFriendsStore';
import FriendsList from './Friends/FriendsList'
import FriendsPosts from './Messages/FriendsPosts'


function ChatCabinet() {
  return (
    
    <div className="content">
      <Navigation/>
      
      <div className="center">
    <Routes>
    <Route exact path='/chats' element={<Messages/>} />
    <Route exact path='/Allchats' element={<AllMessages/>} />
    <Route exact path='/friendsPosts' element={<FriendsPosts/>} />
        <Route exact path='/friends' element={<Friends/>} />
        <Route exact path='/friends/find' element={<FindFriends />} />
        <Route exact path='/friends/list' element={<FriendsList />} />
        <Route exact path='/friends/req' element={<FriendsReq/>} />

      </Routes>
     
      <SockJsClient url='http://localhost:8080/ws'
topics={["/user/comments","/user/posts",`/user/postTo/${JSON.parse(localStorage.getItem("token")).id}`,`/user/postsFriend/${JSON.parse(localStorage.getItem("token")).id}`] }
headers={AuthHeader()}
onConnect={() => {
    console.log("connected");
}}
onDisconnect={() => {
    console.log("Disconnected");
}}
onMessage={(msg) => {
  console.log("hey",msg)
  if(msg.name=="posts"){
  PostStore.onChangePosts(msg)
  
  console.log("это пост")
  }
  if(msg.name=="postForFriends"){
    console.log(msg)
    PostStore.onChangePostsToFriend(msg)
    console.log("это пост для друзей")
  }
  if(msg.name=="friendsPosts"){
    console.log(msg)
    PostStore.onChangeUserPosts(msg)
    console.log("это пост для друзей")
  }
  if(msg.name=="comments"){
    PostStore.onChangeComments(msg)
    console.log("это не пост")
  }
    
}}
ref={(client) => {
  PostStore.setClient(client)
console.log(client)
}}

/>
      
      </div>
      
      </div>


      
  )
}

export default ChatCabinet