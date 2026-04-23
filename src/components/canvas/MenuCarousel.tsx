'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Center } from '@react-three/drei';
import * as THREE from 'three';
import { useStore, MENU_ITEMS } from '@/store/useStore';
import GlistenMaterial from './GlistenMaterial';

export default function MenuCarousel() {
  const activeDishIndex = useStore((state) => state.activeDishIndex);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Smoothly rotate the entire carousel to the active dish
    const targetRotation = -activeDishIndex * (Math.PI * 2 / MENU_ITEMS.length);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation,
      0.1
    );
  });

  return (
    <group ref={groupRef}>
      {MENU_ITEMS.map((item, i) => (
        <DishItem 
          key={item.id} 
          item={item} 
          index={i} 
          total={MENU_ITEMS.length} 
          isActive={activeDishIndex === i}
        />
      ))}
    </group>
  );
}

function DishItem({ item, index, total, isActive }: { item: any, index: number, total: number, isActive: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  const angle = (index / total) * Math.PI * 2;
  const radius = 5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={[x, 0, z]} rotation={[0, angle, 0]}>
      <Float speed={isActive ? 2 : 0} rotationIntensity={isActive ? 1 : 0} floatIntensity={isActive ? 1 : 0}>
        <mesh ref={meshRef}>
          {item.category === 'seafood' && <tetrahedronGeometry args={[1, 0]} />}
          {item.category === 'wagyu' && <icosahedronGeometry args={[1, 1]} />}
          {item.category === 'dessert' && <torusGeometry args={[0.7, 0.3, 32, 100]} />}
          
          <GlistenMaterial 
            ref={materialRef} 
            uColor={new THREE.Color(item.color)} 
          />
        </mesh>
      </Float>

      {/* Orbiting Wine Pairing Indicator */}
      <mesh rotation={[Math.PI * 0.5, 0, 0]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={2} transparent opacity={0.3} />
      </mesh>

      <Center position={[0, -2, 0]}>
        <Text
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          opacity={isActive ? 1 : 0.2}
        >
          {item.title}
        </Text>
      </Center>
    </group>
  );
}
