import React, { useEffect, useRef } from 'react';

let modalLamp = '';

//import { useFetch } from './hooks/useFetch'

function LampLink({lamp, mediaLamps}) {

    const ref = useRef(null);
    
    useEffect(() => {

        function displayInfo(id) {
            let imageID = "sngimg-"+id;
            let lampImage = document.getElementById(imageID);
            lampImage.style.filter = "brightness(50%)";
            let infoID = "infoCo-"+ id;
            const info = document.getElementById(infoID);
            info.style.opacity = 1.0;
        };

        function unDisplayInfo(id) {
            let imageID = "sngimg-"+id;
            let lampImage = document.getElementById(imageID);
            lampImage.style.filter = "brightness(100%)";
            let infoID = "infoCo-"+ id;
            const info = document.getElementById(infoID);
            info.style.opacity = 0.0;
        };

        function openModal(modalLamp){
            var modal = document.getElementById("myModal");
            let imageID = "sngimg-"+modalLamp.id;
            // Get the image and insert it inside the modal
            var img = document.getElementById(imageID);
            //console.log(img);
            var modalImg = document.getElementById("img01");
            var captionContainer = document.getElementById("caption-container");
            captionContainer.innerHTML = "" 
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            if(modalLamp.medium == "tv") {
                let season = document.createElement("h3")
                season.innerText = "Season "+ modalLamp.season + " Episode " + modalLamp.episode
                season.className = "lamp-info-season"
                let epiTitle = document.createElement("h3")
                epiTitle.innerText = modalLamp.episodeTitle
                epiTitle.className = "lamp-info-epititle"

                captionContainer.appendChild(season);
                captionContainer.appendChild(epiTitle);
            } else if (modalLamp.medium == "game") {
                let level = document.createElement("h3");
                level.innerText = modalLamp.level;
                level.className = "lamp-info-level";
                captionContainer.appendChild(level);

            }
            let submission = document.createElement("h3")
            submission.className = "lamp-submitted-by"
            submission.innerText = "Submitted by "+ modalLamp.submittedBy;
            captionContainer.appendChild(submission);

            //document.getElementById("zoomCheck").checked = false;
            
            // Get the <span> element that closes the modal
            var span = document.getElementById("close");

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() { 
                modal.style.display = "none";
                captionContainer.innerHTML = "";
            }


            // Arrows to move through images
            var right = document.getElementById("right");
            var left = document.getElementById("left");
            if(mediaLamps.length == 1) {
                right.remove();
                left.remove();
            }
            right.onclick = function() {
                let newLamp = "";
                for(let x = 0; x < mediaLamps.length; x++) {
                    if (modalLamp.id == mediaLamps[x].id) {
                        if(x == mediaLamps.length-1) { 
                            newLamp = mediaLamps[0];
                        } else {
                            newLamp = mediaLamps[x+1]
                        }
                    }
                }
                modalLamp = newLamp;
                openModal(modalLamp)
            }

            
            left.onclick = function() {
                let newLamp = "";
                for(let x = 0; x < mediaLamps.length; x++) {
                    if (modalLamp.id == mediaLamps[x].id) {
                        if(x == 0) { 
                            newLamp = mediaLamps[mediaLamps.length-1];
                        } else {
                            newLamp = mediaLamps[x-1]
                        }
                    }
                }
                modalLamp = newLamp;
                openModal(modalLamp)
            }
            

            
        }
        
        const handleClick = event => {
            //window.open(lamp.src)
            console.log("all lamps")
            console.log(mediaLamps)
            modalLamp = lamp
            openModal(modalLamp)
        };

        const handleHover = event => {
            displayInfo(lamp.id);
        };
        const handleUnhover = event => {
            unDisplayInfo(lamp.id);
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
                    id={"sngimg-"+lamp.id} 
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
                    id={"sngimg-"+lamp.id} 
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
                <a href={"#popup-"+lamp.id}>
                    <img ref={ref}
                        id={"sngimg-"+lamp.id} 
                        key={lamp.id} 
                        className="lamp-image" 
                        src={lamp.src} 
                        alt={lamp.alt}/>
                </a>
                <div ref={ref} className="lamp-info-container" id={"infoCo-"+lamp.id}>
                    <p className="lamp-submitted-by">{"Submitted by "+lamp.submittedBy}</p>
                </div>
            </div>
            );
    }
    
  };

export default LampLink
