import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { lamps } from "./lamplist.js"
import { useParams } from "react-router";
import './art.css';

import {useRef, useEffect} from 'react';

function Art() {
    const artLamps = lamps.filter(lamp => {
      return lamp.medium == "art"})

    console.log(artLamps)

    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="art-area">
              <div className="gallery-title-container">
                <div className="gallery-title">Art Gallery</div>
              </div>
              <div className="image-row">
                <div>
                  {artLamps.map(lamp => {
                    return (
                      <div className="art-lamp-supercontainer">
                        <div className="art-lamp-container">
                          <img key={lamp.id} className="art-lamp-image" src={lamp.src} alt={lamp.alt}/>
                        </div>
                        <div className="art-info-container">
                          <h3 className="art-title">{lamp.title}</h3>
                          <h3 className="art-year">({lamp.year})</h3>
                          <h3 className="art-author"> - {lamp.author}</h3>
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

export default Art
