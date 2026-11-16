 import React from 'react';

   function Credit({lamp}) {
    if(lamp.submissionLink) {
      return (
          <h4 className="submittedBy">{"Submitted by " + lamp.submittedBy + " at "}<a className="submissionLink" href={lamp.submissionLink}>{lamp.submissionLinkText}</a></h4>
      )
    } return (
          <h4 className="submittedBy">{"Submitted by " + lamp.submittedBy}</h4>
      )
   }

   export default Credit;