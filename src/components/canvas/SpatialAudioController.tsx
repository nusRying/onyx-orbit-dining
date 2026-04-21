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
  const ambientRef = useRef<THREE.Audio>(null);
  const positionalRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    camera.add(listener);
    return () => {
      camera.remove(listener);
    };
  }, [camera, listener]);

  useEffect(() => {
    if (isAudioEnabled) {
      listener.setMasterVolume(masterVolume);
      // Play sounds if they are loaded
    } else {
      listener.setMasterVolume(0);
    }
  }, [isAudioEnabled, masterVolume, listener]);

  return (
    <group>
      {/* Global Ambient Layer (Non-Positional but controlled by listener) */}
      <PositionalAudio
        url="https://assets.mixkit.co/music/preview/mixkit-ethereal-fairy-bells-1053.mp3"
        distance={100} // High distance makes it feel global
        loop
        autoplay={isAudioEnabled}
      />

      {/* Localized Celestial Hum (Positional - attached to the dish) */}
      <group position={[0, 0, 0]}>
        <PositionalAudio
          ref={positionalRef}
          url="https://assets.mixkit.co/music/preview/mixkit-dreamy-slow-piano-547.mp3"
          distance={5}
          loop
          autoplay={isAudioEnabled}
        />
      </group>
    </group>
  );
}
