'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GlistenMaterial from './GlistenMaterial';

export default function LuxuryDish() {
  const mainRef = useRef<THREE.Mesh>(null);
  const detailRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (materialRef.current) materialRef.current.uTime = time;
    if (detailRef.current) detailRef.current.rotation.z = time * 0.1;
  });

  return (
    <group>
      {/* The Main Base (Fluid Artist Plate) */}
      <mesh ref={mainRef} castShadow receiveShadow position={[0, -0.4, 0]}>
        <cylinderGeometry args={[2.5, 2.2, 0.15, 64]} />
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.05} 
          metalness={1} 
          envMapIntensity={2}
        />
      </mesh>

      {/* The Central Artistic Element (The "Food" - Celestial Knot) */}
      <mesh position={[0, 0, 0.1]} castShadow>
        <torusKnotGeometry args={[0.7, 0.28, 300, 100, 3, 4]} />
        <GlistenMaterial ref={materialRef} uColor={new THREE.Color("#d4af37")} />
      </mesh>

      {/* Asymmetrical Garnish details */}
      <group ref={detailRef}>
        {[...Array(12)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.cos((i / 12) * Math.PI * 2) * (1.8 + Math.sin(i) * 0.4),
              Math.sin((i / 12) * Math.PI * 2) * (1.8 + Math.cos(i) * 0.4),
              0.05 + Math.sin(i * 1.5) * 0.1
            ]}
            scale={[0.04 + Math.sin(i) * 0.02, 0.04 + Math.cos(i) * 0.02, 0.04]}
          >
            <icosahedronGeometry args={[1, 2]} />
            <meshStandardMaterial 
              color="#0f2c2e" 
              emissive="#0f2c2e" 
              emissiveIntensity={1.5} 
              roughness={0} 
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
