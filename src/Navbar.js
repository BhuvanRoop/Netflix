import React, { useState,useEffect } from 'react'
import "./navbar.css"
import { Link,NavLink } from 'react-router-dom';


function Navbar() {
    const [show,handleShow]=useState(false);
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>70){
            handleShow(true);
        }else handleShow(false);
      });
    }, [])
    

  return (
   
        <div className={`nav ${show && "nav_black"}`}>
            <div className='logo_tags'>

              <Link to='/'> <img className='logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158'
                alt='Netflix'
                />
              </Link>
            <div className='tags'>
                <li>
                  <NavLink to='/'>Home</NavLink>   
                </li>
                <li>
                  <NavLink to='/shows'>TV Shows</NavLink>
                </li>
                <li>
                  <NavLink to='/movies'>Movies</NavLink>
                </li>
                <li>
                  <NavLink to='/shows'>New & Popular</NavLink>
                </li>

            </div>
            </div>
            
            <img className='avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'
            />


        </div>
       
    
  )
}

export default Navbar