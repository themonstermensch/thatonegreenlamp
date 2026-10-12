import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { useParams } from "react-router";
import './aboutus.css';

import {useRef, useEffect} from 'react';

function AboutUs() {

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
              <div className="aboutus-title-container">
                <h3 className="about-title">About us</h3>
              </div>
              <div className="about-bio-supercontainer">

    
                      <div className="bio-container">
                        
                        <div className='bio-info-container'>
                          <div className="bio-header-container" style={{alignSelf: "start"}}>
                            <h3 className="bio-name">Kat Nap</h3>
                          </div>
                          <h4 className="aboutus-info">Kat lights up whenever the lamp appears in any shape or form. She only needs a single frame of green in order to clock the lamp and points it out every single time. Having earned the title "lampspotter extraordinaire", she designed this website (and had her boyfriend build it) in order to magnanimously share the gift of the lamp with the world. </h4>
                          <h4 className="aboutus-info">Kat likes making art in her spare time and created 3D models, pixel art, and drawings of the lamp for this site.</h4>
                        </div>

                        <div className="bio-image-container">
                          <img className="bio-profile-image" src="/src/assets/Elephant_Rose.png"/>
                        </div>
                          
                      </div>


                      <div className="bio-container">

                        <div className="bio-image-container">
                          <img className="bio-profile-image" src="/src/assets/ralsprofile.png"/>
                        </div>

                        <div className='bio-info-container'>
                          <div className="bio-header-container" style={{alignSelf: "end"}}>
                            <h3 className="bio-name">Rals</h3>
                          </div>
                          <h4 className="aboutus-info">Raleigh has worked tirelessly to make his dream of his girlfriend's website a reality. The son of a paralegal, he spent most of his childhood locked in a library with a bankers lamp and a VHS copy of <i>Homeward Bound II: Lost in San Francisco</i>. This taught him an appreciation of both the bankers lamp and cinema. He forgot about the lamp for over a decade until his partner, Kat, shared her obsession with it. Now he's a professional lampspotter himself.</h4>
                          <h4 className="aboutus-info">He still has not seen <i>Homeward Bound I.</i></h4>
                        </div>
                          
                      </div>


                <a href="https://ko-fi.com/katandrals" target="_blank" className="coffee-request">Buy us a coffee!</a>
              </div>
              
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
}

export default AboutUs
