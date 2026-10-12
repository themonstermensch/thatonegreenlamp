import Header from './header.jsx';
import NavBar from './navbar.jsx';
import RandomLamp from './randomLamp.jsx';
import Footer from './footer.jsx';
import './App.css'

function Home() {

  return (
    <>
      <section id="top-section">
        <Header />
        <div className="mid-container">
          <NavBar />
          <RandomLamp />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
