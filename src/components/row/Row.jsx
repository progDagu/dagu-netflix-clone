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
let [replacedString,setReplacedString] = useState(null);

const handleMovieClick = (movie) => {
   console.log('separated' + separatedString);
   console.log('replaced' + replacedString);
   
        if(movie.title?.includes(' ')) {
          

            
let separated_string = []
let replaced_string = ''
console.log('REPLACED_STRING', replaced_string);

separated_string = movie.title.split(' ');
replaced_string = separated_string.join('-');
console.log('REPLACED_STRING', replaced_string);

            movieTrailer(replaced_string).then((response) => {
              
                const urlParams = new URL(response).search;
              
            setTrailerUrl(urlParams.slice(3,urlParams.length))
            
            

            }).catch((error) => console.log(error));


        }else if(movie.name?.includes(' ')) {

            let separated_string = []
let replaced_string = ''

separated_string = movie.name.split(' ');
replaced_string = separated_string.join('-');
           
            console.log('REPLACED_STRING', replaced_string);
            movieTrailer(replaced_string).then((response) => {
            
                const urlParams = new URL(response).search;
              
                setTrailerUrl(urlParams.slice(3,urlParams.length))
                
                
   
            }).catch((error) => console.log(error,movie));

            
// const urlParams = new URLSearchParams(new URL(url).search);
// setTrailerUrl(urlParams.get('v'));
// console.log(urlParams);

}else if (movie.name  || movie.title) {
        let moveName = '';
        moveName = movie.name

        console.log('i do not know, bra!');
        movieTrailer(movie.name || movie.title ).then((response) => {
            console.log(response);
            console.log(movie);
            const urlParams = new URL(response).search;
              
            setTrailerUrl(urlParams.slice(3,urlParams.length))
            
            
        }).catch((error) => console.log(error));
       
    }
}
const getMovieTrailer = async (movieName,movieId) => {
    console.log(movieName)
const response = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`);
const data = await response.data;
console.log(data);
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
<p onClick={() => console.log(document.querySelector('.row_poster'))}></p>,
]

        ) 
    })
}
        </div>
       </div>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} style={{marginTop:'10px'}} />}

    </div>
  )
} 

export default Row