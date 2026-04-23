'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, useTexture, Center } from '@react-three/drei';
import { extend, ThreeElement } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

// Custom Parallax & Distortion Material
const GalleryMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uMouse: new THREE.Vector2(0, 0),
    uHover: 0,
    uResolution: new THREE.Vector4(),
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uHover;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Mesh distortion based on hover/mouse
    float distortion = sin(pos.y * 2.0 + uTime) * uHover * 0.1;
    pos.z += distortion;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHover;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Subtle parallax shift
    uv += (uMouse - 0.5) * 0.05 * uHover;
    
    vec4 color = texture2D(uTexture, uv);
    
    // Add a high-end "glow" or "vignette" to the texture
    float dist = distance(vUv, vec2(0.5));
    color.rgb *= 1.2 - dist * 0.5;
    
    gl_FragColor = color;
  }
  `
);

extend({ GalleryMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    galleryMaterial: ThreeElement<typeof GalleryMaterial>;
  }
}

export default function GalleryScene() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [scrollX, setScrollX] = useState(0);
  const targetX = useRef(0);

  // Note: Using placeholders since we don't have local images yet
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      targetX.current += e.deltaY * 0.01;
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth momentum
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      -targetX.current,
      0.1
    );

    // Limit scroll
    const limit = (items.length - 1) * (viewport.width * 0.4) / 2;
    targetX.current = THREE.MathUtils.clamp(targetX.current, -limit, limit);
  });

  return (
    <group ref={groupRef}>
      {items.map((_, i) => (
        <GalleryItem 
          key={i} 
          index={i} 
          total={items.length} 
          viewport={viewport}
        />
      ))}
    </group>
  );
}

function GalleryItem({ index, total, viewport }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHover] = useState(false);

  // Load a placeholder texture
  const texture = useTexture('https://raw.githubusercontent.com/pmndrs/drei-assets/master/coffee.jpg');

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
      materialRef.current.uHover = THREE.MathUtils.lerp(materialRef.current.uHover, hovered ? 1 : 0, 0.1);
      
      // Update mouse for parallax
      materialRef.current.uMouse.lerp(state.mouse, 0.1);
    }
  });

  const xPos = (index - (total - 1) / 2) * (viewport.width * 0.4);

  return (
    <mesh 
      ref={meshRef} 
      position={[xPos, 0, 0]} 
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={[viewport.width * 0.35, viewport.height * 0.6, 1]}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <galleryMaterial ref={materialRef} uTexture={texture} />
    </mesh>
  );
}
