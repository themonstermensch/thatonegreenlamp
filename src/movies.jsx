import {movies} from './movieArray.js' 
import './movies.css'
import PosterLink from './posterLink.jsx'

import {useRef, useEffect} from 'react';

function Movies() {
    // if(self.innerHeight > self.innerWidth) {
    //     return(
    //         <div className="poster-area">
    //           <div className="poster-banner-container">
    //             <div className="poster-banner">
    //               <img className="poster-bannerImage" src="assets/moviebanner.png"/>
    //               <h3 className="poster-banner-title">Movies</h3>
    //             </div>
    //           </div>
    //           <div className="mobile-poster-wrap">
    //             {movies.map(movie => {
    //               return(
    //                   <PosterLink 
    //                     movie={movie}
    //                   />
    //               )
    //             })}
    //           </div>
    //         </div>
    //     )
    // } else {
        return (
          <div className="poster-area">
                <div className="poster-banner-container">
                  <div className="poster-banner">
                    <img className="poster-bannerImage" src="assets/moviebanner.png"/>
                    <h3 className="poster-banner-title">Movies</h3>
                  </div>
                </div>
                <div className="poster-wrap">
                  {movies.map(movie => {
                    return(
                        <PosterLink 
                          movie={movie}
                        />
                    )
                  })}
                </div>
            </div>
        )
    // }
  

}
export default Movies
