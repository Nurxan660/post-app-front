import React,{useState} from 'react'
import CommentsInput from './CommentsInput'
import MessageContent from './MessageContent'
import PostStore from '../../store/PostStore'
import {getComments,changeStatus} from '../../service/PostService'

function ShowComment({id}) {
    const [open,setOpen]=useState(false)
    

    const onClick=(e)=>{
        console.log("я здесь")
        e.preventDefault()
        setOpen(!open);
        getComments(e.target.value).then((res)=>{
            console.log(res.data)
            PostStore.setComments(res.data)
        })
    }
    
  return (
      <>
    <button className="open-comment" onClick={onClick} value={id}>
        Show comment
        </button>
        {open?<div className="comments">
        <div className="comments-content">
          <MessageContent id={id}/>
          </div>
          <div className="comments-form">
              <CommentsInput id={id}/>
          </div>
      </div>:null}
      </>
  )
}

export default ShowComment