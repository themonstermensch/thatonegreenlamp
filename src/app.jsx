import './App.css';
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router";

import Header from "./header.jsx"
import NavBar from './navbar.jsx';
import Footer from "./footer.jsx"
import Ultracontainer from "./container.jsx"

import RandomLamp from './randomLamp.jsx';
import Movies from "./movies.jsx";
import Shows from "./shows.jsx";
import Games from "./games.jsx";
import LampMedia from "./lampMedia.jsx";
import Art from "./art.jsx";
import Web from "./web.jsx";

import About from "./about.jsx";
import AboutUs from "./aboutus.jsx";

import Submit from "./submit.jsx";

import LampNotFound from "./lampNotFound.jsx";

let vertical = self.innerHeight > self.innerWidth;

function App() {
    return (
      <div className='App'>
        <section id="top-section">
            <Header />
            <div className="mid-container">
              <NavBar />
              <div className="ultracontainer">
                <Routes>
                    <Route path="/" element={<RandomLamp />} />
                    <Route path="/movies/" element={<Movies />} />
                    <Route path="/movies/:movie" element={<LampMedia />} />
                    <Route path="/tv/" element={<Shows />} />
                    <Route path="/tv/:show" element={<LampMedia />} />
                    <Route path="/television/" element={<Shows />} />
                    <Route path="/television/:show" element={<LampMedia />} />
                    <Route path="/games/" element={<Games />} />
                    <Route path="/games/:game" element={<LampMedia />} />
                    <Route path="/art/" element={<Art />} />
                    <Route path="/web/" element={<Web />} />
                    <Route path="/webcontent/" element={<Web />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/submit" element={<Submit />} />
                    <Route path="*" element={<LampNotFound />} />
                </Routes>
              </div>
          </div>
        </section>
        <Footer />
      </div>
    )
}

export default App
