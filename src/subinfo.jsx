 import React from 'react';
 import { lamps } from "./lamplist.js"
 import "./randstyles.css";

   function Subinfo({lamp}) {
    let year = "(" + lamp.year + ")";
    switch (lamp.medium) {
      case "art":
        return (
          <div className="info-supercontainer">
            <div className="info-container">
              <h3 className="informational-title">
                <i>{lamp.title}</i>
                &nbsp;
                <a>({lamp.year})</a>
              </h3>
            </div>
            <div className="subinfo-container">
              <h3 className="informational-author">{lamp.author}</h3>
            </div>
          </div>
        )
      case "tv":  
        return (      
          <div className="info-supercontainer">
            <div className="info-container">
              <h3 className="informational-title">
                <i>{lamp.title}</i>
                &nbsp;
                <a>({lamp.year})</a>
              </h3>
            </div>
            <div className="subinfo-container">
              <h4 className="info-season">{"Season "+lamp.season+" Episode "+lamp.episode}</h4>
              <h4 className="info-epititle">{lamp.episodeTitle}</h4>
            </div>
          </div>
        ); 
      case "web": 
        return (
          <div className="info-supercontainer">
            <div className="info-container">
              <a className="informational-title" href={lamp.link}>{lamp.title}</a>
            </div>
            <div className="subinfo-container">
              <h4 className="info-level">{lamp.author}</h4>
            </div>
          </div>
      ); 
      case "game":
        if(lamp.level) {
          return (
            <div className="info-supercontainer">
              <div className="info-container">
                <h3 className="informational-title">
                  <i>{lamp.title}</i>
                  &nbsp;
                  <a>({lamp.year})</a>
                </h3>
              </div>
              <div className="subinfo-container">
                <h4 className="info-level">{lamp.level}</h4>
              </div>
            </div>
          )
        };
      default:
        return (
          <div className="info-supercontainer">
            <div className="info-container">
              <h3 className="informational-title">
                <i>{lamp.title}</i>
                &nbsp;
                <a>({lamp.year})</a>
              </h3>
            </div>
          </div>
        ); 
    }
   }

   export default Subinfo;