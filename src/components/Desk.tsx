import React from "react";

const Desk: React.FC = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-0.1, 0, 0]} scale={[4, 0.2, 2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8B4513" /> {/* Brown desk */}
    </mesh>
  );
};

export default Desk;
