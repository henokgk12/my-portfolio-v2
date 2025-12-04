// src/components/Desk.tsx
import React from "react";
import { useTexture } from "@react-three/drei";

interface DeskProps {
  position?: [number, number, number];
}

const Desk: React.FC<DeskProps> = ({ position = [0, 0, 0] }) => {
  // Load desk top texture safely
  let deskTopTexture;
  try {
    deskTopTexture = useTexture("/textures/desk_wood.jpg");
  } catch (e) {
    console.warn("Desk texture missing", e);
    deskTopTexture = undefined;
  }

  // Legs positions as proper tuples for TS
  const legs: [number, number, number][] = [
    [-1.4, 0, -0.7],
    [1.4, 0, -0.7],
    [-1.4, 0, 0.7],
    [1.4, 0, 0.7],
  ];

  return (
    <group position={[0,-1.1,1]}>
      {/* Table top */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[3, 0.1, 2]} />
        <meshStandardMaterial
          map={deskTopTexture || undefined}
          color={deskTopTexture ? undefined : "#8B4513"} // fallback brown
        />
      </mesh>

      {/* Legs */}
      {legs.map((pos, i) => (
        <mesh key={i} position={[pos[0],0.375,pos[2]]}>
          <boxGeometry args={[0.1, 0.75, 0.1]} />
          <meshStandardMaterial color="#5C3317" />
        </mesh>
      ))}
    </group>
  );
};

export default Desk;
