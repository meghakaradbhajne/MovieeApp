import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'
import axios  from 'axios';
const Navbar = () => {
  
 
  return (
    <div>
         

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <NavLink to="/"><img src="https://www.logo.wine/a/logo/IMDb/IMDb-Logo.wine.svg" className='logo'alt="image"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink to='/movies/popular'> <li className="nav-item nav-link">
         Popular
        </li>
      </NavLink>
      <NavLink to='/movies/top_rated'> <li className="nav-item nav-link">
         Top Rated
        </li>
      </NavLink>
      
      <NavLink to='/movies/upcoming'> <li className="nav-item nav-link">
         Upcoming
        </li>
      </NavLink>

     
      </ul>
      
      <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
         <button className="btn btn-outline-success" type="submit" >Search</button> 
      
        
      </form>
    
    </div>
  </div>
  
</nav>


    </div>
      
  )
}

export default Navbar