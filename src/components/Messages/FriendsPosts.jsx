import React,{useEffect} from 'react'
import PostStore from '../../store/PostStore'
import { observer } from 'mobx-react-lite';
import ShowComment from './ShowComment';

const FriendsPosts=observer(()=>{
  
  return (
    <>
       
       
    {PostStore.postsToFriend.map((d)=>{ return (
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

export default FriendsPosts