import React, { useEffect, useRef } from 'react';

 //import { useFetch } from './hooks/useFetch'

function Ultracontainer() {
    if(self.innerHeight > self.innerWidth) {
      console.log("vertical")
    } else {
      console.log("normal")
    }
    return (<></>)
  }

export default Ultracontainer
