import React from 'react';

import Banner from './banner.jsx'

import './404styles.css';
import placeholder_lamp from './assets/lamp-painting.png'
 //import { useFetch } from './hooks/useFetch'

function LampNotFound() {
    if(self.innerHeight > self.innerWidth) {
      return (
        <>
          <Banner />
          <div className="mobile-fzf-container">
            <img className="mobile-fzf-image" src={placeholder_lamp} alt="A digital painting of a green bankers lamp"/>
              <div className="mobile-fzf-header-container">
                <h2 className="mobile-fzf-header">404: Lamp Not Found</h2>
              </div>
            <h4 className="mobile-fzf-explanation">We don't currently have a lamp matching this criteria. If you know of a lamp that we've missed, please submit it to us <a className="notfoundlink" target="_blank" href="/submit">here</a> or join our <a className="notfoundlink" target="_blank" href="https://discord.gg/3bSgxcV3YK">Discord server</a> and let us know.</h4>
          </div>
          <Banner />
        </>
      )
    } else {
      return (
        <>
          <div className="fzf-container">
            <img className="fzf-image" src={placeholder_lamp} alt="A digital painting of a green bankers lamp"/>
            <div className="fzf-text-container">
              <div className="fzf-header-container">
                <h2 className="fzf-header">404: Lamp Not Found</h2>
              </div>
              <h4 className="fzf-explanation">We don't currently have a lamp matching this criteria. If you know of a lamp that we've missed, please submit it to us <a className="notfoundlink" target="_blank" href="/submit">here</a> or join our <a className="notfoundlink" target="_blank" href="https://discord.gg/3bSgxcV3YK">Discord server</a> and let us know.</h4>
            </div>
          </div>
        </>
      )
    }
  }

export default LampNotFound
