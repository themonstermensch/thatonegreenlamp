import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { lamps } from "./lamplist.js"
import { useParams } from "react-router";
import './web.css';

import LampLink from "./LampLink.jsx";
import Modal from "./modal.jsx";

import {useRef, useEffect} from 'react';

function Web() {
    const webLamps = lamps.filter(lamp => {
      return lamp.medium == "web"})

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
              <div className="web-image-wrap">
                  {webLamps.map(lamp => {
                    return (
                      <div className="web-content-supercontainer">
                        <LampLink
                          lamp={lamp}
                          mediaLamps={webLamps}
                          />
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
        </section>
        <Footer />
        <Modal />
      </>
    )
}

export default Web
