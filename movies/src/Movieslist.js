import React from 'react'
import { Moviesprovider } from './Moviescontext'
import { useContext } from 'react';


function Movieslist() {

    const obj=useContext(Moviesprovider)

    const movieslist = obj.movies.map((movie)=>{
        return <div>
            <h1>{movie.moviename}</h1>
            <p>Directed by {movie.directorname} </p>
        </div>
    })

    return <div style={{ backgroundColor: 'green' }}>
        <h1>Movie List</h1>
        {movieslist}
    </div>



}
export default Movieslist