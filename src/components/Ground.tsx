
import React from "react";

const Ground: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#dcdcdc" /> {/* Light gray floor */}
    </mesh>
  );
};

export default Ground;
