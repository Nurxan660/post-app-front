import React,{ useState} from 'react'
import './Messages.css'
import WebSocket from '../../store/WebSocket'
import PostStore from '../../store/PostStore';
import { observer } from 'mobx-react-lite';
import FindFriendsStore from '../../store/FindFriendsStore';
import {getPosts,changeStatus} from '../../service/PostService'
import ShowComment from './ShowComment';

const Messages=observer(()=>{

  const [content,setContent]=useState('')
  const [currentPostId,setCurrentPostId]=useState('')
  const [value,setValue]=useState('1')

  
  
  const onChange=(e)=>{
   setContent(e.target.value)
  }
  const onChangeOption=(e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
   }
  const onSubmit=(e)=>{
    console.log("value",value)
    e.preventDefault()
    if(value=="3"){
    PostStore.sendMessageWhenAddPost(content)
    console.log(3)
    }
    else if(value=="1"){
      console.log(1)
      PostStore.sendMessageWhenAddPostForFriends(content)
    }
    else if(value=="2"){
      PostStore.sendMessageWhenAddPostForAll(content)
    }

  }
  const handleDisableButton=(e)=>{
    e.preventDefault()
    setCurrentPostId(e.target.value)
    changeStatus(e.target.value).then(()=>{
      getPosts(FindFriendsStore.currentUserId.id).then((res)=>{
        console.log(res.data)
         PostStore.setUserPosts(res.data)
      })
    })
  }
 
  return (
    
    <>
       <div className="postForm">
       <input type="text" onChange={onChange} value={content} />
       <select value={value} onChange={onChangeOption}>
         <option value="1">Add to friends</option>
         <option value="2">Add to all</option>
         <option value="3">Add to auth users</option>
       </select>
       <button type="submit" className="addPostButton"  onClick={onSubmit}>Add</button>
       </div>
       {PostStore.userPosts.map((d)=>{ 
           if(d.user.id==FindFriendsStore.currentUserId.id){
         return (
         
           <>
      <div className="messages-content">
      {d.content}
      </div>
      <div className="messages-footer">
        {d.user.nickname+" "+d.localDateTime}
        </div>
        <button value={d.id} onClick={handleDisableButton}>Disable comments</button>
       {d.commentsEnabled&&<ShowComment id={d.id}  />}
          
      </>
      )
           }
      
      })}


      

      


      
      </>
    
  )
})

export default Messages