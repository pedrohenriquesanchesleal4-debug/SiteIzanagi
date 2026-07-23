"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function FloatingShape({ position, color, speed, type }: any) {
  const ref = useRef<THREE.Mesh>(null!)
  const geo = useMemo(() => {
    if (type === "torus") return new THREE.TorusGeometry(0.6, 0.2, 16, 32)
    if (type === "octa") return new THREE.OctahedronGeometry(0.5)
    if (type === "icosa") return new THREE.IcosahedronGeometry(0.5)
    return new THREE.BoxGeometry(0.5, 0.5, 0.5)
  }, [type])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    ref.current.position.x = position[0] + Math.sin(t * 0.3) * 0.8
    ref.current.position.y = position[1] + Math.cos(t * 0.4) * 0.8
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.01
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} geometry={geo}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const ref = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const count = 200
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20
      p[i * 3 + 1] = (Math.random() - 0.5) * 20
      p[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return p
  })

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.05
    if (ref.current) {
      ref.current.rotation.y = t
      ref.current.rotation.x = t * 0.3
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function Scene() {
  const shapes = useMemo(
    () => [
      { position: [-3, 1, -2], color: "#6366f1", speed: 0.4, type: "torus" },
      { position: [3, -1.5, -3], color: "#8b5cf6", speed: 0.5, type: "octa" },
      { position: [-2.5, -2, -1], color: "#a78bfa", speed: 0.3, type: "icosa" },
      { position: [4, 2, -4], color: "#818cf8", speed: 0.6, type: "torus" },
      { position: [0, 3, -5], color: "#c084fc", speed: 0.35, type: "octa" },
    ],
    [],
  )

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#a78bfa" />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#6366f1" />
      <Particles />
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
