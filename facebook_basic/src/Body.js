import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
function Body(){

    const[name,setname]= useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    
    function registeruser(event){
        event.preventDefault()
        var users =JSON.parse(localStorage.getItem('users')|| "[]")

        var newuser={
            name:name,
            username:username,
            password:password
        }
        users.push(newuser)

        localStorage.setItem('users',JSON.stringify(users))

        alert('Registration is successfull')
    }


    return <div>
       <div className='row justify-content-center'>
        <div className='col-md-6'>
        
                <img src='https://thumbs.dreamstime.com/z/facebook-related-news-headlines-background-photo-new-friends-global-communication-social-network-global-connecting-36091939.jpg' alt=''/>

        </div>
            <div className='col-md-6'>
                <h1>Register</h1>
                <form onSubmit={registeruser}>
                    <input type="text" placeholder='name' className='form-centre'
                    value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" placeholder='username' className='form-centre'
                        value={username} onChange={(e) => { setusername(e.target.value) }} />
                    <input type="text" placeholder='password' className='form-centre' 
                        value={password} onChange={(e) => { setpassword(e.target.value) }}/>
                    <input type="submit" className='btn btn-primary' value='SIGN-UP'/>
                </form>

            </div>
       </div>
    </div>
}
export default Body
