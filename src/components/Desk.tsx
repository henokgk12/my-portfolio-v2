import React from "react";

export default function Desk() {
  return (
    <group>
      {/* Table top */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial color="#8B4513" /> {/* dark wood */}
      </mesh>

      {/* Legs */}
      <mesh position={[-1.8, -2, -0.8]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#5A2E0C" />
      </mesh>
      <mesh position={[1.8, -2, -0.8]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#5A2E0C" />
      </mesh>
      <mesh position={[-1.8, -2, 0.8]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#5A2E0C" />
      </mesh>
      <mesh position={[1.8, -2, 0.8]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#5A2E0C" />
      </mesh>
    </group>
  );
}
