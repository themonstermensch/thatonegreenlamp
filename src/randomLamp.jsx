 import React from 'react';
 import "./randstyles.css";
 import Subinfo from "./subinfo.jsx"
 import { lamps } from "./lamplist.js"
 import CheckSpecial from "./specialLamps"

   function RandomLamp() {
    var randNum = Math.floor(Math.random() * (lamps.length));
    let chosenLamp = {};
     
    let prevNumArray = []
    /* reroll if number within storage */
    let numberStorage = 30;
    let sameMediaChecks = 15;
    let sameMedia = false;

    let previousNums = localStorage.getItem("randomNums");
    if(previousNums) {
      prevNumArray = previousNums.match(/[0-9]+/g).map(Number);
    }
    let recentLampsArray = prevNumArray.slice(-sameMediaChecks)
  

    function sameMediaCheck(currentLamp, comparisonLamp) {
        return currentLamp.title == comparisonLamp.title && currentLamp.year == comparisonLamp.year && currentLamp.medium == comparisonLamp.medium
    }

    prevNumArray.forEach((item) => item = Number(item));

    for(let check = 0; check < Math.min(sameMediaChecks, recentLampsArray.length); check++) {
      while(prevNumArray.includes(randNum)) {
        randNum = Math.floor(Math.random() * (lamps.length));
      } 
      if(sameMediaCheck(lamps[randNum], lamps[recentLampsArray[check]])) {
        randNum = Math.floor(Math.random() * (lamps.length));
        check = 0;
      }
    }

    while(prevNumArray.length >= numberStorage) {
      prevNumArray.shift()
    }

    let newNums = prevNumArray.join('-') + "-" + randNum;
    localStorage.setItem("randomNums", newNums);

    chosenLamp = lamps[randNum]
    chosenLamp = CheckSpecial(chosenLamp)

    /* One in 10,000 check to get a secret, unlisted lamp */
    // var specialCheck = Math.floor(Math.random() * (9999));
    // if(specialCheck == 0) {
    //   chosenLamp.title = "Placeholder Art";
    //   chosenLamp.author = "Raleigh Welch";
    //   chosenLamp.year = 2026;
    //   chosenLamp.src = "src/assets/placeholder_lamp.webp";
    //   chosenLamp.alt = "poorly drawn placeholder art of a green banker's lamp";
    //   chosenLamp.medium = "art"
    //   chosenLamp.submittedBy = "Rals"
    // } else if (specialCheck == 1) {
    //   chosenLamp.title = "404: Lamp Not Found";
    //   chosenLamp.author = "KatNap";
    //   chosenLamp.year = 2026;
    //   chosenLamp.src = "src/assets/lamp-painting.png";
    //   chosenLamp.alt = "a digital painting of a green bankers lamp looking left";
    //   chosenLamp.medium = "art"
    //   chosenLamp.submittedBy = "Kat"
    // } else if (specialCheck == 2) {
    //   chosenLamp.title = "Missing Lamp";
    //   chosenLamp.author = "KatNap";
    //   chosenLamp.year = 2026;
    //   chosenLamp.src = "src/assets/lampmissingillustration.png";
    //   chosenLamp.alt = "a digital sketch of a bankers lamp for a missing person's poster";
    //   chosenLamp.medium = "art"
    //   chosenLamp.submittedBy = "Kat"
    // } else {
    //   chosenLamp = lamps[randNum]
    // }
    
    return (
        <div className="photo-area" id="photo-area">
            <div className="main-photo-container" id="main-photo-container">
              <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>

              <Subinfo
                lamp={chosenLamp}
              />

            </div>
          <h4 className="submittedBy">{"Submitted by " + chosenLamp.submittedBy}</h4>
        </div>
      )
   }

   export default RandomLamp;