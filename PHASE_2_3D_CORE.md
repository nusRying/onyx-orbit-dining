# Phase 2: The Core 3D Experience (The "Living Dish")

## Goal
Load, light, and animate high-fidelity 3D assets into a seamless, scroll-triggered narrative.

## 1. High-Fidelity Asset Pipeline
*   **Asset Prep:** Export GLB models with `Draco` compression and KTX2 textures for minimal loading time.
*   **Asset Loading:** Use `@react-three/drei`'s `useGLTF` hook to pre-cache models.
*   **Scene Organization:** Each "Dish" is a separate component with its own `Ref` and local `GSAP` animations.

## 2. Dynamic Lighting Strategy
*   **Ambient:** Subtle environment mapping (HDRI) for realistic reflections.
*   **Key:** A moving `SpotLight` that follows the dish, creating dramatic, moving shadows.
*   **Atmosphere:** `Fog` or custom `Volumetric` light beams to simulate a moody restaurant interior.

## 3. Kinetic Scroll Orchestration
*   **The Shot List:** Map scroll ranges (e.g., 0-500px, 500-1000px) to specific camera "shots":
    *   *Shot 1 (Hero):* Wide-angle, low-shot of the signature dish.
    *   *Shot 2 (Details):* Macro-zoom into the textures/ingredients.
    *   *Shot 3 (Menu Transition):* A quick glide to a birds-eye view for the menu section.
*   **GSAP Timeline:** A master `ScrollTrigger` timeline that controls:
    *   Camera `position` and `lookAt`.
    *   Dish `rotation` and `scale`.
    *   Light `intensity` and `color`.

## 4. Custom Materials (GLSL Shaders)
*   **Subsurface Scattering:** For organic look of food ingredients (sauces, herbs).
*   **Glisten Shader:** A custom shader to create a subtle "oil" or "sauce" shimmer that reacts to light.
*   **Steam Shader:** A particle-based or transparent mesh shader for a "hot food" effect.

## 5. Deliverable
A fully interactive 3D hero and story section where the dish smoothly rotates and the camera "flies" through the scene as you scroll.
