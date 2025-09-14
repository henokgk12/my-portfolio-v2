// Desk.tsx
import React from "react";

interface DeskProps {
  position?: [number, number, number];
}

const Desk: React.FC<DeskProps> = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Tabletop */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Legs */}
      <mesh position={[-1.4, 0.375, -0.7]}>
        <boxGeometry args={[0.1, 0.75, 0.1]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
      <mesh position={[1.4, 0.375, -0.7]}>
        <boxGeometry args={[0.1, 0.75, 0.1]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
      <mesh position={[-1.4, 0.375, 0.7]}>
        <boxGeometry args={[0.1, 0.75, 0.1]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
      <mesh position={[1.4, 0.375, 0.7]}>
        <boxGeometry args={[0.1, 0.75, 0.1]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
    </group>
  );
};

export default Desk;
