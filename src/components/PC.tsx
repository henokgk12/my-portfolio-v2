import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PCProps {
  position?: [number, number, number];
  onClick?: () => void;
}

const PC: React.FC<PCProps> = ({ position = [0, 0, 0], onClick }) => {
  const monitorRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (monitorRef.current) {
      const intensity = 0.1 + Math.sin(clock.getElapsedTime() * 2) * 0.05; // subtle pulse
      (monitorRef.current.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(intensity, intensity, intensity);
    }
  });

  return (
    <group position={position}>
      {/* Monitor */}
      <mesh ref={monitorRef} position={[0, 1.2, 0]} onClick={onClick} castShadow>
        <boxGeometry args={[1.2, 0.7, 0.05]} />
        <meshStandardMaterial color="black" emissive="white" emissiveIntensity={0.1} />
      </mesh>

      {/* Monitor stand */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* CPU Tower */}
      <mesh position={[-1.2, 0.85, 0]}>
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
