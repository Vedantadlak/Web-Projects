import React, {useState, useContext }from 'react'
import { Moviesprovider } from './Moviescontext';

function AddMovie(){

    const[moviename,setmoviename]=useState('')
    const[directorname,setdirectorname]=useState('')

    const obj=useContext(Moviesprovider)

   function add(){

    var movie={
        moviename:moviename,
        directorname:directorname
    }
      obj.addmovie(movie)
   }

   return <div>
        <h1>Add Movie</h1>
        <input type="text" placeholder='Moviename' value={moviename}
        onChange={(e)=>{setmoviename(e.target.value)}}/><br/>
        <input type="text" placeholder='Directorname' value={directorname}
           onChange={(e) => { setdirectorname(e.target.value) }}/><br/>
        
        <button onClick={add}>ADD MOVIE</button>
    </div>


}
export default AddMovie