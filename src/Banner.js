import requests from "./requests";
import "./banner.css"
import axios from "axios";
import React, { useEffect, useState } from 'react'


function Banner() {
    const [banner,setBanner]=useState([]);

    useEffect(()=>{
        async function fetchData(ban){
            const req=await axios.get(requests.fetchTrending);
            setBanner(req.data.results[Math.floor(Math.random()*req.data.results.length)]);
            return req;
        }
        fetchData();

    },[]);
    function dots(str,n){
        if(str?.length>n){
            str=str.substr(0,n-1)+"..."
        }
        return str;
    }
  return (
    <header className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`
    }}
    >
        <div className="banner_contents">
            <h1 className="banner.title">{banner.title}</h1>
            <p className="banner_desc">{banner.overview}
            {dots(banner.overview,5)}</p>
            <div className="banner_fade">

            </div>


        </div>

    </header>

  )
}

export default Banner