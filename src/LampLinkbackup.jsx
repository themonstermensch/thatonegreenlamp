import React, { useEffect, useRef } from 'react';


//import { useFetch } from './hooks/useFetch'

function LampLink({lamp}) {

    const ref = useRef(null);
    
    useEffect(() => {

        function displayInfo(id) {
            let imageID = "sinimg-"+id
            let lampImage = document.getElementById(imageID)
            lampImage.style.filter = "brightness(50%)";
            let infoID = "infoCo-"+ id;
            const info = document.getElementById(infoID);
            info.style.opacity = 1.0
        };

        function unDisplayInfo(id) {
            let imageID = "sinimg-"+id
            let lampImage = document.getElementById(imageID)
            lampImage.style.filter = "brightness(100%)";
            let infoID = "infoCo-"+ id;
            const info = document.getElementById(infoID);
            info.style.opacity = 0.0
        };
        
        const handleClick = event => {
            console.log(lamp)
            window.open(lamp.src)
        };

        const handleHover = event => {
            displayInfo(lamp.id)
        };
        const handleUnhover = event => {
            unDisplayInfo(lamp.id)
        };

        const element = ref.current;

        element.addEventListener('click', handleClick);
        element.addEventListener('mouseover', handleHover);
        element.addEventListener('mouseout', handleUnhover);

        return () => {
        element.removeEventListener('click', handleClick);
        element.removeEventListener('mouseover', handleHover);
        element.removeEventListener('mouseout', handleUnhover);
        };

    }, []);
    switch (lamp.medium) {
        case "tv":
            return(
                <div className="single-lamp-container">
                <img ref={ref}
                    id={"sinimg-"+lamp.id} 
                    key={lamp.id} 
                    className="lamp-image" 
                    src={lamp.src} 
                    alt={lamp.alt}/>
                <div ref={ref} className="lamp-info-container" id={"infoCo-"+lamp.id}>
                    <h4 className="lamp-info-season">{"Season "+lamp.season+" Episode "+lamp.episode}</h4>
                    <h4 className="lamp-info-epititle">{lamp.episodeTitle}</h4>
                    <p className="lamp-submitted-by">{"Submitted by "+lamp.submittedBy}</p>
                </div>
            </div>
            )
        case "game":
            return(
                <div className="single-lamp-container">
                <img ref={ref}
                    id={"sinimg-"+lamp.id} 
                    key={lamp.id} 
                    className="lamp-image" 
                    src={lamp.src} 
                    alt={lamp.alt}/>
                <div ref={ref} className="lamp-info-container" id={"infoCo-"+lamp.id}>
                    <h4 className="lamp-info-level">{lamp.level}</h4>
                    <p className="lamp-submitted-by">{"Submitted by "+lamp.submittedBy}</p>
                </div>
            </div>
            )
        default: 
            return (
            <div className="single-lamp-container">
                <img ref={ref}
                    id={"sinimg-"+lamp.id} 
                    key={lamp.id} 
                    className="lamp-image" 
                    src={lamp.src} 
                    alt={lamp.alt}/>
                <div ref={ref} className="lamp-info-container" id={"infoCo-"+lamp.id}>
                    <p className="lamp-submitted-by">{"Submitted by "+lamp.submittedBy}</p>
                </div>
            </div>
            );
    }
    
  };

export default LampLink
