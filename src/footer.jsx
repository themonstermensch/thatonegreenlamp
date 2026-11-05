 import React from 'react';
 import "./footer.css";

   function Footer() {
      if(self.innerHeight > self.innerWidth) {
        return (
          <section id="mobile-footer">
            <p id="mobile-katandrals">© 2026 Kat and Rals</p>
          </section>
      );
      } else {
        return (
            <section id="footer">
              <p id="katandrals">© 2026 Kat and Rals</p>
            </section>
        );
      }   
   }

   export default Footer;