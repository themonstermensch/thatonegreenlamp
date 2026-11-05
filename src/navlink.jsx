 import React from 'react';
 import "./navstyles.css";

   function NavLink({navItem}) {
    let page = ""
    console.log(window.location.href)

    if(window.location.href.includes(".com/")) {
      console.log("site")
      page = window.location.href.substr(window.location.href.indexOf(".com/") + 5)
    } else  if (window.location.href.includes("5173/")) {
      console.log('local')
      page = window.location.href.substr(window.location.href.indexOf("5173/") + 5)
    }

    console.log(page)

    if(!page) {
      page = "home"
    } else if (page == "webcontent") {
      page = "web"
    } else if (page == "television") {
      page = "tv"
    }

    console.log("changed to:", page)

    if(navItem.text.toLowerCase() != page.toLowerCase()) {

        if(self.innerHeight > self.innerWidth) {
          return (
            <a className="mobile-navlink" href={navItem.link}>{navItem.text}</a>
        )
        }
        return (
            <a className="navlink" href={navItem.link}>{navItem.text}</a>
        );   
    }

  }

   export default NavLink;