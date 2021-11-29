import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from '../../components/Earth/index'
import { TopSection } from '../../components/TopSection/index'
import Moon from '../../components/MoonSurface/index'
// import Header from '../../components/Header/index'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;

export default function HomePage() {
  return <CanvasContainer>
      <TopSection />
      {/* <Header /> */}
      {/* background below */}
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Moon />
  </CanvasContainer>;
}