import React, { useEffect, useRef } from 'react';

function PosterLink({movie}) {
    const ref = useRef(null);
    let medium = movie.medium
    switch(movie.medium) {
        case "movie":
            medium = "movies";
            break
        case "game":
            medium = "games";
            break
        default: 
            medium = movie.medium
    }

    useEffect(() => {
        function displayInfo(id) {
            let posterID = "poster-"+id
            let poster = document.getElementById(posterID)
            poster.style.filter = "brightness(35%)";

            let containerID = "poster-container-" + id;
            let infoID = "infoCo-"+ id;
            const container = document.getElementById(containerID);
            const info = document.getElementById(infoID);
            info.style.opacity = 1.0
        };

        function unDisplayInfo(id) {
            let posterID = "poster-"+id
            let poster = document.getElementById(posterID)
            poster.style.filter = "brightness(100%)";
            let infoID = "infoCo-"+ id
            const info = document.getElementById(infoID);
            info.style.opacity = 0.0
        };

        const handleClick = event => {
            window.location.replace('/'+medium+'/'+movie.title+" ("+movie.year+")");
        };
        const handleHover = event => {
            displayInfo(movie.id)
        };
        const handleUnhover = event => {
            unDisplayInfo(movie.id)
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

    return (<div className="posterContainer">
                <img ref={ref}
                className="poster" 
                key={movie.id} 
                id={"poster-"+movie.id} 
                src={movie.src} 
                alt={movie.alt}
                      />
                <div ref={ref} className="infoContainer" id={"infoCo-"+movie.id}>
                    <p className="mediaTitle">{movie.title}</p>
                    <p className="mediaYear">{"("+movie.year+")"}</p>
                </div>
            </div>
    );
};

export default PosterLink