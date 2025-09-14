// FlowerPot.tsx
import React from "react";

interface FlowerPotProps {
  position?: [number, number, number];
}

const FlowerPot: React.FC<FlowerPotProps> = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Pot */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.5, 0.5, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Soil */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
        <meshStandardMaterial color="#3e2723" />
      </mesh>

      {/* Plant stem */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Leaves */}
      <mesh position={[0, 0.8, 0.1]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[0.2, 0.8, -0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-0.2, 0.8, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Flower */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default FlowerPot;
