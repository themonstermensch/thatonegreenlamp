 import React from 'react';
 import NavLink from './navlink.jsx'
 import "./navstyles.css";

   function NavBar() {
    const navPages = [
      { link : "/", text : "Home"},
      { link : "/movies", text : "Movies"},
      { link : "/tv", text : "TV"},
      { link : "/games", text : "Games"},
      { link : "/web", text : "Web"},
      { link : "/art", text : "Art"},
      { link : "/submit", text : "Submit"}
    ]
    if(self.innerHeight > self.innerWidth) {
      return (
        <div className="mobile-navbar">
            {navPages.map(link => {
                  return (
                      <NavLink
                        navItem={link}
                      />
                )
                })}
        </div>
     )
    }
     return (
        <div className="navbar">
            {navPages.map(link => {
                  return (
                      <NavLink
                        navItem={link}
                      />
                )
                })}
        </div>
     );   
   }

   export default NavBar;