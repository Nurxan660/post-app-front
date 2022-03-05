import React,{useState} from 'react'
import PostStore from '../../store/PostStore'

function CommentsInput({id}) {
    const [content,setContent]=useState('')

  

    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }

    const handleSendButton=(e)=>{
        e.preventDefault()
        PostStore.sendMessageWhenShowComments(e.target.value,content)

    }
  return (
      <>
    <input type="text" className="comment" onChange={onChangeContent} value={content} placeholder='Оставить комментарий'/>
    <button className='comment-button' value={id} onClick={handleSendButton}>Send</button>
    </>
  )
}

export default CommentsInput