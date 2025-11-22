"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingAsteroid({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale} args={[1, 16, 16]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  );
}

function FloatingCube({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
    </Box>
  );
}

function FloatingRing({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.008;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.3, 16, 32]}>
      <meshStandardMaterial color="#a855f7" metalness={0.6} roughness={0.3} emissive="#a855f7" emissiveIntensity={0.2} />
    </Torus>
  );
}

export default function Floating3DObjects() {
  const objects = useMemo(() => [
    { type: 'asteroid', position: [-3, 1, -2], scale: 0.5, color: "#06b6d4" },
    { type: 'asteroid', position: [3, -1, -3], scale: 0.6, color: "#8b5cf6" },
    { type: 'asteroid', position: [2, 2, -1], scale: 0.4, color: "#3b82f6" },
    { type: 'cube', position: [-2, -2, -2], scale: 0.4 },
    { type: 'cube', position: [1, -3, -4], scale: 0.5 },
    { type: 'ring', position: [-1, 3, -3], scale: 0.5 },
    { type: 'ring', position: [4, 0, -2], scale: 0.6 },
  ], []);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        
        {objects.map((obj, index) => {
          if (obj.type === 'asteroid') {
            return (
              <FloatingAsteroid
                key={index}
                position={obj.position as [number, number, number]}
                scale={obj.scale}
                color={obj.color || "#06b6d4"}
              />
            );
          } else if (obj.type === 'cube') {
            return (
              <FloatingCube
                key={index}
                position={obj.position as [number, number, number]}
                scale={obj.scale}
              />
            );
          } else if (obj.type === 'ring') {
            return (
              <FloatingRing
                key={index}
                position={obj.position as [number, number, number]}
                scale={obj.scale}
              />
            );
          }
          return null;
        })}
      </Canvas>
    </div>
  );
}
