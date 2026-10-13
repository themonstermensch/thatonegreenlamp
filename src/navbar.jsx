 import React from 'react';
 import "./navstyles.css";

   function NavBar() {
     return (
        <div className="navbar">
            <a className="navlink" href="/">Home</a> 
            <a className="navlink" href="/movies">Movies</a>
            <a className="navlink" href="/tv">TV</a>
            <a className="navlink" href="/games">Games</a> 
            <a className="navlink" href="/webcontent">Web Content</a>
            <a className="navlink" href="/art">Art</a> 
            <a className="navlink" href="/books">Books?</a> 
            <a className="navlink" href="/submit">Submit</a> 
        </div>
     );   
   }

   export default NavBar;