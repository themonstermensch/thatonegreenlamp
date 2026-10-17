import React, { useEffect, useRef } from 'react';

 //import { useFetch } from './hooks/useFetch'

function Certification({lampNum, medium}) {
    if(lampNum < 10) {
      return (<> </>)
    }
    if(medium == "movie") {
      return (<img className="certification" src="/src/assets/certified movie.png" alt="a pink sticker with a green bankers lamp which reads 'certified lamp movie'"/>)
    } else if(medium == "tv") {
          return (<img className="certification" src="/src/assets/certified show.png" alt="a pink sticker with a green bankers lamp which reads 'certified lamp show'"/>)
    } else if(medium == "game") {
          return (<img className="certification" src="/src/assets/certified game.png" alt="a pink sticker with a green bankers lamp which reads 'certified lamp game'"/>)
    }
    return (
      <>
        

      </>
    );
  }

export default Certification
