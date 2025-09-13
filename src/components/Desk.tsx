// src/components/Desk.tsx
import React from "react";
interface DeskProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const Desk: React.FC<DeskProps> = ({
  position = [0, 0, 0],
  rotation = [-0.1, 0, 0],
  scale = [4, 0.2, 2],
}) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
};

export default Desk;
