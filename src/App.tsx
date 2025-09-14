// src/App.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import Desk from "./components/Desk";
import PC from "./components/PC";
import Frame from "./components/Frame";
import FlowerPot from "./components/FlowerPot";
// Ground component with wood texture
const Ground: React.FC = () => {
  const woodTexture = useTexture("/textures/wood.jpg");
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={woodTexture} />
    </mesh>
  );
};

// Wall component with concrete texture
interface WallProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}
const Wall: React.FC<WallProps> = ({ position, rotation = [0, 0, 0] }) => {
  const colorMap = useTexture("/textures/concrete/concrete.jpg");
  const dispMap = useTexture("/textures/concrete/disp.png");

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[20, 10, 100, 100]} />
      <meshStandardMaterial map={colorMap} displacementMap={dispMap} displacementScale={0.1} />
    </mesh>
  );
};

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Ground */}
        <Ground />

        {/* Walls */}
        <Wall position={[0, 5, -10]} /> {/* Back wall */}
        <Wall position={[10, 5, 0]} rotation={[0, -Math.PI / 2, 0]} /> {/* Right wall */}
        <Wall position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]} /> {/* Left wall */}
        <Wall position={[0, 5, 10]} rotation={[0, Math.PI, 0]} /> {/* Front wall */}

        {/* Desk and PC */}
        <Desk position={[0, 0, 0]} />
        <PC position={[0, 0.8, 0]} />
        <FlowerPot position={[1, 0.85, 0]} /> {/* On desk right side */}
<Frame position={[0, 3, -9.9]} title="Certificate" /> {/* On back wall */}
<Frame position={[3, 3, -9.9]} title="Award" />

        {/* Frame / Certificates */}
        <Frame
          position={[0, 3, -2.9]}
          title="My Certificate"
          
        />

        {/* Camera controls */}
        <OrbitControls
          maxDistance={15} // prevent zooming out past room
          minDistance={2}  // prevent zooming inside desk
          enablePan={true}
        />
      </Canvas>
    </div>
  );
};

export default App;
