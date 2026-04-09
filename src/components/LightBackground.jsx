import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Wave = () => {
    const meshRef = useRef();
    
    // Wave parameters
    const count = 50;
    const separation = 2;
    
    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * count * 3);
        const cols = new Float32Array(count * count * 3);
        const color1 = new THREE.Color('#2563EB'); // vibrant blue (accent)
        const color2 = new THREE.Color('#60A5FA'); // bright sky blue
        
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const index = (i * count + j) * 3;
                pos[index] = i * separation - (count * separation) / 2;
                pos[index + 1] = 0;
                pos[index + 2] = j * separation - (count * separation) / 2;
                
                const mix = (i + j) / (count * 2);
                const color = color1.clone().lerp(color2, mix);
                cols[index] = color.r;
                cols[index + 1] = color.g;
                cols[index + 2] = color.b;
            }
        }
        return [pos, cols];
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const positions = meshRef.current.geometry.attributes.position.array;
        
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const index = (i * count + j) * 3;
                positions[index + 1] = 
                    Math.sin(i * 0.4 + time * 1.5) * 3 + 
                    Math.sin(j * 0.6 + time * 1.2) * 3;
            }
        }
        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.3}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation={true}
            />
        </points>
    );
};

const LightBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #F1F5F9 100%)'
        }}>
            <Canvas 
                camera={{ position: [0, 40, 60], fov: 45 }}
                style={{ height: '100%', width: '100%' }}
            >
                <ambientLight intensity={0.5} />
                <Wave />
            </Canvas>
        </div>
    );
};

export default LightBackground;
