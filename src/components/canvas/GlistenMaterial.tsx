'use client';

import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend, ThreeElement } from '@react-three/fiber';

const GlistenMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color('#d4af37'),
    uMouse: new THREE.Vector2(0, 0),
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
  `,
  // Fragment Shader
  `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  // Simple noise function for organic shimmering
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    
    // Fresnel effect for high-end "glow" edges
    float fresnel = pow(1.0 - dot(normal, viewDir), 4.0);
    
    // Multi-layered noise for "Celestial" shimmering
    float n1 = noise(vUv * 30.0 + uTime * 0.5);
    float n2 = noise(vUv * 60.0 - uTime * 0.8);
    float glisten = pow(n1 * n2, 4.0) * 15.0;
    
    // Chromatic shift on the edges
    vec3 edgeColor = mix(uColor, vec3(0.1, 0.5, 0.5), fresnel); // Teal shift on edges
    
    vec3 finalColor = mix(vec3(0.02), edgeColor, fresnel * 0.4 + glisten * 0.6);
    finalColor += uColor * glisten * 0.2; // Add highlight intensity
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
  `
);

extend({ GlistenMaterialImpl });

// Type definition for JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      glistenMaterialImpl: ThreeElement<typeof GlistenMaterialImpl>;
    }
  }
}

export default function GlistenMaterial(props: any) {
  return <glistenMaterialImpl {...props} />;
}
