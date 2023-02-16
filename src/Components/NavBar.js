import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/style.css';
import logo from '../Images/logo.png'

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="" /></NavLink>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:arshadalik26@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://wwww.facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}




export default NavBar