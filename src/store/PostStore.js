import FindFriends from "./FindFriendsStore";
import { makeAutoObservable } from "mobx";
import {getPostsAll} from '../service/PostService'



class PostStore{
    client=null
    clientForAll=null
    currentId=null
    posts=[]
    comments=[]
    postsToFriend=[]
    postsForAll=[]
    isCommentEnabled=true;
    userPosts=[]

    constructor(){
      makeAutoObservable(this)
    }

    onChangePosts(payload){
      console.log(payload)
      this.posts=payload.posts
      console.log(payload.userPosts)
      this.userPosts=payload.userPosts
    }
    setPostsForAll(posts){
    this.postsForAll=posts
    }
   
    onChangePostsToFriend(payload){
      console.log(payload)
      this.postsToFriend=payload.posts
      this.userPosts=payload.userPosts
    }
    onChangeUserPosts(payload){
      this.userPosts=payload.posts
    }
    onChangePostsToAll(payload){
      console.log(payload)
      this.postsForAll=payload.posts
      this.userPosts=payload.userPosts

    }
    

    onChangeComments(payload){
      this.comments=payload.comments
    }

    setClient(client){
      this.client=client
    }
    setClientForAll(client){
      this.clientForAll=client
    }
    setCurrentId(id){
      this.currentId=id
    }
    
    setComments(data){
      this.comments=data
    }
    setPosts(data){
      this.posts=data
    }
    setUserPosts(data){
      this.userPosts=data
    }
    changeIsEnabled(){
      this.isCommentEnabled=!this.isCommentEnabled
    }

    

    sendMessageWhenAddPost(e){
     
      const message = {
        userId: FindFriends.currentUserId.id,
        content:e,
      }
        this.client.sendMessage("/app/post",JSON.stringify(message))
    }
    sendMessageWhenAddPostForFriends(e){
     console.log("для друзей")
      const message = {
        userId: JSON.parse(localStorage.getItem("token")).id,
        content:e,
      }
        this.client.sendMessage("/app/postForFriends",JSON.stringify(message))
    }

    sendMessageWhenAddPostForAll(e){
      console.log("для всех")
       const message = {
         userId: JSON.parse(localStorage.getItem("token")).id,
         content:e,
       }
         this.client.sendMessage("/app/postForAll",JSON.stringify(message))
     }


    sendMessageWhenShowComments(e,content){
      console.log("фысфы")
      const message = {
        senderId: JSON.parse(localStorage.getItem("token")).id,
        postId:e,
        content:content
      }
      console.log(message)
        this.client.sendMessage("/app/comments",JSON.stringify(message))
    }
    getPostsAll(){
      getPostsAll().then((res)=>{
        this.posts=res.data
     })
    }

         
    
}
export default new PostStore()