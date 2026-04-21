'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GlistenMaterial from './GlistenMaterial';
import { useStore } from '@/store/useStore';

export default function LuxuryDish() {
  const mainRef = useRef<THREE.Mesh>(null);
  const detailRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  
  const isBookingOpen = useStore((state) => state.isBookingOpen);
  const guests = useStore((state) => state.bookingData.guests);

  const garnishPositions = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      baseX: Math.cos((i / 12) * Math.PI * 2) * (1.8 + Math.sin(i) * 0.4),
      baseY: Math.sin((i / 12) * Math.PI * 2) * (1.8 + Math.cos(i) * 0.4),
      baseZ: 0.05 + Math.sin(i * 1.5) * 0.1,
      scale: 0.04 + Math.sin(i) * 0.02
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (materialRef.current) materialRef.current.uTime = time;
    if (detailRef.current) {
      detailRef.current.rotation.z = time * 0.1;
      
      // Animate garnish based on booking state
      detailRef.current.children.forEach((child, i) => {
        const pos = garnishPositions[i];
        const targetX = isBookingOpen ? pos.baseX * 0.2 : pos.baseX;
        const targetY = isBookingOpen ? pos.baseY * 0.2 : pos.baseY;
        const targetScale = isBookingOpen ? pos.scale * (1 + guests * 0.1) : pos.scale;

        child.position.x = THREE.MathUtils.lerp(child.position.x, targetX, 0.05);
        child.position.y = THREE.MathUtils.lerp(child.position.y, targetY, 0.05);
        child.scale.setScalar(THREE.MathUtils.lerp(child.scale.x, targetScale, 0.05));
      });
    }
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
        {garnishPositions.map((pos, i) => (
          <mesh 
            key={i} 
            position={[pos.baseX, pos.baseY, pos.baseZ]}
            scale={[pos.scale, pos.scale, pos.scale]}
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
