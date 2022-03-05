import FindFriends from "./FindFriendsStore";
import { makeAutoObservable } from "mobx";



class WebSocket{
    client=null
    data=[]

    constructor(){
      makeAutoObservable(this)
    }

    ref(payload){
      this.data=payload
      localStorage.setItem("friendReq",JSON.stringify(this.data))
    }


    setClient(client){
      this.client=client
    }

    sendMessageToAddFriend(e){
      const message = {
        senderId: FindFriends.currentUserId.id,
        recipientId: e,
        
      }
        this.client.sendMessage("/app/friend/add",JSON.stringify(message))
    }
    sendMessageToChangeStatus(senderId,s){
      
      const message = {
        senderId: senderId,
        recipientId:FindFriends.currentUserId.id ,
        status:s,
        
      }
      this.client.sendMessage("/app/friend/req",JSON.stringify(message))
    }
    
    

    

    
         
    
}
export default new WebSocket()