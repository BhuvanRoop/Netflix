import React, { useState , useEffect} from 'react'
import axios from 'axios';
import './rows.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import requests from './requests';

function Rows(props) {
    const imgURL="https://image.tmdb.org/t/p/original/"
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    const [recMovies,setRecMovies]=useState([]);
    const [movielist,setMovieList]=useState([]);

    const list=[]
    let final_ist=[]
    const list_map=new Map()

    useEffect(() => {
      async function fetch(){
        const req=await axios.get(props.fetchlink);
        setMovies(req.data.results);
        const req1=await axios.get(requests.fetchTrending);
        const req2=await axios.get(requests.fetchUpComing);
        const req3=await axios.get(requests.fetchTopRted);
        list.push(req1.data.results)
        list.push(req2.data.results)
        list.push(req3.data.results)
        for(let i=0;i<3;i++){
          for(let j=0;j<list[i].length;j++){
            list_map.set(list[i][j].title,list[i][j].backdrop_path)
          }
        }
        final_ist= Array.from(list_map);
        setMovieList(final_ist)
        // console.log(final_ist)
        return req;
      }
      fetch();
    
      
    }, [props.fetchlink])
  

    function handleClick(title){
      const url = "http://localhost:3000";
      if(trailerUrl){
        setTrailerUrl('');
        setRecMovies([])
      }
      else{
        movieTrailer(title)
          .then(url=>{
             const urlParams=new URLSearchParams(new URL(url).search)
             console.log(url);
            setTrailerUrl(urlParams.get('v'));
          }).catch(console.error());

          const jsonData = JSON.stringify(title);
          fetch(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: jsonData,
          })
            .then((response) => response.json())
            .then((response) => {
              setRecMovies(response.recommended_movies) 
              // console.log(response.recommended_movies)
            });
      }
    }

    const opts = {
      height: '400',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };

    
  return (
    <div className='row'>
        <h2 className='row_title'>{props.title}</h2>
          <div className='row_post'
            data-aos="fade-up">

            {movies.map((item)=>(
              <img  
                key={item.id}
                onClick={() => handleClick(item.title)}
                className={`row_img ${props.isLargeRow && 'row_largeimg'}`}
                src={`${imgURL}${props.isLargeRow?item.poster_path:item.backdrop_path}`}
                alt={item.title}
                
              />
            ))}
        </div>
        {trailerUrl &&
        <>
          <YouTube videoId={trailerUrl} opts={opts} autoplay />
          <h1 className='row_title' style={{marginTop:'20px',fontSize:'30px'}}>Similar Movies and Show</h1>
          <div className='row_post'>
            {movielist.map((item)=>(
              <div style={{display:'flex',flexDirection:"column",textAlign:'center'}}>
              <h5 style={{display:!recMovies.includes(item[0])?'none':'block',marginBottom:'10px'}}>{item[0]}</h5>
              <img  
                className='row_img'
                src={`${imgURL}${item[1]}`}
                style={{display:!recMovies.includes(item[0])?'none':'block'}}     
              /> 
              
              </div>
            ))}
          </div>
        </>
        }
      
      
        
    </div>
  );
}

export default Rows
