import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { useParams } from "react-router";
import './about.css';

import {useRef, useEffect} from 'react';


function About() {

    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="center-area">
              <div className="banner-container">
                <img className="banner-rotating-lamp" src="/src/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/src/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/src/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/src/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/src/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
              </div>
              <div className="about-title-container">
                <h3 className="about-title">About the lamp!</h3>
              </div>
              <div className="about-info-supercontainer">
                <h4 className="about-info">The lamp is a special fella who appears in many movies and TV shows, and is especially common to find in scenes that take place in offices and libraries.</h4>
                <h4 className="about-info">Many replicas and variations of the green bankers lamp exist, but the original was the Emeralite made by H.G. McFaddin & Co.</h4>
                <h4 className="about-info">This website was created to act as a repository for lamp images across media.</h4>
                <h4 className="about-info">You can learn more about the lamp by visiting <a className="aboutlink" target="_blank" href="https://thebankerslamp.com">this site</a>, which is an invaluable resource for learning about the history and design of bankers lamps.</h4>
                <h4 className="about-info">Another important resource for lampspotting can be found <a className="aboutlink" target="_blank" href="https://letterboxd.com/waspen/list/every-film-with-a-green-bankers-lamp-in-it">here</a>, created by Julia (waspen) on Letterboxd.</h4>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
}

export default About
