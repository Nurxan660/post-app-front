import axios from "axios";
import AuthHeader from "./AuthHeader";
const API_URL = "http://localhost:8080/";

const getPosts=(currentUserId)=>{
    return axios.get(API_URL + `get/posts?id=${currentUserId}`, { headers:AuthHeader()})
    }
    const getPostsAll=()=>{
        return axios.get(API_URL + `get/posts/all`, { headers:AuthHeader()})
        }

    const getComments=(postId)=>{
        return axios.get(API_URL + `get/comments?id=${postId}`, { headers:AuthHeader()})
        }
        const changeStatus=(postId)=>{
            return axios.get(API_URL + `comments/changeStatus?id=${postId}`, { headers:AuthHeader()})
        }

        const getPostsForAll=()=>{
            return axios.get(API_URL + `get/postsForAll`, { headers:AuthHeader()})
            }
            const getPostsForAllNotAuth=(id)=>{
                return axios.get(API_URL + `get/postsForAllNotAuth`, { headers:AuthHeader()})
                }



    export {getPosts,getComments,getPostsAll,changeStatus,getPostsForAll,getPostsForAllNotAuth}