'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, Float, Center } from '@react-three/drei';
import { extend, ThreeElement } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '@/store/useStore';
import GlistenMaterial from './GlistenMaterial';

export default function StoryScene() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const scrollProgress = useStore((state) => state.scrollProgress);

  return (
    <group ref={groupRef}>
      {/* Dynamic Story Vignette - Morphs based on scroll */}
      <Vignette progress={scrollProgress} viewport={viewport} />
    </group>
  );
}

function Vignette({ progress, viewport }: { progress: number, viewport: any }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
    if (meshRef.current) {
      // Rotation varies by chapter (progress)
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  // Calculate which chapter we are in (0 to 1)
  const chapterCount = 5;
  const chapter = progress * (chapterCount - 1);
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* Procedural morphing based on scroll progress */}
        {chapter < 0.8 && <sphereGeometry args={[1.5, 64, 64]} />}
        {chapter >= 0.8 && chapter < 1.8 && <boxGeometry args={[1.5, 1.5, 1.5, 10, 10, 10]} />}
        {chapter >= 1.8 && chapter < 2.8 && <octahedronGeometry args={[2, 0]} />}
        {chapter >= 2.8 && chapter < 3.8 && <torusKnotGeometry args={[1.2, 0.4, 256, 32]} />}
        {chapter >= 3.8 && <icosahedronGeometry args={[1.8, 2]} />}

        <GlistenMaterial 
          ref={materialRef} 
          uColor={new THREE.Color(progress > 0.5 ? '#d4af37' : '#00ccff')} 
        />
      </mesh>
    </Float>
  );
}
