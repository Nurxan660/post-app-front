import { makeAutoObservable } from "mobx";
import {getFriends,getFriendsWithStatus} from '../service/AddToFriendService'

class FindFriendsStore{
    nickname='';
    friends=[];
    friendsWithStatus=[]
    
    currentUserId=JSON.parse(localStorage.getItem("token"));
    constructor(){
        makeAutoObservable(this)
    }
    
    onChangeNickaname(e){
        this.nickname=e;
    }

    
    onSubmit(e){
        e.preventDefault();
        getFriends(this.nickname,this.currentUserId.id).then((res)=>{
            console.log(res.data)
            this.nickname=''
            this.friends=[...res.data]
        }).catch((e)=>{console.log(e.response.data)})
    
    }
    getFriendsWithStatus(){
        getFriendsWithStatus(this.currentUserId.id).then((res)=>{
            this.friendsWithStatus=res.data
        }).catch((e)=>{console.log(e.response.data)})
    }

    
    




}
export default new FindFriendsStore();