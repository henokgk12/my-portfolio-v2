// Frame.tsx
import React from "react";

interface FrameProps {
  position: [number, number, number];
  title: string;
}

const Frame: React.FC<FrameProps> = ({ position, title }) => {
  return (
    <group position={position}>
      {/* Frame body */}
      <mesh>
        <boxGeometry args={[1.5, 1, 0.05]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>

      {/* Picture area */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[1.3, 0.8]} />
        <meshStandardMaterial color="#fafafa" />
      </mesh>
    </group>
  );
};

export default Frame;
