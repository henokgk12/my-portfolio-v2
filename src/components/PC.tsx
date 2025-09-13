// src/components/PC.tsx
import React, { useState } from "react";
import { Html } from "@react-three/drei";

interface PCProps {
  position?: [number, number, number];
}

const PC: React.FC<PCProps> = ({ position = [0, 0.3, 0] }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <mesh
      position={position}
      onClick={() => setClicked(!clicked)}
      scale={[0.5, 0.5, 0.5]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clicked ? "limegreen" : "gray"} />
      {clicked && (
        <Html position={[0, 1.2, 0]} center>
          <div className="bg-gray-800 p-2 rounded shadow-lg text-white">
            PC Clicked! Projects will show here.
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default PC;
