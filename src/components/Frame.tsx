// src/components/Frame.tsx
import React from "react";
import { Html } from "@react-three/drei";

interface FrameProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  title: string;
  description?: string; // ✅ add this
}

const Frame: React.FC<FrameProps> = ({ position, rotation = [0, 0, 0], title, description }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial color="#fff" />
      <Html position={[0, 0.6, 0]} center>
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </Html>
    </mesh>
  );
};

export default Frame;
