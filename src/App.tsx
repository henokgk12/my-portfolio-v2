// src/App.tsx
import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";

import PC from "./components/PC";
import Desk from "./components/Desk";
import Wall from "./components/Wall";
import Ground from "./components/Ground";
import Modal from "./components/Modal";

// Main App
function App() {
  const [certModal, setCertModal] = useState<string | null>(null);
  const [resumeModal, setResumeModal] = useState(false);

  // Certificates: cert1 is PDF, others are images
  const certificates = [
    {
      pos: [-1.5, 1.75, -1.95],
      preview: "/cert1_preview.jpg", // image preview of PDF
      pdf: "/cert1.pdf",
      label: "Certificate 1",
    },
    {
      pos: [0, 1.75, -1.95],
      preview: "/cert2.jpg",
      pdf: null,
      label: "Certificate 2",
    },
    {
      pos: [1.5, 1.75, -1.95],
      preview: "/cert3.jpg",
      pdf: null,
      label: "Certificate 3",
    },
  ];

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2.5, 6], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          castShadow
          intensity={1}
          onUpdate={(self) => {
            self.intensity = 0.9 + 0.1 * Math.sin(performance.now() / 500);
          }}
        />

        {/* Camera controls */}
        <OrbitControls enablePan enableZoom maxDistance={10} minDistance={2} />

        {/* Scene */}
        <Ground />
        <Desk position={[0, 0, 0]} />
        <Wall position={[0, 1, -2]} rotation={[-0.05, 0, 0]} />

        {/* Floating Frames */}
        {certificates.map((cert, i) => (
          <FloatingFrame
            key={i}
            position={cert.pos as [number, number, number]}
            textureUrl={cert.preview}
            overlayText={cert.label}
            onClick={() => cert.pdf && setCertModal(cert.pdf)}
          />
        ))}

        {/* PC */}
        <PC position={[0, 0.01, 0]} onClick={() => setResumeModal(true)} />
      </Canvas>

      {/* Certificate Modal */}
      <Modal isOpen={!!certModal} onClose={() => setCertModal(null)}>
        {certModal && <embed src={certModal} type="application/pdf" width="100%" height="600px" />}
      </Modal>

      {/* Resume Modal */}
      <Modal isOpen={resumeModal} onClose={() => setResumeModal(false)}>
        <embed src="/resume.pdf" type="application/pdf" width="100%" height="600px" />
      </Modal>
    </>
  );
}

// FloatingFrame component: gently floats up and down
interface FloatingFrameProps {
  position: [number, number, number];
  textureUrl?: string;
  overlayText?: string;
  onClick?: () => void;
}

const FloatingFrame: React.FC<FloatingFrameProps> = ({ position, textureUrl, overlayText, onClick }) => {
  const ref = useRef<THREE.Mesh>(null);

  // Safe texture loading: fallback to orange color if missing
  let texture;
  try {
    if (textureUrl) texture = useTexture(textureUrl);
  } catch (e) {
    console.warn("Texture failed to load:", textureUrl, e);
    texture = undefined;
  }

  // Gentle floating animation
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.02;
    }
  });

  return (
    <mesh ref={ref} position={position} onClick={onClick} castShadow>
      <planeGeometry args={[1, 0.7]} />
      <meshStandardMaterial map={texture || undefined} color={texture ? undefined : "orange"} />
      {overlayText && (
        <Html distanceFactor={1.2} style={{ pointerEvents: "none" }}>
          {overlayText}
        </Html>
      )}
    </mesh>
  );
};

export default App;
