# Phase 3: The "Barely-There" UI & Transitions

## Goal
Design a minimalist, high-end UI that enhances the 3D experience without cluttering it.

## 1. High-End Typography & Layout
*   **Font Pairing:**
    *   *Headers:* A high-contrast, modern Serif (e.g., `Playfair Display` or `Ogg`).
    *   *Body:* A clean, understated Sans-Serif (e.g., `Inter`, `Manrope`, or `Satoshi`).
*   **Layout Logic:** Use asymmetrical grids and "floating" text layers that overlap the WebGL canvas, creating depth between 2D and 3D.

## 2. Advanced Navigation (The "Menu Overlay")
*   **The Burger-Trigger:** A custom SVG animation for the menu button.
*   **Full-Screen Reveal:** A GSAP-powered, grid-based menu that slides in with a "liquid" or "stagger" effect.
*   **Magnetic Elements:** Use `gsap.quickTo` to create magnetic buttons that attract the cursor when nearby.

## 3. The "Fluid" Transition (GSAP Flip)
*   **Mechanism:** When a menu item is clicked:
    1.  The UI text fades out.
    2.  The 3D dish moves to a new "Hero" position via GSAP.
    3.  The new page content (e.g., ingredients, price, story) fades in.
*   **State-of-the-Art Polish:** Use `gsap.flip` for elements like images or thumbnails to smoothly "fly" into their full-screen positions.

## 4. Kinetic Typography
*   **Hover Effects:** Text that warps or "liquifies" on hover using GSAP or a simple fragment shader overlay.
*   **Scroll Reveal:** Characters reveal individually (staggered) as they enter the viewport.

## 5. Deliverable
A fully interactive navigation and content system where every click and scroll feels deliberate, smooth, and elegantly animated.
