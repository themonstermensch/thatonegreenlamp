import React from 'react';

import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';

import './submit.css';
 //import { useFetch } from './hooks/useFetch'

function Submit() {
    
    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="submission-area" id="submission-area">
              <div className="banner-container">
                <img className="banner-rotating-lamp" src="/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
                <img className="banner-rotating-lamp" src="/assets/the lamp transparent slow.gif" alt="a rotating low poly lamp with a green shade."/>
              </div>

              <div className="submit-title-container">
                    <h2 className="submit-title">Submit a lamp!</h2>
                  </div>

              <div className="submission-supercontainer">

                <div className="missing-poster-container">
                  <img className="missing-poster" src="/assets/lamp missing.png" alt="a missing person's poster, but instead of a person its a bankers lamp. Where contact information would be is a fake phone number and a request to join our discord server."/>
                </div>

                  
                  <div className="submission-info-container">
                    <h4 id="first-sub-info" className="submission-info">Know of a lamp we've missed? Submit it via <a className="submitlink" target="_blank" href="mailto:thatonegreenlamp@gmil.com">email here</a> or join our <a className="submitlink" target="_blank" href="https://discord.gg/3bSgxcV3YK">Discord</a> and let us know!</h4>
                    <h4 className="submission-info">Please provide:</h4>
                    <ul>
                      <li className="submission-info">The title of the work</li>
                      <li className="submission-info">Your name or handle</li>
                      <li className="submission-info">A screenshot or timestamp</li>
                      <li className="submission-info">Episode or level info (if applicable)</li>
                    </ul>
                    <h4 className="submission-info">Thank you for lampspotting!</h4>
                  </div>

              </div>

            </div>
          </div>
        </section>
        <Footer />
      </>
    )
    
  }

export default Submit
