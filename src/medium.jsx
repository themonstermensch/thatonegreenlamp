import Header from './header.jsx';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import { lamps } from "./lamplist.js"
import { useParams } from "react-router";

import {useRef, useEffect} from 'react';

function LampMedium() {
    const medium = useParams()
    console.log(medium)
    return (
      <>
        <section id="top-section">
          <Header />
          <div className="mid-container">
            <NavBar />
            <div className="poster-area">
              <div className="image-row">
                <div>{"The "+ medium + " goes here"}</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
}

export default LampMedium
