import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import {movies} from './movieArray.js' 
import './movies.css'
import PosterLink from './posterLink.jsx'

import {useRef, useEffect} from 'react';

function Movies() {
    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="poster-area">
              <div className="movie-banner-container">
                <div className="banner">
                  <img className="bannerImage" src="src/assets/moviebanner.png"/>
                  <h3 className="banner-title">Movies</h3>
                </div>
              </div>
              <div className="image-row">
                {movies.map(movie => {
                  return(
                      <PosterLink 
                        movie={movie}
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

export default Movies
