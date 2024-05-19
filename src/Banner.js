import axios from './axios'
import React, { useEffect, useState } from 'react'
import request from './request'
import './Banner.css'

export const Banner = () => {

    const [movie , setMovie] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{

            const response = await axios.get(request.fetchNetflixOriginals)
                setMovie(response.data.results[
                    Math.floor(Math.random() * response.data.results.length )
                ]);
        }
        fetchData()

    },[])
    console.log(movie,'m');

    function truncate(str, n) {

        return str?.length > n ? str.substr(0, n - 1) + "..." : str;

    }



  return (
    <header className='banner'
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center"
            }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {movie?.title || movie.name || movie.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='banner__button' >play</button>
                  <button className='banner__button' >My List</button>

            </div>
            <h1 className='banner__overview'>
                {truncate(movie?.overview,150)}
            </h1>
        </div>

        <div className='banner--fadeBottom'/> 
        
    </header>
  )
}
