// src/components/Wall.tsx
import React from "react";
import { useTexture } from "@react-three/drei";

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
  const colorMap = useTexture("/textures/concrete/concrete_tile_facade_diff_4k.jpg");

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Wall;
