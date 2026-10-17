import React, { useEffect, useRef } from 'react';
import { lamps } from "./lamplist.js"
import { useParams } from "react-router";

import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';

import LampNotFound from "./lampNotFound.jsx";
import LampLink from "./LampLink.jsx";

import Certification from "./certification.jsx";

import "./lampMedia.css"
 //import { useFetch } from './hooks/useFetch'
let right = ">"
let left = "<"

function LampMedia() {
    const media = useParams();
    let lampMedia = ""
    if(media.movie){
      lampMedia = media.movie
    } else if(media.show){
      lampMedia = media.show
    } else if(media.game) {
      lampMedia = media.game
    } else if(media.art) {
      lampMedia = media.art
    } else if(media.webContent) {
      lampMedia = media.webContent
    }
    
    if(!lampMedia.match(/^.+(?=\()/i) || !lampMedia.match(/\d{4}(?=\))/)) {
      return (<LampNotFound />)
    }

    //regex to get movie title and year
    let mediaTitle = lampMedia.match(/^.+(?=\()/i)[0].trim(); 
    let mediaYear = lampMedia.match(/\d{4}(?=\))/)[0];

    let filteredLamps = lamps.filter(lamp => {
      return lamp.title.toLowerCase() == mediaTitle.toLowerCase()})

    if(filteredLamps.length == 0) {
      return (<LampNotFound />)
    } else if (filteredLamps.length == 1) {
      console.log("There's only one lamp here.")
    }

    //const { data: posters, isLoading, error } = useFetch('http://localhost:3000/posters');
    // <img key={lamp.id} className="lamp-image" src={lamp.src} alt={lamp.alt}/>
    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <Certification 
              lampNum={filteredLamps.length}
              medium={filteredLamps[0].medium}
              />
            <div className="photo-area" id="photo-area">
              <div className="media-info-container">
                <h3 className="lamp-media-informational-title">{mediaTitle}</h3>
                <h3 className="lamp-media-informational-year">({mediaYear})</h3>
              </div>
              <div className="lamp-media-wrapper">
                {filteredLamps.map(lamp => {
                  return (
                      <LampLink
                        lamp={lamp}
                        mediaLamps={filteredLamps}
                      />
                )
                })}
              </div>
            </div>
          </div>
        </section>
        <Footer />

        <div id="myModal" className="modal">
          <span className="close" id="close">&times;</span>
          <div className="modal-image-container">

            <div id="left" className="arrow">&lt;</div>
            
            
            {/* <label forHTML="zoomCheck">
              <input type="checkbox" id="zoomCheck"/> */}
              <img className="modal-content" id="img01"/>
            {/* </label> */}
            
            <div id="right" className="arrow">&gt;</div>
          </div>
          <div id="caption-container" className="caption-container"></div>
        </div>


      </>
    );
  }

export default LampMedia
