
import './App.css'; 
import Navbar from './Navbar';
import About from './About';
 import { useState } from 'react';
 import TextForm from './TextForm';

 import React from 'react';
 import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
 

function App() {

    const [mode,setMode]=useState('dark');

      const onToggle=()=>{
        console.log("I am called"); 
        if(mode==='light') {
          setMode('dark');
          document.getElementById("btn1").innerHTML="Enable Light Mode";
           document.getElementById("btn1").style.backgroundColor='white';
           document.getElementById("btn1").style.color='black';
          

          document.title='TextUtils-Dark Mode';
        }
        else {
          setMode('light');
          document.getElementById("btn1").innerHTML="Enable Dark Mode";
          document.getElementById("btn1").style.backgroundColor='black';
          document.getElementById("btn1").style.color='white';
         // document.body.style.backgroundColor='pink';
         document.title='TextUtils-Light Mode';
        }
      }
       
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} onToggle={onToggle} /> 
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           <Route exact path="/">
           <TextForm title="Enter The Text Below:"/> 
           </Route>
        </Switch>
        </Router>
      </> 
  );
}

export default App;