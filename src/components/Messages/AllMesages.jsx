import React,{useEffect, useState} from 'react'
import './Messages.css'
import WebSocket from '../../store/WebSocket'
import PostStore from '../../store/PostStore';
import { observer } from 'mobx-react-lite';
import CommentsInput from './CommentsInput';
import MessageContent from './MessageContent';
import ShowComment from './ShowComment';
import {getPostsForAll} from '../../service/PostService'


const AllMessages=observer(()=>{
    useEffect(()=>{
      getPostsForAll().then((res)=>{
        console.log(res)
        PostStore.setPosts(res.data)
      })
    },[])

  return (
    
    <>
       
       
       {PostStore.posts.map((d)=>{ return (
           <>
      <div className="messages-content">
      {d.content}
      </div>
      <div className="messages-footer">{d.user.nickname+" "+d.localDateTime}</div>
      {d.commentsEnabled&&<ShowComment id={d.id} />}
      {!d.commentsEnabled&&<button disabled>Comments not avaliable</button>}
        
      </>
      )})}


      

      

     
      
      </>
    
  )
})

export default AllMessages