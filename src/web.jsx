import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { lamps } from "./lamplist.js"
import { useParams } from "react-router";
import './web.css';

import {useRef, useEffect} from 'react';

function Web() {
    const webLamps = lamps.filter(lamp => {
      return lamp.medium == "web"})

    console.log(webLamps)

    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="web-area">
              <div className="web-gallery-container">
                <div className="web-gallery-title">Web Content</div>
              </div>
              <div className="web-image-row">
                <div>
                  {webLamps.map(lamp => {
                    return (
                      <div className="web-lamp-supercontainer">
                        <div className="web-lamp-container">
                          <img key={lamp.id} className="web-lamp-image" src={lamp.src} alt={lamp.alt}/>
                        </div>
                        <div className="web-info-container">
                          <a className="web-title" href={lamp.link}>{lamp.title}</a>
                          <h3 className="web-author">{lamp.author}</h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
}

export default Web
