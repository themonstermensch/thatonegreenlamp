import Banner from './banner.jsx';

import './submit.css';
 //import { useFetch } from './hooks/useFetch'

function Submit() {
    if(self.innerHeight > self.innerWidth) {
      return (
        <>
          <Banner />

          <div className="mobile-submit-title-container">
            <h2 className="mobile-submit-title">Submit a lamp!</h2>
          </div>

          <div className="mobile-submission-supercontainer">
                          
            <div className="mobile-missing-poster-container">
              <img className="mobile-missing-poster" src="/assets/lamp missing.png" alt="a missing person's poster, but instead of a person its a bankers lamp. Where contact information would be is a fake phone number and a request to join our discord server."/>
            </div>
            <h4 id="first-sub-info" className="mobile-submission-info">Know of a lamp we've missed? Submit it via <a className="submitlink" target="_blank" href="mailto:thatonegreenlamp@gmil.com">email here</a> or join our <a className="submitlink" target="_blank" href="https://discord.gg/3bSgxcV3YK">Discord</a> and let us know!</h4>
            <h4 className="mobile-submission-info">Please provide:</h4>
            <ul>
              <li className="mobile-submission-info-list">The title of the work</li>
              <li className="mobile-submission-info-list">Your name or handle</li>
              <li className="mobile-submission-info-list">A screenshot or timestamp</li>
              <li className="mobile-submission-info-list">Episode or level info (if applicable)</li>
            </ul>
            <h4 className="mobile-submission-info">Thank you for lampspotting!</h4>
          
          </div>


        </>
      )
    } else {
      return (
        <>
          <Banner />
          <div className="submit-title-container">
              <h2 className="submit-title">Submit a lamp!</h2>
          </div>

          <div className="submission-supercontainer">

            <div className="missing-poster-container">
              <img className="missing-poster" src="/assets/lamp missing.png" alt="a missing person's poster, but instead of a person its a bankers lamp. Where contact information would be is a fake phone number and a request to join our discord server."/>
            </div>

              
              <div className="submission-info-container">
                <h4 id="first-sub-info" className="submission-info">Know of a lamp we've missed? Submit it via <a className="submitlink" target="_blank" href="mailto:thatonegreenlamp@gmil.com">email here</a> or join our <a className="submitlink" target="_blank" href="https://discord.gg/3bSgxcV3YK">Discord</a> and let us know!</h4>
                <h4 className="submission-info">Please provide:</h4>
                <ul>
                  <li className="submission-info">The title of the work</li>
                  <li className="submission-info">Your name or handle</li>
                  <li className="submission-info">A screenshot or timestamp</li>
                  <li className="submission-info">Episode or level info (if applicable)</li>
                </ul>
                <h4 className="submission-info">Thank you for lampspotting!</h4>
              </div>

          </div>

        </>
      )
    }
  }

export default Submit
