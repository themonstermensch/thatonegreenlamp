import React from 'react';

import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';

import './404styles.css';
import placeholder_lamp from './assets/lamp-painting.png'
 //import { useFetch } from './hooks/useFetch'

function LampNotFound() {
    
    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="photo-area" id="photo-area">
              <div className="fzf-container">
                <img className="fzf-image" src={placeholder_lamp} alt="A digital painting of a green bankers lamp"/>
                <div className="fzf-text-container">
                  <div className="fzf-header-container">
                    <h2 className="fzf-header">404: Lamp Not Found</h2>
                  </div>
                  <h4 className="fzf-explanation">We don't currently have a lamp matching this criteria. If you know of a lamp that we've missed, please submit it to us <a className="notfoundlink" target="_blank" href="/submit">here</a> or join our <a className="notfoundlink" target="_blank" href="https://discord.gg/3bSgxcV3YK">Discord server</a> and let us know.</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
    
  }

export default LampNotFound
