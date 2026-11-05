 import React from 'react';
 import "./footer.css";

   function Footer() {
      if(self.innerHeight > self.innerWidth) {
        return (
          <section id="mobile-footer">
            <a href='/aboutus' id="mobile-katandrals">© 2026 Kat and Rals</a>
          </section>
      );
      } else {
        return (
            <section id="footer">
              <a href='/aboutus' id="katandrals">© 2026 Kat and Rals</a>
            </section>
        );
      }   
   }

   export default Footer;