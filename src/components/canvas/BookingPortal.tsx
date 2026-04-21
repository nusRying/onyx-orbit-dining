'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import GlistenMaterial from './GlistenMaterial';

export default function BookingPortal() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.2;
      ring1Ref.current.rotation.x = Math.sin(time * 0.1) * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.3;
      ring2Ref.current.rotation.y = Math.cos(time * 0.15) * 0.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = time * 0.1;
      ring3Ref.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[5, 1, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Armillary Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2, 0.02, 16, 100]} />
          <GlistenMaterial uColor={new THREE.Color('#d4af37')} />
        </mesh>
        
        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.8, 0.015, 16, 100]} />
          <GlistenMaterial uColor={new THREE.Color('#d4af37')} />
        </mesh>
        
        <mesh ref={ring3Ref}>
          <torusGeometry args={[1.6, 0.01, 16, 100]} />
          <GlistenMaterial uColor={new THREE.Color('#d4af37')} />
        </mesh>

        {/* Central Core */}
        <mesh>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial 
            color="#d4af37" 
            emissive="#d4af37" 
            emissiveIntensity={2} 
          />
        </mesh>
        
        {/* Interaction Points for Guest Selection (Placeholder nodes) */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * 1.6;
          const y = Math.sin(angle) * 1.6;
          
          return (
            <mesh key={i} position={[x, y, 0]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="#fff" transparent opacity={0.5} />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
}
