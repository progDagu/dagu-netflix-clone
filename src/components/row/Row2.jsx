import { useEffect, useState } from 'react';
import './row.scss';
import requests from '../../Requests';

import YouTube from 'react-youtube';

import axios from 'axios';
import movieTrailer from 'movie-trailer';

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movieName,setMovieName] = useState('');

    const [movies,setMovies] = useState([]);
    
    const API_KEY = `6f2286057573bd7447d6f721ab081d59`;

    const [trailerUrl,setTrailerUrl] = useState('');

    const image_base_url = `https://image.tmdb.org/r/p/original`;
    
    // const APIKEY = `6f2286057573bd7447d6f721ab081d59`;

  useEffect(() => {
   getMovies2();
  }, []);





const opts = {
    height:'390px',
    width:'100%',
    playVars: {
        autoplay:1,
    }
}
const getMovies2 = async () => {
    
    const res = await axios.get(`https://api.themoviedb.org/3${fetchUrl}

`, ).then((result) => {
    return ([console.log(result.data.results),
        setMovies(result.data.results),
        
    ])
}).catch((err) => console.log(err));
    return res;
}

const handleOnClick = () => {
console.log('hi there');
    movieTrailer(movieName).then((res) => {
        console.log('response',res);
    }).catch((err) => err);
}

let [separatedString,setSeparatedString] = useState([]);
let [replacedString,setReplacedString] = useState('');

const handleMovieClick = (movie) => {
   
   
        if(movie.title?.includes(' ')) {

            setSeparatedString(  movie.title.split(' ') );
            setReplacedString(  separatedString.join('-'));
            console.log('REPLACEDSTRING',replacedString);
            movieTrailer(`${replacedString}` || '').then((response) => {
                console.log(response);
                setTrailerUrl(response)
            }).catch((error) => console.log(error));


        }else if(movie.name?.includes(' ')) {
            setSeparatedString(  movie.name.split(' ') );
            setReplacedString(  separatedString.join('-'));
            console.log('REPLACEDSTRING',replacedString);
            movieTrailer(`${replacedString}` || '').then((response) => {
                console.log(response);
            }).catch((error) => console.log(error));

        
       
        // movieTrailer( movie.name || movie.title || '' ).then((url) => {
        //     console.log(url);
        //     getMovies(movie.id).catch((err) => console.log('err happend',err));
            
            
            
// const urlParams = new URLSearchParams(new URL(url).search);
// setTrailerUrl(urlParams.get('v'));
// console.log(urlParams);

    }else {
        console.log('i do not know, bra!');
        movieTrailer(movie.name ||movie.title || '').then((response) => {
            console.log(response);
        }).catch((error) => console.log(error));
    }
}
  return (
    <div style={{width:'100vw'}}>

<div className="row">
        <h2 className='row-title'>{title}</h2>
        <div className="posters">           
{
    movies.map((movie) => {
        return (
[<img key={movie.id} onClick={() => handleMovieClick(movie)} className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`https://image.tmdb.org/t/p/original` + (isLargeRow ? movie.poster_path : movie.backdrop_path || 'hi' )} alt={movie.original_title} />,
<p onClick={() => console.log(document.querySelector('.row_poster'))}></p>]
        ) 
    })
}

        </div>
        <input type="text" placeholder='movie_name' onChange={(e) => setMovieName(e.target.value)} />
        <button onClick={handleOnClick}>get the movie</button>
        <button onClick={handleStringing}>click here to get response</button>
       </div>
       {trailerUrl && <YouTube videoId={'XtMThy8QKqU'} opts={opts} />}

    </div>
  )
} 

export default Row