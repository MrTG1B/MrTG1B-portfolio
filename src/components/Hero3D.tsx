"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import * as THREE from "three";

// Custom lerp function for smooth camera movement
const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
};

function StarField(props: any) {
    const ref = useRef<any>();

    const sphere = useMemo(() => {
    // Optimized star count for better performance on all devices
    const positions = new Float32Array(10000 * 3);
    // Increased radius to 5 to give more depth/parallax effect
    random.inSphere(positions, { radius: 5 }); 
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotates the galaxy slowly regardless of mouse movement
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.006}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.9}
                />
            </Points>
        </group>
    );
}

// Add a glowing orb that pulses
function GlowingOrb({ position, color }: { position: [number, number, number]; color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const scale = 0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
            meshRef.current.scale.setScalar(scale);
            // Add subtle rotation
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.015;
        }
    });

    return (
        <Sphere ref={meshRef} position={position} args={[0.35, 32, 32]}>
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1.2}
                transparent
                opacity={0.7}
                metalness={0.8}
                roughness={0.2}
            />
        </Sphere>
    );
}

function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
    const { camera } = useThree();

    useFrame(() => {
        // Enhanced camera movement - more dramatic response to mouse
        const targetX = mouseX * 2.0; // Increased multiplier for more movement
        const targetY = -mouseY * 1.5; // Different multiplier for Y axis
        const targetZ = 1 + mouseY * 0.4; // Also move camera forward/backward slightly
        
        camera.position.x = lerp(camera.position.x, targetX, 0.08); // Smoother lerp
        camera.position.y = lerp(camera.position.y, targetY, 0.08);
        camera.position.z = lerp(camera.position.z, targetZ, 0.04);
        
        // Add slight rotation based on mouse position
        camera.rotation.z = lerp(camera.rotation.z, mouseX * 0.08, 0.08);
        
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function Hero3D() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Normalize mouse position from -1 to 1
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="w-full h-full absolute inset-0 z-5"
            onMouseMove={handleMouseMove}
        >
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                style={{ background: 'transparent' }} 
            >
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
                <pointLight position={[0, 5, 5]} intensity={0.5} color="#06b6d4" />
                <StarField />
                <GlowingOrb position={[-2, 1, -2]} color="#3b82f6" />
                <GlowingOrb position={[2, -1, -3]} color="#a855f7" />
                <GlowingOrb position={[0, 2, -4]} color="#06b6d4" />
                <GlowingOrb position={[-1.5, -2, -2.5]} color="#f59e0b" />
                <GlowingOrb position={[2.5, 1.5, -3.5]} color="#ec4899" />
                <CameraController mouseX={mousePosition.x} mouseY={mousePosition.y} />
            </Canvas>
        </div>
    );
}
