import {games} from './gameArray.js' 
import './movies.css'
import PosterLink from './posterLink.jsx'

import {useRef, useEffect} from 'react';

function Games() {
    if(self.innerHeight > self.innerWidth) {
        return(
            <div className="poster-area">
              <div className="poster-banner-container">
                <div className="poster-banner">
                  <img className="poster-bannerImage" src="assets/moviebanner.png"/>
                  <h3 className="poster-banner-title">Games</h3>
                </div>
              </div>
              <div className="mobile-poster-wrap">
                {games.map(game => {
                  return(
                      <PosterLink 
                        movie={game}
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
                  <img className="poster-bannerImage" src="assets/gamebanner.png"/>
                  <h3 className="poster-banner-title">Games</h3>
                </div>
              </div>
              <div className="poster-wrap">
                {games.map(game => {
                  return(
                      <PosterLink
                        movie={game}
                      />
                  )
                })}

              </div>
            </div>
      </>
    )
  }
}

export default Games
