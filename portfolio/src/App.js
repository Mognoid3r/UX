

import { Route, Routes, useLocation } from "react-router-dom";
// import styled from "styled-components";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Suspense } from "react";
// import Earth from "./components/Earth/index";
// import { TopSection } from "./components/TopSection/index";
// import Moon from "./components/MoonSurface/index";
// import Header from "./components/Header/index";
import About from "./Pages/About/About";
import Work from "./Pages/Works/Main/Main";
import Home from "./Pages/Home/Home";
import { motion, AnimatePresence } from 'framer-motion'



export default function App() {

  const location = useLocation();

  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
      </AnimatePresence>
    </>
  );
}
