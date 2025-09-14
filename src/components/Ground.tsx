// src/components/Ground.tsx
import React from "react";
import { useTexture } from "@react-three/drei";

const Ground: React.FC = () => {
  const woodTexture = useTexture("/textures/wood.jpg");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={woodTexture} />
    </mesh>
  );
};

export default Ground;
