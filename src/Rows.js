import React, { useState , useEffect} from 'react'
import axios from 'axios';
import './rows.css';



function Rows(props) {
    const imgURL="https://image.tmdb.org/t/p/original/"
    const [movie,setMovie]=useState([]);
    const [trailer,setTrailer]=useState(false);

    useEffect(() => {
      async function fetch(){
        const req=await axios.get(props.fetchlink);
       
        setMovie(req.data.results);
        return req;
      }
      fetch();
    
      
    }, [props.fetchlink])

    function handleClick(){
      setTrailer((prev)=>{
        return (!prev);
      })
    }

   
   
    
  
  
    
  return (
    <div className='row'>
        <h2 className='row_title'>{props.title}</h2>
        
          <div className='row_post'
            data-aos="fade-up"
          >
            {movie.map((item)=>(
              <img  
                className={`row_img ${props.isLargeRow && 'row_largeimg'}`}
                src={`${imgURL}${props.isLargeRow?item.poster_path:item.backdrop_path}`}
                key={item.id}
                alt={item.title}
                onClick={handleClick}
              />
            ))}
          
          
        </div>
        
        {trailer && <iframe width="560" height="315" src="https://www.youtube.com/embed/shW9i6k8cB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" ></iframe>}
            
      
      
        
    </div>
  );
}

export default Rows
