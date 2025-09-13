// src/components/Wall.tsx
import React from "react";
import { useTexture } from "@react-three/drei";

interface WallProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

const Wall: React.FC<WallProps> = ({ position, rotation = [0, 0, 0] }) => {
  const colorMap = useTexture("/textures/concrete/basecolor.jpg");
  const dispMap = useTexture("/textures/concrete/disp.png");

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[20, 10, 100, 100]} /> 
      <meshStandardMaterial
        map={colorMap}
        displacementMap={dispMap}
        displacementScale={0.1}
      />
    </mesh>
  );
};

export default Wall;
