 import React from 'react';
 import "./randstyles.css";
 
 import Subinfo from "./subinfo.jsx"
 import Credit from "./credit.jsx"

 import { lamps } from "./lamplist.js"
 import CheckSpecial from "./specialLamps"

   function RandomLamp() {
    console.log("There are this many lamps:", lamps.length)
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
    
    return (
        <div className="photo-area" id="photo-area">
            <div className="main-photo-container" id="main-photo-container">
              <img className="main-photo" src={chosenLamp.src} alt={chosenLamp.alt}/>

              <Subinfo
                lamp={chosenLamp}
              />

            </div>
          <Credit
            lamp={chosenLamp}
          />
        </div>
      )
   }

   export default RandomLamp;