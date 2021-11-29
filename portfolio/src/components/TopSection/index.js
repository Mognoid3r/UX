import React from "react";
import "./topHeader.css";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import PortfolioContainer from "../../PortfolioContainer/PortfolioContainer"
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export function TopSection() {
  return (
    <div className="topSectionContainer">
      <div className="headerContent">
        <h1>
          <span>UX Portfolio</span>
          <span>Lonnie P.</span>
        </h1>
        {/* <div className="logo">
        
          <span>Holistic</span>
          <span>Batman</span>
        
      </div> */}
        {/* <div className="slogan">Everything Is Kung Fu</div> */}
        <p>
          Designing Visual Experiences For <span>Web, Apps, & Video Games</span>
        </p>
        <div className="buttonContainer">
          
          <Link to="/about">
            <motion.button whileHover={{ scale: 1.1 }}
            >
              <Title text="About"></Title>
            </motion.button>
          </Link>


          <button>
            <Link to="/work">
              <Title text="Works" />
            </Link>
          </button>


        </div>
      </div>
    </div>
  );
}
