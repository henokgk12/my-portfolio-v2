import React from "react";

export default function PC() {
  return (
    <group position={[0, -0.8, 0.5]}>
      {/* Monitor */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[1.2, 0.7, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Monitor Stand */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.3]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Tower */}
      <mesh position={[1.5, -0.2, 0]}>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </group>
  );
}
