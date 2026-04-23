'use client';

import { useRef, useLayoutEffect, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import LuxuryDish from './LuxuryDish';
import SpatialAudioController from './SpatialAudioController';
import BookingPortal from './BookingPortal';
import BookingGlassForm from './BookingGlassForm';
import MenuCarousel from './MenuCarousel';
import GalleryScene from './GalleryScene';
import StoryScene from './StoryScene';
import LiquifyOverlay from './LiquifyOverlay';
import { useStore } from '@/store/useStore';

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const pathname = usePathname();
  const isMenuPage = pathname === '/menu';
  const isGalleryPage = pathname === '/gallery';
  const isStoryPage = pathname === '/story';
  
  const groupRef = useRef<THREE.Group>(null);
  const dishRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.SpotLight>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  const { viewport, size } = useThree();
  const isMobile = size.width < 768;
  const isBookingOpen = useStore((state) => state.isBookingOpen);

  useLayoutEffect(() => {
    // Scroll narrative logic only for Home page
    if (!groupRef.current || !dishRef.current || isMenuPage || isGalleryPage || isStoryPage) {
      if (isMenuPage && cameraRef.current) {
        gsap.to(cameraRef.current.position, { x: 0, y: 0, z: 12, duration: 1 });
      }
      if (isGalleryPage && cameraRef.current) {
        gsap.to(cameraRef.current.position, { x: 0, y: 0, z: 10, duration: 1 });
      }
      if (isStoryPage && cameraRef.current) {
        gsap.to(cameraRef.current.position, { x: 0, y: 0, z: 8, duration: 1 });
      }
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    });

    // STAGE 1: THE AWAKENING
    tl.to(dishRef.current.position, {
      x: isMobile ? 0 : 3 * (viewport.width / 10),
      y: isMobile ? -0.5 : -0.2,
      z: isMobile ? 1.5 : 1.2,
      duration: 1,
      ease: "power2.inOut"
    }, 0)
    .to(dishRef.current.rotation, {
      x: Math.PI * 0.15,
      y: Math.PI * 0.1,
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // STAGE 2: THE SYNTHESIS
    tl.to(dishRef.current.position, {
      x: isMobile ? 0 : -3 * (viewport.width / 10),
      y: isMobile ? 0.5 : 0.1,
      z: isMobile ? 2.5 : 2.5,
      duration: 1,
      ease: "power3.inOut"
    }, 1)
    .to(dishRef.current.rotation, {
      x: Math.PI * 0.6,
      y: Math.PI * -0.3,
      duration: 1,
      ease: "power3.inOut"
    }, 1);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [viewport, isMobile, isMenuPage, isGalleryPage, isStoryPage]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.05;
    }
    if (lightRef.current) {
      const targetX = state.mouse.x * 5;
      const targetY = state.mouse.y * 5;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, 10 + targetX, 0.05);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, 10 + targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <PerspectiveCamera 
        ref={cameraRef}
        makeDefault 
        position={[0, 0, isMenuPage ? 12 : (isGalleryPage ? 10 : (isMobile ? 10 : 8))]} 
        fov={isMobile ? 60 : 45} 
      />
      
      <Environment preset="night" />
      <ambientLight intensity={0.15} />
      <SpatialAudioController />
      <LiquifyOverlay />
      
      <spotLight 
        ref={lightRef}
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2.5} 
        castShadow 
        color="#d4af37"
      />

      <Suspense fallback={null}>
        {isMenuPage && <MenuCarousel />}
        {isGalleryPage && <GalleryScene />}
        {isStoryPage && <StoryScene />}
        {!isMenuPage && !isGalleryPage && !isStoryPage && (
          <group ref={dishRef}>
            <LuxuryDish />
            {isBookingOpen && (
              <group>
                <BookingPortal />
                <BookingGlassForm />
              </group>
            )}
          </group>
        )}
      </Suspense>

      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={5} />
    </group>
  );
}
