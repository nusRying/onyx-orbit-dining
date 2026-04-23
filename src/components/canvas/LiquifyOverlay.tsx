'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { extend, ThreeElement } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { useStore } from '@/store/useStore';

const LiquifyMaterial = shaderMaterial(
  {
    uTime: 0,
    uProgress: 0,
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform float uTime;
  uniform float uProgress;
  varying vec2 vUv;

  // Simple noise function
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = vUv;
    
    // Create liquid distortion based on progress
    float distortion = sin(uv.y * 10.0 + uTime) * uProgress * 0.1;
    uv.x += distortion;
    
    // Add noise-based "melting" effect
    float noise = hash(uv * 5.0 + uTime * 0.1);
    float melt = smoothstep(0.0, 1.0, uProgress - noise * 0.5);
    
    vec3 color = vec3(0.02); // Deep Obsidian base
    float alpha = melt;
    
    gl_FragColor = vec4(color, alpha);
  }
  `
);

extend({ LiquifyMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    liquifyMaterial: ThreeElement<typeof LiquifyMaterial>;
  }
}

export default function LiquifyOverlay() {
  const materialRef = useRef<any>(null);
  const isLiquifying = useStore((state) => state.isLiquifying);
  const { viewport } = useThree();

  useEffect(() => {
    if (isLiquifying) {
      gsap.to(materialRef.current, {
        uProgress: 1,
        duration: 1,
        ease: 'power4.inOut'
      });
    } else {
      gsap.to(materialRef.current, {
        uProgress: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }, [isLiquifying]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, 10]} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <liquifyMaterial ref={materialRef} transparent transparent={true} />
    </mesh>
  );
}
