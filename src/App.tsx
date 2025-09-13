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
      <Canvas camera={{ position: [3, 3, 6], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.25, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>

        {/* Desk */}
        <Desk />
        <Ground />
<Wall position={[0, 5, -10]} rotation={[0, 0, 0]} />
<Frame position={[0, 3, -2.9]} title="My Cert" description="Certificate description" />

        {/* PC */}
        <PC position={[0, 0.8, 0]} />

        {/* Orbit Controls for camera */}
        <OrbitControls />
      
    
{/* Floor */}
<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
  <planeGeometry args={[20, 20]} />
  <meshStandardMaterial color="#4a4a4a" />
</mesh>

{/* Back Wall */}
<mesh position={[0, 2, -10]}>
  <planeGeometry args={[20, 10]} />
  <meshStandardMaterial color="#dcdcdc" /> {/* light gray wall */}
</mesh>

{/* Left Wall */}
<mesh rotation={[0, Math.PI / 2, 0]} position={[-10, 2, 0]}>
  <planeGeometry args={[20, 10]} />
  <meshStandardMaterial color="#e0e0e0" />
</mesh>

{/* Right Wall */}
<mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 2, 0]}>
  <planeGeometry args={[20, 10]} />
  <meshStandardMaterial color="#e0e0e0" />
</mesh>

{/* Desk */}
<mesh position={[0, -0.25, 0]}>
  <boxGeometry args={[3, 0.2, 1.5]} />
  <meshStandardMaterial color="#8B4513" />
</mesh>

{/* PC box */}
<mesh position={[0, 0.3, 0]}>
  <boxGeometry args={[0.5, 0.5, 0.5]} />
  <meshStandardMaterial color="#333" />
</mesh>
</Canvas>
</div>
  );
};

export default App;