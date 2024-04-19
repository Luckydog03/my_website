import React, { useState } from "react";
import Router from "./Router";
import cursorJedi from "./assets/icons8-jedi-32.png";
import backGround from "./assets/tomoko-background.jpg";

export default function App() {
  // cursor is from -> https://icons8.com/icon/set/custom-cursor-star-wars/group-ui
  return (
    <div
      style={{
        cursor: `url(${cursorJedi}), auto`,
        backgroundImage: `url(${backGround})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // height: '100vh', // Full viewport height
        // width: '100vw' // Full viewport width
      }}
    >
      <Router />
    </div>
    
  ); 
}
