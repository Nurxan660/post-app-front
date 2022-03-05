import { observer } from 'mobx-react-lite'
import React from 'react'
import PostStore from '../../store/PostStore'

const MessageContent=observer(({id})=> {
  return (
    PostStore.comments.map((d)=>{
        if(d.posts.id==id){
        return (
          
        <div className="comment-message">
            <div className="message-username">
                <span>{d.user.nickname}</span>
                <span>{d.content}</span>
            </div>
            </div>
        
    )
        }
    })
  )
})

export default MessageContent