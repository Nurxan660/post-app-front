export default function AuthHeader(){
    const userData=JSON.parse(localStorage.getItem("token"));
    if (userData&&userData.token){
        return { Authorization: 'Bearer ' + userData.token};
    
    }
    else {
        return {}
    }
    
    
    
    
    
    }