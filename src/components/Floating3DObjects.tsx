"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingAsteroid({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.007;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale} args={[1, 16, 16]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.3}
        metalness={0.6}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
}

function FloatingCube({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.007;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3) * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial 
        color="#3b82f6" 
        metalness={0.9} 
        roughness={0.1} 
        emissive="#3b82f6"
        emissiveIntensity={0.2}
      />
    </Box>
  );
}

function FloatingRing({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.012;
      meshRef.current.rotation.z += 0.01;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.3, 16, 32]}>
      <meshStandardMaterial 
        color="#a855f7" 
        metalness={0.8} 
        roughness={0.2} 
        emissive="#a855f7" 
        emissiveIntensity={0.4} 
      />
    </Torus>
  );
}

export default function Floating3DObjects() {
  const objects = useMemo(() => [
    { type: 'asteroid', position: [-3, 1, -2], scale: 0.6, color: "#06b6d4" },
    { type: 'asteroid', position: [3, -1, -3], scale: 0.7, color: "#8b5cf6" },
    { type: 'asteroid', position: [2, 2, -1], scale: 0.5, color: "#3b82f6" },
    { type: 'asteroid', position: [-2.5, -1.5, -2.5], scale: 0.4, color: "#ec4899" },
    { type: 'cube', position: [-2, -2, -2], scale: 0.5 },
    { type: 'cube', position: [1, -3, -4], scale: 0.6 },
    { type: 'ring', position: [-1, 3, -3], scale: 0.6 },
    { type: 'ring', position: [4, 0, -2], scale: 0.7 },
  ], []);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, -5, 5]} intensity={0.6} color="#06b6d4" />
        
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
          // This should never happen, but TypeScript needs a return
          console.warn(`Unknown object type encountered: ${obj.type}`);
          return null;
        })}
      </Canvas>
    </div>
  );
}
