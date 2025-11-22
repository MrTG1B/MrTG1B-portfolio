"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

// Custom lerp function for smooth camera movement
const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
};

function StarField(props: any) {
    const ref = useRef<any>();

    const sphere = useMemo(() => {
    const positions = new Float32Array(6000 * 3); // Increased star count to 6000
    // Increased radius to 3.5 to give more depth/parallax effect
    random.inSphere(positions, { radius: 3.5 }); 
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
                    color="#ffffff"   // CHANGED: Set to White
                    size={0.006}      // CHANGED: Made slightly smaller for realistic "star" look
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={1}
                />
            </Points>
        </group>
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
                <ambientLight intensity={1} />
                <StarField />
                <CameraController mouseX={mousePosition.x} mouseY={mousePosition.y} />
            </Canvas>
        </div>
    );
}
