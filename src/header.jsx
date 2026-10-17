 import React from 'react';
 import "./headerstyles.css";

 import headlamp from '/public/assets/the lamp transparent slow.gif' 

   function Header() {
     return (
     <div className="header">
        <div className="header-decor">
            <img className="low-poly-rotating-lamp" src={headlamp} alt="a rotating low poly lamp with a green shade."/>
            <a className="headerlink" href="/about">About the lamp</a>
        </div>
        <div className="titleholder">
                <a href="/" className="title">
                    The Lamp
                </a>
            </div>
        <div className="header-decor">
            <img className="low-poly-rotating-lamp" src='/public/assets/the lamp transparent slow.gif'  alt="a rotating low poly lamp with a green shade."/>
            <a className="headerlink" href="/aboutus">About us</a>
        </div>
     </div>
     );   
   }


   export default Header;