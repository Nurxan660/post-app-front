import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/Form/LoginForm'
import ChatCabinet from './components/ChatCabinet'
import React,{useEffect, useState} from 'react'
import SockJsClient from 'react-stomp';
import PostStore from './store/PostStore.js'
import AuthHeader from './service/AuthHeader.js'
import PostsForAll from './components/Navbar/PostsForAll.jsx'

function App() {
  //const [client,setClient]=useState(null)
  
  /*useEffect(()=>{
    WebSocket.connect()
},[])*/

  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
    <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<LoginForm/>} />
        <Route exact path='/postsForAll' element={<PostsForAll/>} />
        <Route exact path='/messages/*' element={<ChatCabinet />} />
      </Routes>
      
    </main>
    <SockJsClient url='http://localhost:8080/ws'
topics={["/user/postForAll"] }
headers={AuthHeader()}
onConnect={() => {
    console.log("connected");
}}
onDisconnect={() => {
    console.log("Disconnected");
}}
onMessage={(msg) => {
  console.log("хей",msg)
  PostStore.onChangePostsToAll(msg)
     

    
}}
ref={(client) => {
  PostStore.setClientForAll(client)
console.log(client)
}}

/>
    </BrowserRouter>
  );
}

export default App;
