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
    const positions = new Float32Array(8000 * 3); // Increased star count to 8000
    // Increased radius to 4 to give more depth/parallax effect
    random.inSphere(positions, { radius: 4 }); 
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
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={1}
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
            const scale = 0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            meshRef.current.scale.setScalar(scale);
        }
    });

    return (
        <Sphere ref={meshRef} position={position} args={[0.3, 32, 32]}>
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.8}
                transparent
                opacity={0.6}
            />
        </Sphere>
    );
}

function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
    const { camera } = useThree();

    useFrame(() => {
        // Enhanced camera movement - more dramatic response to mouse
        const targetX = mouseX * 1.5; // Increased multiplier for more movement
        const targetY = -mouseY * 1.2; // Different multiplier for Y axis
        const targetZ = 1 + mouseY * 0.3; // Also move camera forward/backward slightly
        
        camera.position.x = lerp(camera.position.x, targetX, 0.1); // Faster lerp
        camera.position.y = lerp(camera.position.y, targetY, 0.1);
        camera.position.z = lerp(camera.position.z, targetZ, 0.05);
        
        // Add slight rotation based on mouse position
        camera.rotation.z = lerp(camera.rotation.z, mouseX * 0.05, 0.1);
        
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
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                <StarField />
                <GlowingOrb position={[-2, 1, -2]} color="#3b82f6" />
                <GlowingOrb position={[2, -1, -3]} color="#a855f7" />
                <GlowingOrb position={[0, 2, -4]} color="#06b6d4" />
                <CameraController mouseX={mousePosition.x} mouseY={mousePosition.y} />
            </Canvas>
        </div>
    );
}
