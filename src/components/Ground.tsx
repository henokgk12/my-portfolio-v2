// src/components/Ground.tsx
import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Ground: React.FC = () => {
  let woodTexture;
  try {
    woodTexture = useTexture("/textures/wood.jpg");
  } catch (e) {
    console.warn("Ground texture missing", e);
    woodTexture = undefined;
  }

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={woodTexture || undefined}
        color={woodTexture ? undefined : "#a0522d"} // fallback brown
      />
    </mesh>
  );
};

export default Ground;
