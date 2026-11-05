import {shows} from './tvArray.js' 
import './movies.css'
import PosterLink from './posterLink.jsx'

import {useRef, useEffect} from 'react';

function Shows() {
  if(self.innerHeight > self.innerWidth) {
        return(
            <div className="poster-area">
              <div className="poster-banner-container">
                <div className="poster-banner">
                  <img className="poster-bannerImage" src="assets/moviebanner.png"/>
                  <h3 className="poster-banner-title">Television</h3>
                </div>
              </div>
              <div className="mobile-poster-wrap">
                {shows.map(show => {
                  return(
                      <PosterLink 
                        movie={show}
                      />
                  )
                })}
              </div>
            </div>
        )
    } else {
    return (
      <>
            <div className="poster-area">
              <div className="poster-banner-container">
                <div className="poster-banner">
                  <img className="poster-bannerImage" src="assets/showbanner.png"/>
                  <h3 className="poster-banner-title">Television</h3>
                </div>
              </div>
              <div className="poster-wrap">
                {shows.map(show => {
                  return(
                      <PosterLink
                        movie={show}
                      />
                  )
                })}
              </div>
            </div>
      </>
    )
  }
}

export default Shows
