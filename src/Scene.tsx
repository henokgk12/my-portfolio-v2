// src/Scene.tsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Frame from "./components/Frame";
import PC from "./components/PC";
import Wall from "./components/Wall";
import Desk from "./components/Desk";
import Modal from "./components/Modal";

export default function Scene() {
  // Modal states
  const [certModal, setCertModal] = useState<string | null>(null);
  const [resumeModal, setResumeModal] = useState(false);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
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
        <OrbitControls enablePan={true} enableZoom={true} maxDistance={10} minDistance={2} />

        {/* Scene Objects */}
        <Wall position={[0, 1, -2]} />
        <Desk position={[0, 0, 0]} />

        {/* Certificates on wall with hover + float */}
        {[
          { pos: [-1.5, 1.5, -1.9], texture: "/cert1.png" },
          { pos: [0, 1.5, -1.9], texture: "/cert2.png" },
          { pos: [1.5, 1.5, -1.9], texture: "/cert3.png" },
        ].map((cert, i) => (
          <Frame
            key={i}
            position={cert.pos as [number, number, number]}
            textureUrl={cert.texture}
            onClick={() => setCertModal(cert.texture)}
            overlayText="View Certificate"
            hoverScale={1.05}
          />
        ))}

        {/* PC / Resume with hover + glow */}
        <PC
          position={[0, 0, 1]}
          onClick={() => setResumeModal(true)}
        />
      </Canvas>

      {/* Certificate Modal */}
      <Modal isOpen={!!certModal} onClose={() => setCertModal(null)}>
        {certModal && (
          <img src={certModal} alt="Certificate" style={{ width: "100%" }} />
        )}
      </Modal>

      {/* Resume Modal */}
      <Modal isOpen={resumeModal} onClose={() => setResumeModal(false)}>
        <embed
          src="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </Modal>
    </>
  );
}
