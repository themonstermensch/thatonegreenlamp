import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { useParams } from "react-router";
import './about.css';
import Banner from './banner.jsx'

import {useRef, useEffect} from 'react';


function About() {
    if(self.innerHeight > self.innerWidth) {
        return (
              <>
                <Banner />
                <div className="about-title-container">
                  <h3 className="about-title">About the lamp!</h3>
                </div>


                <div className="mobile-about-info-supercontainer">

                  
                  
                  <div className="mobile-about-info-container">

                    <div className="mobile-about-image-container">
                      <img className="about-lamp-chan" src="/assets/lamp-chan-drawing-cropped.png" alt="a shojo manga style drawing featuring a lamp romantically looking directly at the viewer surrounded by roses."/>
                    </div>
                    
                    <h3 className="about-info">The lamp is a special fella who appears in many movies and TV shows, and is especially common to find in scenes that take place in offices and libraries.</h3>
                    <h3 className="about-info">Many replicas and variations of the green bankers lamp exist, but the original was the Emeralite made by H.G. McFaddin & Co.</h3>
                    <h3 className="about-info">This website was created to act as a repository for lamp images across media.</h3>
                    <h3 className="about-info">You can learn more about the lamp by visiting <a className="aboutlink" target="_blank" href="https://thebankerslamp.com">this site</a>, which is an invaluable resource for learning about the history and design of bankers lamps.</h3>
                    <h3 className="about-info">Another important resource for lampspotting can be found <a className="aboutlink" target="_blank" href="https://letterboxd.com/waspen/list/every-film-with-a-green-bankers-lamp-in-it">here</a>, created by Julia (waspen) on Letterboxd.</h3>
                  </div>
                  
                  
                
                </div>
              </>
        )
    } else {
      return (
              <>
                <Banner />
                <div className="about-title-container">
                  <h3 className="about-title">About the lamp!</h3>
                </div>


                <div className="about-info-supercontainer">
                  
                  <div className="about-info-container">
                    <h3 className="about-info">The lamp is a special fella who appears in many movies and TV shows, and is especially common to find in scenes that take place in offices and libraries.</h3>
                    <h3 className="about-info">Many replicas and variations of the green bankers lamp exist, but the original was the Emeralite made by H.G. McFaddin & Co.</h3>
                    <h3 className="about-info">This website was created to act as a repository for lamp images across media.</h3>
                    <h3 className="about-info">You can learn more about the lamp by visiting <a className="aboutlink" target="_blank" href="https://thebankerslamp.com">this site</a>, which is an invaluable resource for learning about the history and design of bankers lamps.</h3>
                    <h3 className="about-info">Another important resource for lampspotting can be found <a className="aboutlink" target="_blank" href="https://letterboxd.com/waspen/list/every-film-with-a-green-bankers-lamp-in-it">here</a>, created by Julia (waspen) on Letterboxd.</h3>
                  </div>
                  
                  <div className="about-image-container">
                    <img className="about-lamp-chan" src="/assets/lamp-chan-drawing-cropped.png" alt="a shojo manga style drawing featuring a lamp romantically looking directly at the viewer surrounded by roses."/>
                  </div>
                
                </div>
              </>
    )
  }
}

export default About
