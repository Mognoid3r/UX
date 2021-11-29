import './header.css'
import React, { useRef, useState, useEffect } from "react";

function Header() {

  return (
        <header className="header_container">
      <a href="/">
        <h1>
          <span>Holistic</span>
          <span>Batman</span>
        </h1>
        <p>
          Designing Visual Experiences For <span>Web, Apps, & Video Games</span>
        </p>
      </a>
    </header>
  );
}

export default Header;
