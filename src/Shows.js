import React, { useState , useEffect} from 'react'
import axios from 'axios';
import './shows.css';



function Shows(props) {
    const imgURL="https://image.tmdb.org/t/p/original/"
    const [show,setShow]=useState([]);
    const [trailer,setTrailer]=useState(false);

    useEffect(() => {
      async function fetch(){
        const req=await axios.get(props.fetchlink);
       
        setShow(req.data.results);
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
    <div className={props.firstRow?'firstrow':'show'}>
        <h2 className='show_title'>{props.title}</h2>
        
          <div className='show_post'>
            {show.map((item)=>(
              <img  
                className='show_img'
                src={`${imgURL}${item.backdrop_path}`}
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

export default Shows
