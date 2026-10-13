import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import {games} from './gameArray.js' 
import './movies.css'
import PosterLink from './posterLink.jsx'

import {useRef, useEffect} from 'react';

function Games() {
    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="poster-area">
              <div className="movie-banner-container">
                <div className="banner">
                  <img className="bannerImage" src="src/assets/gamebanner.png"/>
                  <h3 className="banner-title">Games</h3>
                </div>
              </div>
              <div className="image-row">
                {games.map(game => {
                  return(
                      <PosterLink
                        movie={game}
                      />
                  )
                })}

              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
}

export default Games
