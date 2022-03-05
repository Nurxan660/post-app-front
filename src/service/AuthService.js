import axios from "axios";
import PostStore from "../store/PostStore";
const API_URL = "http://localhost:8080/auth/";


    const register=(firstName,lastName, email,nickname, password)=>{
    return axios.post(API_URL + "reg", { firstName,lastName, email,nickname, password})
    }

     const login=(email,password)=>{
      return  axios
            .post(API_URL + "login", { email, password })
          .then((res) => {
              if (res.data.token) {
                  localStorage.setItem("token", JSON.stringify(res.data));
                  
              }

              return res.data;
          });
    }

  
    const logOut=()=>{
     localStorage.removeItem('token');

     }
     const getUser=()=>{
        return JSON.parse(localStorage.getItem("token"))
        }


export  {
    register, login,logOut,getUser
}