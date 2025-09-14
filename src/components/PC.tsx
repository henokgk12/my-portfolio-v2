// PC.tsx
import React from "react";

interface PCProps {
  position?: [number, number, number];
}

const PC: React.FC<PCProps> = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Monitor */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[1.2, 0.7, 0.05]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Monitor stand */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* CPU Tower */}
      <mesh position={[-1, 0.5, 0]}>
        <boxGeometry args={[0.4, 1, 0.6]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0.8, 0.5]}>
        <boxGeometry args={[1, 0.05, 0.3]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>

      {/* Mouse */}
      <mesh position={[0.7, 0.82, 0.5]}>
        <boxGeometry args={[0.15, 0.05, 0.25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
};

export default PC;
