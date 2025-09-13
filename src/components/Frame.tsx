// src/components/Frame.tsx
import React from "react";
import { Html } from "@react-three/drei";

interface FrameProps {
  position: [number, number, number];
  title: string;
  description?: string;
}

const Frame: React.FC<FrameProps> = ({ position, title, description }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1.2, 0.8, 0.05]} />
      <meshStandardMaterial color="#FFD700" />
      {description && (
        <Html position={[0, 0, 0.1]} center>
          <div className="bg-gray-900 p-2 rounded shadow-lg text-white text-sm">
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default Frame;
