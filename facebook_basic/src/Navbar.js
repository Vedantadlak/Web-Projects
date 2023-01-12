import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {

    
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem('loggedin')
        navigate('/')
        window.location.reload(true)
    }

    function login(){

        var users = JSON.parse(localStorage.getItem('users') )

        var i=0;
        for(var user of users){

            if(user.username==username && user.password==password){
            i++;
            }
        }
        if(i==1){
            alert('Login is Successfull');
            localStorage.setItem('loggedin','loggedin')
            navigate("/dashboard")
            window.location.reload(true)
            
        }
        else{
            alert('Invalid Login!!')
        }

    }

    return <div>
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>Facebook</h1>
            </div>

            <div className='col-md-6'>
               
               {
                (()=>{
                    if(localStorage.getItem('loggedin')){
                        return <button onClick={logout}>LOGOUT</button>
                    }
                    else{
                        return <div>
                            < input type="text" placeholder='Username' value={username} onChange={(e) => { setusername(e.target.value) }} />
                            < input type="text" placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            <button onClick={login}>LOGIN</button>
                            </div>
                    }

                })()
               }
            </div>

        </div>

    </div>
}

export default Navbar