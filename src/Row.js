import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';
// import youtubeSearch from 'youtube-search';  // Import the youtube-search library

const base_url = "https://image.tmdb.org/t/p/original/";

const youtubeSearchOptions = {
    maxResults: 1,
    key: 'YOUR_YOUTUBE_API_KEY',  // Replace with your YouTube Data API v3 key
    type: 'video',
};

export const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(null);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoPlay: 1,
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        };
        fetchData();
    }, [fetchUrl]);

    // const handleClick = (movie) => {
    //     if (trailerUrl) {
    //         setTrailerUrl(null);
    //     } else {
    //         movieTrailer(movie?.name || "")
    //             .then((url) => {
    //                 if (url) {
    //                     const urlParam = new URLSearchParams(new URL(url).search);
    //                     const videoId = urlParam.get('v');
    //                     if (videoId) {
    //                         setTrailerUrl(videoId);
    //                     } else {
    //                         console.log('Invalid YouTube URL:', url);
    //                         // Try getting another URL
    //                         getAnotherTrailer(movie);
    //                     }
    //                 } else {
    //                     console.log('Trailer not found for:', movie?.name);
    //                     // Try getting another URL
    //                     getAnotherTrailer(movie);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log('Error:', error);
    //                 // Try getting another URL
    //                 getAnotherTrailer(movie);
    //             });
    //     }
    // };

    // const getAnotherTrailer = async (movie) => {
    //     try {
    //         const results = await youtubeSearch(`${movie?.name} trailer`, youtubeSearchOptions);
    //         if (results && results.results && results.results.length > 0) {
    //             const videoId = results.results[0].id;
    //             setTrailerUrl(videoId);
    //         } else {
    //             console.log('No trailer found for:', movie?.name);
    //         }
    //     } catch (error) {
    //         console.error('Error getting another trailer:', error);
    //     }
    // };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className={`row__posters `}>
                {movies.map((movie) => (
                    <img
                        // onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt='a' className={`row__poster ${isLargeRow && " row__posterLarge "}`} key={movie.id} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};
export default Row;
