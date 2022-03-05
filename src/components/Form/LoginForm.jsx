import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../../service/AuthService.js';
import WebSocket from '../../store/WebSocket.js';
import './Form.css'
import FindFriendsStore from '../../store/FindFriendsStore.js';
import PostStore from '../../store/PostStore.js';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePas = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
    login(email, password)
    .then((res) => {
        console.log(res.id)
        
        navigate('/messages');
        window.location.reload();
        
            })      
    }
  return (
    <div className="log">
    <div className="container">
        <div className="header">Login</div>

        <form onSubmit={onSubmit} >
            <div className="form">
                
                <div className='form-group'>
                    <label for="nickname">Email</label>
                    <input className="formInput"  type="text" name="email" value={email} onChange={onChangeEmail} placeholder="username"></input>
                </div>
                <div className='form-group'>
                    <label for="password">Password</label>
                    <input className="formInput"  type="password" name="password" value={password} onChange={onChangePas}  placeholder="password"></input>
                </div>
            </div>

            <div className='footer'>
                <button type="submit" className='btn'>Login</button>
            </div>
        </form>

    </div>

</div>
  )
}

export default LoginForm