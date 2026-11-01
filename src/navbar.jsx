 import React from 'react';
 import "./navstyles.css";

   function NavBar() {
    if(self.innerHeight > self.innerWidth) {
      return (
        <div className="mobile-navbar">
            <a className="mobile-navlink" href="/">Home</a> 
            <a className="mobile-navlink" href="/movies">Movies</a>
            <a className="mobile-navlink" href="/tv">TV</a>
            <a className="mobile-navlink" href="/games">Games</a> 
            <a className="mobile-navlink" href="/webcontent">Web Content</a>
            <a className="mobile-navlink" href="/art">Art</a> 
            <a className="mobile-navlink" href="/books">Books?</a> 
            <a className="mobile-navlink" href="/submit">Submit</a> 
        </div>
     )
    }
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