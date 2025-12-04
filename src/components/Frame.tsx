import { MeshStandardMaterial, TextureLoader } from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useState, useRef } from 'react'
import { Vector3 } from 'three'

interface FrameProps {
  position: [number, number, number]
  textureUrl?: string
  onClick?: () => void
  hoverScale?: number
  overlayText?: string
}

export default function Frame({
  position,
  textureUrl,
  onClick,
  hoverScale = 1.05,
  overlayText = 'View',
}: FrameProps) {
  const texture = useLoader(TextureLoader, textureUrl || '/cert1.pdf')
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef<any>(null)
  const floatRef = useRef(0)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    // Smooth scale
    const targetScale = hovered ? hoverScale : 1
    meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)
    
    // Floating motion
    floatRef.current += 0.01
    meshRef.current.position.y = position[1] + Math.sin(floatRef.current) * 0.03
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <planeGeometry args={[1, 10]} />
      <meshStandardMaterial map={texture} />
      <Html
        distanceFactor={1.2}
        style={{
          pointerEvents: 'none',
          color: hovered ? '#ffd700' : '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {overlayText}
      </Html>
    </mesh>
  )
}
