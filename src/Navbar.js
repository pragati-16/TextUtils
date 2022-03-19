import React from 'react';
import PropTypes from 'prop-types';    // for including props include header file of react
 import { Link } from 'react-router-dom';
 import './App.css'; 
 

function Navbar(props) {
  /* const [btnText,setBtnText]=useState('Enable Dark Mode');

  const [myStyle,setMyStyle]=useState({
     color:'black',
     bodyBackground:'white'
  })

    const mode=()=> {
      console.log("Called");
   if(myStyle.color==='white') {
     setMyStyle({
      color:'black',
      backgroundColor:'white'
     })
     setBtnText('Enable Dark Mode');
   }
   else {
    setMyStyle({
      color:'white',
      backgroundColor:'black'
     })
     setBtnText('Enable Light Mode');
   }
   }   */  
    return (
        <>
 {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  */} 
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    {/*  <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>  */} 
    <button type="button" className="btn btn-light" id="btn1" onClick={props.onToggle}>Enable Light Mode</button>
    </div>
  </div>
</nav>
  </> 
    );
} 

Navbar.propTypes= 
{
title:PropTypes.string   //these are default props if given number then would give an error 
}

export default Navbar;
