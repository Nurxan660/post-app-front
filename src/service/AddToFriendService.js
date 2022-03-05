import axios from "axios";
import AuthHeader from "./AuthHeader";
const API_URL = "http://localhost:8080/";

const getFriends=(nickname,currentUserId)=>{
    return axios.get(API_URL + `find?nickname=${nickname}&currentUserId=${currentUserId}`, { headers:AuthHeader()})
    }

    const getFriendsWithStatus=(recipientId)=>{
        return axios.get(API_URL + `friends/withStatus?recipientId=${recipientId}`, { headers:AuthHeader()})
        }

        const getFriendsAccepted=(senderId)=>{
            return axios.get(API_URL + `friends/get?userId=${senderId}`, { headers:AuthHeader()})
            }


  
       
   

    export {getFriends,getFriendsWithStatus,getFriendsAccepted}