import React, { useState } from "react";
import { Html } from "@react-three/drei";

interface PCProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

const PC: React.FC<PCProps> = ({ position = [0, 0.8, 0], scale = [0.5, 0.5, 0.5] }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <mesh position={position} scale={scale} onClick={() => setClicked(!clicked)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clicked ? "limegreen" : "gray"} />
      {clicked && (
        <Html position={[0, 1.2, 0]} center>
          <div className="bg-gray-800 p-2 rounded shadow-lg text-white">
            PC Clicked! This will show your projects.
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default PC;
