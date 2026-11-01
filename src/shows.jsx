import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import {shows} from './tvArray.js' 
import './movies.css'
import PosterLink from './posterLink.jsx'

import {useRef, useEffect} from 'react';

function Shows() {
    return (
      <>
            <div className="poster-area">
              <div className="movie-banner-container">
                <div className="banner">
                  <img className="bannerImage" src="assets/showbanner.png"/>
                  <h3 className="banner-title">Television</h3>
                </div>
              </div>
              <div className="image-row">
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

export default Shows
