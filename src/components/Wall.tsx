// src/components/Wall.tsx
import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface WallProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
}

const Wall: React.FC<WallProps> = ({
  position,
  rotation = [0, 0, 0],
  width = 20,
  height = 10,
}) => {
  const colorMap = useTexture("/textures/concrete_tile_facade_diff_4k.jpg");
  const displacementMap = useTexture("/textures/concrete_tile_facade_disp_4k.png");

  // Repeat texture for larger wall
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(2, 2);

  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
  displacementMap.repeat.set(2, 2);

  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={[width, height, 100, 100]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        displacementScale={0.1}
      />
    </mesh>
  );
};

export default Wall;
