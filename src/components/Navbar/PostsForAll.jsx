import React,{useEffect} from 'react'
import PostStore from '../../store/PostStore'
import { observer } from 'mobx-react-lite';
import ShowComment from '../Messages/ShowComment';
import {getPostsForAllNotAuth} from '../../service/PostService'

import '../Messages/Messages.css'
const PostsForAll=observer(()=>{
    useEffect(()=>{
        getPostsForAllNotAuth().then((res)=>{
          PostStore.setPostsForAll(res.data)
        })
      },[])
  return (
    <>
       
      <div className="all-messages">
       {PostStore.postsForAll.map((d)=>{ return (
           <>
      <div className="all-messages-content">
      {d.content}
      </div>
      <div className="all-messages-footer">{d.user.nickname+" "+d.localDateTime}</div>
      
      </>
      )})}
      </div>
      </>
  )

})

export default PostsForAll