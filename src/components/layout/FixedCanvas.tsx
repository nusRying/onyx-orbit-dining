'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from '@/components/canvas/Scene';
import { 
  Bloom, 
  EffectComposer, 
  Noise, 
  Vignette, 
  DepthOfField,
  ChromaticAberration
} from '@react-three/postprocessing';
import { Vector2 } from 'three';

export default function FixedCanvas() {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
          <EffectComposer disableNormalPass>
            {/* High-end Bokeh effect */}
            <DepthOfField 
              focusDistance={0} 
              focalLength={0.02} 
              bokehScale={2} 
              height={480} 
            />
            
            {/* Subtle light bleed */}
            <Bloom 
              intensity={0.4} 
              luminanceThreshold={0.9} 
              luminanceSmoothing={0.1} 
            />
            
            {/* Photography-inspired lens distortion */}
            <ChromaticAberration 
              offset={new Vector2(0.001, 0.001)} 
              radialModulation={true}
              modulationOffset={0.5}
            />
            
            {/* Analog Film Grain */}
            <Noise opacity={0.03} />
            
            {/* Vignette for focus */}
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
