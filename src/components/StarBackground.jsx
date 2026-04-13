import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const mulberry32 = (seed) => {
    let t = seed;
    return () => {
        t += 0x6D2B79F5;
        let r = Math.imul(t ^ (t >>> 15), 1 | t);
        r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
        return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
};

const CustomStars = () => {
    const pointsRef = useRef();
    
    // Generate some moving stars
    const starsCount = 2000;
    const positions = useMemo(() => {
        const rand = mulberry32(1337);
        const pos = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount; i++) {
            pos[i * 3] = (rand() - 0.5) * 100;
            pos[i * 3 + 1] = (rand() - 0.5) * 100;
            pos[i * 3 + 2] = (rand() - 0.5) * 100;
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
