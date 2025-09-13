// src/components/Ground.tsx
import React from "react";
import { useTexture } from "@react-three/drei";

const Ground: React.FC = () => {
  const texture = useTexture("/textures/wood/wood_floor_diff_4k.jpg");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Ground;
