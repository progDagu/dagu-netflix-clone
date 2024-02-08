import { useEffect,useState } from 'react';
import './banner.scss';

import axios from '../../../axios';

import requests from '../../../Requests';

const Banner = () => {

    const [movie,setMovie] = useState([]);
    const fetchData = async () => {

const req = await axios.get(`https://api.themoviedb.org/3` + requests.fetchNetflixOrignal3).then((res) => {
    const random = Math.floor(Math.random() * res.data.results.length + 1)
    console.log(movie)
    setMovie(res.data.results[random]);
    console.log(random)
    console.log(movie)
}).catch((err) => console.log(err));



return req;

    }
    useEffect(() => {

fetchData();

    },[]);
  return (
    
        
            <header className='banner' style={{
                backgroundSize:'cover',
                background: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path })`
            }} >
                
                <div>
                    <div className="banner_container">
                        
                        <h1 className='banner_title'>{movie?.name || movie?.original_name }</h1>
                        <div className="banner_buttons">
                            <button className='banner_button'>Play</button>
                            <button className='banner_button'>My List</button>
                        </div>
                        <h1 className="banner_desc">{movie?.overview}</h1>
                    </div>
                </div>
                    <div className="banner--fadeBottom"></div>
            
            </header>
        
    
  )
}

export default Banner