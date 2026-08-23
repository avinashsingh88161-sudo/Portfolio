"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({
  position,
  color,
  speed,
  distort,
  size,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3;

    // Subtle mouse follow
    const mouse = state.pointer;
    meshRef.current.position.x =
      position[0] + mouse.x * 0.3;
    meshRef.current.position.y =
      position[1] + mouse.y * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={distort}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function TorusGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    // Mouse follow
    meshRef.current.position.x = state.pointer.x * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[2, -0.5, -1]}>
      <torusGeometry args={[0.8, 0.25, 16, 32]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.12}
        wireframe
        emissive="#8b5cf6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function OctahedronGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    meshRef.current.position.x =
      -1.5 + state.pointer.x * 0.15;
    meshRef.current.position.y =
      -1 + state.pointer.y * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[-1.5, -1, 0.5]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.1}
          wireframe
          emissive="#6366f1"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ pointerEvents: "auto" }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#6366f1" />

      <FloatingGeometry
        position={[1, 0.5, 0]}
        color="#6366f1"
        speed={1.5}
        distort={0.4}
        size={1.2}
      />
      <TorusGeometry />
      <OctahedronGeometry />
    </Canvas>
  );
}
