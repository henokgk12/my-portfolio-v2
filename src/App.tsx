// src/App.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Desk from "./components/Desk";
import PC from "./components/PC";
import Ground from "./components/Ground";
import Wall from "./components/Wall";
import Frame from "./components/Frame";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <hemisphereLight args={["#ffffff", "#888888", 0.5]} />

        {/* Floor and walls */}
        <Ground />
        <Wall position={[0, 5, -10]} rotation={[0, 0, 0]} />

        {/* Desk and PC */}
        <Desk position={[0, -0.5, 0]} />
        <PC position={[0, 0.3, 0]} />

        {/* Frame */}
        <Frame
          position={[0, 3, -2.9]}
          title="My Certificate"
          description="This is one of my certificates."
        />

        {/* Camera controls */}
        <OrbitControls makeDefault />

        {/* Optional extra walls/floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>

        <mesh position={[0, 2, -10]}>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#dcdcdc" />
        </mesh>

        <mesh rotation={[0, Math.PI / 2, 0]} position={[-10, 2, 0]}>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>

        <mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 2, 0]}>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
