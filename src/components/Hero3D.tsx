"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

// Custom lerp function to avoid importing THREE
const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
};

function StarField(props: any) {
    const ref = useRef<any>();

    const sphere = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        random.inSphere(positions, { radius: 1.5 });
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function FloatingCube() {
    const meshRef = useRef<any>();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
                color="#bd00ff"
                wireframe
                transparent
                opacity={0.3}
            />
        </mesh>
    );
}

function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
    const { camera } = useThree();

    useFrame(() => {
        camera.position.x = lerp(camera.position.x, mouseX * 0.5, 0.05);
        camera.position.y = lerp(camera.position.y, -mouseY * 0.5, 0.05);
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function Hero3D() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="w-full h-full absolute inset-0 -z-10"
            onMouseMove={handleMouseMove}
        >
            <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <StarField />
                <FloatingCube />
                <CameraController mouseX={mousePosition.x} mouseY={mousePosition.y} />
            </Canvas>
        </div>
    );
}
