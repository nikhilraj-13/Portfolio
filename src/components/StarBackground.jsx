import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CustomStars = () => {
    const pointsRef = useRef();
    
    // Generate some moving stars
    const starsCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.15;
            pointsRef.current.rotation.x = time * 0.12;
        }
    });

    return (
        <group>
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const StarBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)'
        }}>
            <Canvas 
                camera={{ position: [0, 0, 5], fov: 60 }}
                style={{ height: '100%', width: '100%' }}
            >
                <ambientLight intensity={0.5} />
                <CustomStars />
            </Canvas>
        </div>
    );
};

export default StarBackground;
