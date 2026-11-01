 import React from 'react';
 import "./headerstyles.css";


   function Header() {
    if(self.innerHeight > self.innerWidth) {
        console.log('header verticle')
        return (
            <div className="mobile-header">
                <div className="mobile-header-decor">
                    <img className="low-poly-rotating-lamp" src='/assets/the lamp transparent slow.gif' alt="a rotating low poly lamp with a green shade."/>
                    <a className="mobile-headerlink" href="/about">About the lamp</a>
                </div>
                <div className="mobile-titleholder">
                    <a href="/" className="mobile-title">The Lamp</a>
                </div>
                <div className="mobile-header-decor">
                    <img className="low-poly-rotating-lamp" src='/assets/the lamp transparent slow.gif'  alt="a rotating low poly lamp with a green shade."/>
                    <a className="mobile-headerlink" href="/aboutus">About us</a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="header">
                <div className="header-decor">
                    <img className="low-poly-rotating-lamp" src='/assets/the lamp transparent slow.gif' alt="a rotating low poly lamp with a green shade."/>
                    <a className="headerlink" href="/about">About the lamp</a>
                </div>
                <div className="titleholder">
                    <a href="/" className="title">The Lamp</a>
                </div>
                <div className="header-decor">
                    <img className="low-poly-rotating-lamp" src='/assets/the lamp transparent slow.gif'  alt="a rotating low poly lamp with a green shade."/>
                    <a className="headerlink" href="/aboutus">About us</a>
                </div>
            </div>
        ); 
    }  
   }


   export default Header;