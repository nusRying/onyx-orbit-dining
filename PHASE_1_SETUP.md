# Phase 1: Immersive Foundation & Prototype

## Goal
Establish the high-performance technical core and the "feel" of the interaction before building any features.

## 1. Project Scaffolding
*   **Framework:** Next.js 14+ (App Router) for SEO and optimized routing.
*   **Styling:** Vanilla CSS Modules for high-precision "luxury" layouts (avoiding Tailwind's utility constraints for complex layering).
*   **State Management:** `Zustand` for lightweight, global coordination between the 3D Canvas and UI (e.g., `isMenuOpen`, `currentSection`, `scrollProgress`).

## 2. The "Silky" Motion Core
*   **Smooth Scroll:** Integrate `Lenis` for standardized, inertial scrolling across all browsers.
*   **GSAP Integration:**
    *   Initialize `ScrollTrigger` and `ScrollSmoother` (if available) or sync Lenis with `gsap.ticker`.
    *   Create a global `useGSAP` context to manage timeline cleanup and memory.

## 3. WebGL Environment (React Three Fiber)
*   **Architecture:** A `FixedCanvas` component that wraps the entire application.
*   **Scene Rigging:** 
    *   `Scene`: Container for lighting and models.
    *   `Rig`: A custom camera controller that interpolates between "shot" positions.
*   **Post-processing:** Setup the initial pass for `Bloom`, `Vignette`, and `Noise` to establish the cinematic mood.

## 4. Folder Structure (Luxury Standard)
```text
src/
├── app/                  # Next.js Routes
├── components/
│   ├── layout/           # FixedCanvas, SmoothScroll, Navbar
│   ├── canvas/           # R3F specific (Scene, Rig, Dishes)
│   ├── ui/               # Interactive UI elements
│   └── shared/           # Typography, Buttons
├── hooks/                # useLenis, useMousePosition, useModel
├── store/                # Zustand global state
├── shaders/              # Custom GLSL (.vert, .frag)
└── styles/               # Global CSS, Font declarations
```

## 5. Deliverable
A functional landing page with a placeholder 3D object that scrolls smoothly, reacts to the mouse, and feels "premium" in its responsiveness.
