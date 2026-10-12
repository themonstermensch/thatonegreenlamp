 import React from 'react';
 import "./randstyles.css";
 import { lamps } from "./lamplist.js"

   function RandomLamp() {
    var randNum = Math.floor(Math.random() * (lamps.length));
    let chosenLamp = {};
     
    let prevNumArray = []
    /* reroll if number within storage */
    let numberStorage = 30;

    let previousNums = localStorage.getItem("randomNums");
    if(previousNums) {
      prevNumArray = previousNums.match(/[0-9]+/g).map(Number);
    }
    
    prevNumArray.forEach((item) => item = Number(item));
    while(prevNumArray.includes(randNum)) {
      randNum = Math.floor(Math.random() * (lamps.length))
    }
    while(prevNumArray.length >= numberStorage) {
      prevNumArray.shift()
    }
    let newNums = prevNumArray.join('-') + "-" + randNum;
    localStorage.setItem("randomNums", newNums);

    var specialCheck = Math.floor(Math.random() * (9999));
    if(specialCheck == 0) {
      chosenLamp.title = "Placeholder Art";
      chosenLamp.author = "Raleigh Welch";
      chosenLamp.year = 2026;
      chosenLamp.src = "src/assets/placeholder_lamp.webp";
      chosenLamp.alt = "poorly drawn placeholder art of a green banker's lamp";
      chosenLamp.medium = "art"
      chosenLamp.submittedBy = "Rals"
    } else if (specialCheck == 1) {
      chosenLamp.title = "404: Lamp Not Found";
      chosenLamp.author = "KatNap";
      chosenLamp.year = 2026;
      chosenLamp.src = "src/assets/lamp-painting.png";
      chosenLamp.alt = "a digital painting of a green bankers lamp looking left";
      chosenLamp.medium = "art"
      chosenLamp.submittedBy = "Kat"
    } else if (specialCheck == 2) {
      chosenLamp.title = "Missing Lamp";
      chosenLamp.author = "KatNap";
      chosenLamp.year = 2026;
      chosenLamp.src = "src/assets/lampmissingillustration.png";
      chosenLamp.alt = "a digital sketch of a bankers lamp for a missing person's poster";
      chosenLamp.medium = "art"
      chosenLamp.submittedBy = "Kat"
    } else {
      chosenLamp = lamps[randNum]
    }
    
    switch (chosenLamp.medium) {
      case "art":
        return (
        <div className="photo-area" id="photo-area">
            <div className="main-photo-container" id="main-photo-container">
              <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>

              <div className="info-supercontainer">
                <div className="info-container">
                  <h3 className="informational-title">{chosenLamp.title}</h3>
                  <h3 className="informational-year">({chosenLamp.year})</h3>
                  <h3 className="informational-year"> - {chosenLamp.author}</h3>
                </div>
              </div>
            </div>
          <h4 className="submittedBy">{"Submitted by " + chosenLamp.submittedBy}</h4>
        </div>
        )
      case "game":
        return (
          <div className="photo-area" id="photo-area">
              <div className="main-photo-container" id="main-photo-container">
                <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>

                <div className="info-supercontainer">
                  <div className="info-container">
                    <h3 className="informational-title">{chosenLamp.title}</h3>
                    <h3 className="informational-year">({chosenLamp.year})</h3>
                  </div>
                  <div className="subinfo-container">
                    <h4 className="info-level">{chosenLamp.level}</h4>
                  </div>
                </div>
              </div>
            <h4 className="submittedBy">{"Submitted by " + chosenLamp.submittedBy}</h4>
          </div>
      );
      case "movie": 
        return (
          <div className="photo-area" id="photo-area">
              <div className="main-photo-container" id="main-photo-container">
                <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>
                
                <div className="info-supercontainer">
                  <div className="info-container">
                    <h3 className="informational-title">{chosenLamp.title}</h3>
                    <h3 className="informational-year">({chosenLamp.year})</h3>
                  </div>
                </div>
              </div>
            <h4 className="submittedBy">{"Submitted by " + chosenLamp.submittedBy}</h4>
          </div>
      ); 
      case "tv":  
        return (
            <div className="photo-area" id="photo-area">
                <div className="main-photo-container" id="main-photo-container">
                  <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>
                  
                  <div className="info-supercontainer">
                    <div className="info-container">
                      <h3 className="informational-title">{chosenLamp.title}</h3>
                      <h3 className="informational-year">({chosenLamp.year})</h3>
                    </div>
                    <div className="subinfo-container">
                      <h4 className="info-season">{"Season "+chosenLamp.season+" Episode "+chosenLamp.episode}</h4>
                    </div>
                    <div className="subinfo-container">
                      <h4 className="info-epititle">{chosenLamp.episodeTitle}</h4>
                    </div>
                  </div>

                </div>
              <h4 className="submittedBy">{"Submitted by " + chosenLamp.submittedBy}</h4>
            </div>
        ); 
      case "web": 
        return (
          <div className="photo-area" id="photo-area">
              <div className="main-photo-container" id="main-photo-container">
                <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>
                
                <div className="info-supercontainer">
                  <div className="info-container">
                    <a className="informational-title" href={chosenLamp.link}>{chosenLamp.title}</a>
                  </div>
                  <div className="subinfo-container">
                    <h4 className="info-level">{chosenLamp.author}</h4>
                  </div>
                </div>

              </div>
            <h4 className="submittedBy">{"Submitted by " + chosenLamp.submittedBy}</h4>
          </div>
      ); 
      default:
        return (
            <div className="photo-area" id="photo-area">
                <div className="main-photo-container" id="main-photo-container">
                  <div className="info-supercontainer">
                  <p>There should be a lamp here, I'm sorry that there isn't. Somthing's gone wrong.</p>
                  </div>
                </div>
            </div>
        ); 
    }
   }

   export default RandomLamp;