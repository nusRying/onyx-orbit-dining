'use client';

import { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { PositionalAudio } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '@/store/useStore';

export default function SpatialAudioController() {
  const { camera } = useThree();
  const isAudioEnabled = useStore((state) => state.isAudioEnabled);
  const masterVolume = useStore((state) => state.masterVolume);
  
  const [listener] = useState(() => new THREE.AudioListener());
  const positionalRef = useRef<THREE.PositionalAudio>(null);

  // GitHub Pages base path
  const assetPath = (path: string) => `/onyx-orbit-dining${path}`;

  useEffect(() => {
    camera.add(listener);
    return () => {
      camera.remove(listener);
    };
  }, [camera, listener]);

  useEffect(() => {
    if (isAudioEnabled) {
      listener.setMasterVolume(masterVolume);
    } else {
      listener.setMasterVolume(0);
    }
  }, [isAudioEnabled, masterVolume, listener]);

  return (
    <group>
      {/* Global Ambient Layer */}
      <PositionalAudio
        url={assetPath("/audio/ambient.mp3")}
        distance={100}
        loop
        autoplay={isAudioEnabled}
      />

      {/* Localized Celestial Hum */}
      <group position={[0, 0, 0]}>
        <PositionalAudio
          ref={positionalRef}
          url={assetPath("/audio/celestial.mp3")}
          distance={5}
          loop
          autoplay={isAudioEnabled}
        />
      </group>
    </group>
  );
}
