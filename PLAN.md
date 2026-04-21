# L'Experience — The Majestic Masterpiece Roadmap

> *"We are not building a website. We are building a sensory universe — one that earns a silent gasp from every visitor."*

---

## Vision Statement

**L'Experience** is a 3–5 year project to create the world's most immersive, technologically advanced restaurant website. We draw inspiration from the theatrical drama of *The Alchemist*, the organic philosophy of *Mirazur*, the digital precision of *Noma*, and the visual poetry of *Osteria Francescana*. At every milestone, the standard is simple: **"Would an award judge be speechless?"**

The guiding philosophy is **Celestial Gastronomy** — where the theatrical drama of the cosmos meets the organic purity of the earth, mediated through bleeding-edge web technology.

---

## The Aesthetic Pillars

| Pillar | Principle |
|---|---|
| **Obsidian Depth** | Deep blacks, zero clutter. Space is not empty — it is *charged* |
| **Gold as Grammar** | Champagne Gold (`#D4AF37`) used sparingly, every instance intentional |
| **Barely-There UI** | Controls appear only when needed, never interrupt the 3D journey |
| **Sensory Layering** | Visual, audio, and haptic (future) channels fused into a single feeling |
| **Kinetic Narrative** | Scroll is not navigation — it is the *plot* |

---

## Technical Stack (Evolving)

| Era | Core Technologies |
|---|---|
| **Year 1** | Next.js 14+, React Three Fiber, GSAP ScrollTrigger, Drei, Web Audio API |
| **Year 2** | WebGPU (via Three.js r170+), LangChain, Vercel AI SDK, OpenWeatherMap API |
| **Year 3+** | WebXR Device API, WebAssembly Shaders, Digital Twin Integration |

---

## 🏆 Year 1: Sensory Foundations — "The Awakening" *(Current)*

**Goal:** Establish a fully operational, award-worthy prototype that proves the concept. The site must feel like a premium, cinematic sensory experience.

---

### ✅ Sprint 1: The 3D Celestial Canvas
**Status: COMPLETE**

- [x] Next.js App Router foundation with CSS Module design system
- [x] Celestial Noir design tokens (Obsidian `#050505`, Gold `#D4AF37`, Teal `#0F2C2E`)
- [x] `LuxuryDish` — composite 3D food art (cylinder plate, torus knot, icosahedron garnish)
- [x] `GlistenMaterial` — Fresnel-based GLSL shader with multi-layer Simplex noise for organic shimmering
- [x] Post-processing stack: Bloom, Chromatic Aberration, Vignette

---

### ✅ Sprint 2: The Kinetic Narrative Engine
**Status: COMPLETE**

- [x] GSAP ScrollTrigger-synced camera path with 3 cinematic stages ("The Awakening", "The Synthesis", "The Moment")
- [x] `NarrativeOverlay` — scroll-triggered text panels that reveal alongside camera movement
- [x] Non-linear depth-of-field transition during scroll
- [x] Garnish spheres follow organic off-axis rotation

---

### ✅ Sprint 3: The Sensory Soundscape
**Status: COMPLETE**

- [x] `SpatialAudioController` using Three.js `AudioListener` + Drei `PositionalAudio`
- [x] Global Zustand audio state (`isAudioEnabled`, `masterVolume`)
- [x] Two-layer architecture: Global ambient drone + Positional "Celestial Hum" anchored to the dish
- [x] `AudioToggle` with animating sound-bar spectrum indicator
- [x] Browser auto-play policy handled gracefully

---

### ✅ Sprint 4: Majestic UI Polishing
**Status: COMPLETE**

- [x] Cinematic `Preloader` with GSAP-eased loading curve and letter-by-letter staggered brand reveal
- [x] Dynamic Navbar with scroll-direction detection (hides on scroll-down, reveals on scroll-up)
- [x] Clean-Dot cursor with lagging atmospheric ring and `back.out(2)` hover expansion
- [x] "Celestial Gastronomy" copywriting across all page sections
- [x] `MenuOverlay` with 8-column staggered grid reveal and "Barely-There" fade logic

---

### ✅ Sprint 5: The 3D Booking Interface
**Status: COMPLETE**

- [x] `BookingPortal` — mechanical Armillary Sphere with 3-axis rotating gold rings (physics-aware `useFrame`)
- [x] Cinema camera transition: 1.5s power3 glide from culinary scene to booking artifact
- [x] `BookingGlassForm` — `drei/Html transform` glassmorphism panel (20px blur, gold border, warm dark glass)
- [x] Garnish reaction: 12 icosahedron spheres cluster toward dish center when booking opens
- [x] Guest count selector with live 3D garnish scale response
- [x] Full Zustand state (`isBookingOpen`, `bookingData`) — decoupled from component tree

---

### 🔲 Sprint 6: The "Fluid Menu" — WebGL Dish Discovery
**Target: Q2 2026**

- [ ] Full `/menu` page with a 3D carousel — each menu item is a unique procedural geometry (amuse-bouche → tetrahedron; main → sphere; dessert → torus)
- [ ] "Liquify" page transition: clicking a menu item causes the screen to visually melt/warp using a custom GLSL displacement shader before revealing the dish detail view
- [ ] Per-dish `GlistenMaterial` variant — each cuisine category has its own Fresnel colour profile (seafood → electric blue; wagyu → deep crimson; dessert → iridescent white)
- [ ] Hover state: a 3D dish micro-preview materialises out of obsidian mist with a `Float` animation, before the user has committed to clicking
- [ ] Paired wine/pairing indicator orbiting each dish as a miniature animated ring
- [ ] Scroll-hijacked horizontal menu rail on desktop — dishes slide in 3D space like a chef's pass reveal

---

### 🔲 Sprint 7: The Cinematic Gallery — Depth & Parallax
**Target: Q2 2026**

- [ ] `/gallery` page: full-screen, immersive photo experience driven by a custom shader `PlaneGeometry` with mesh distortion (images bulge off the screen as you hover)
- [ ] Multi-plane parallax depth stack — each photograph is split into 3 depth layers (foreground ingredient close-up, mid-plate, background atmosphere) that shift on mouse move using `useThree` viewport tracking
- [ ] Infinite horizontal scroll with momentum — powered by Lenis + GSAP Observer for a "magazine-quality" tactile drag feel
- [ ] Bokeh "Depth-of-Field" pass that sharpens on the currently focused image and softens everything beyond it — driven by scroll position
- [ ] "Night Mode" gallery toggle — all images' colour temperature shifts from warm daylight to cool candlelight using a custom RGB matrix shader uniform
- [ ] Light-leak animation between image transitions — a horizontal gold streak sweeps across the screen like a studio flash

---

### 🔲 Sprint 8: Chef's Story — Cinematic Biographical Scroll
**Target: Q3 2026**

- [ ] `/story` page: a vertical-scroll film strip narrating the chef's philosophy across 5 chapters ("The Origin", "The Obsession", "The Discovery", "The Discipline", "The Moment")
- [ ] Each chapter has its own 3D vignette — a distinct procedural scene that morphs into the next as you cross a ScrollTrigger boundary
- [ ] Custom `typewriter` text effect on milestone dates — digits count up as they enter the viewport
- [ ] Horizontal "Timeline Rail" with gold connector lines and event node spheres that pulse on hover
- [ ] Parallax video texture mapped onto a `PlaneGeometry` inside the canvas — cinematic video footage appears to exist in 3D space, not as a flat embed
- [ ] "Chapter Signature" — each section closes with a hand-drawn SVG brushstroke that animates from left to right (GSAP `drawSVG`)

---

### 🔲 Sprint 9: Mobile & Responsive 3D Mastery
**Target: Q3 2026**

- [ ] Device-tilt 3D navigation on mobile — the `dishRef` responds to `DeviceOrientationEvent` gamma/beta axes, replacing mouse-parallax with physical tilting of the phone
- [ ] Adaptive geometry LOD (Level of Detail) — `torusKnotGeometry` segment count drops from `300` to `80` on screens under 768px to maintain 60fps
- [ ] Progressive Enhancement mode — on devices without WebGL 2.0, fall back to a CSS-only cinematic experience with GPU-accelerated 3D transforms and `backdrop-filter`
- [ ] Touch-based swipe narrative — the scroll narrative stages are re-mapped to swipe gestures with velocity-based momentum using the Lenis touch API
- [ ] Thumb-zone UI — all interactive Booking Portal nodes are positioned in the lower 40% of the viewport on mobile, respecting reachability ergonomics
- [ ] `prefers-reduced-motion` full compliance — all GSAP animations are wrapped in a `matchMedia` guard that replaces motion with instant cross-fades

---

### 🔲 Sprint 10: Performance Mastery & Accessibility
**Target: Q4 2026**

- [ ] Lighthouse Performance score ≥ 95 on desktop, ≥ 85 on mobile — achieved through route-based code splitting, `next/font` preloading, and canvas `dpr` clamping
- [ ] `InstancedMesh` refactor for the garnish layer — 12 individual icosahedrons replaced with a single GPU-instanced draw call, reducing CPU-to-GPU bandwidth by ~60%
- [ ] WCAG 2.1 AA compliance — all interactive 3D elements have `aria-label` equivalents, keyboard-focus rings styled in Champagne Gold, and skip-nav link
- [ ] `Suspense` + streaming — the 3D canvas streams into view progressively; audio assets load after LCP using `<link rel="preload">` with media type detection
- [ ] R3F `frameloop="demand"` optimization — canvas only re-renders on actual state change or animation tick, eliminating idle GPU draw calls
- [ ] Core Web Vitals: LCP < 1.5s via optimized `next/image` hero photography, INP < 100ms via Web Worker for audio decoding, CLS 0 via reserved aspect-ratio containers
- [ ] Automated Playwright E2E tests — every Sprint's visual output is screenshot-diffed against a golden baseline to prevent visual regressions
- [ ] `Sentry` error boundary around the canvas — if WebGL context is lost, the site recovers gracefully with a 2D fallback and user notification

---

## 🌩️ Year 2: Living Intelligence — "The Synthesis" *(Next)*

**Goal:** The site becomes self-aware. It knows what time of day it is, what the weather is outside your window, and can suggest pairings. The 3D environment synchronizes with the real world.

---

### Sprint 6: Real-Time World Synchronization
**Target: Q3 2026**

- [ ] OpenWeatherMap API integration — Alter the 3D scene's ambient light and fog density to match the user's real-world weather (rain → moody teal mist; clear → sharp gold highlights)
- [ ] Time-of-Day Lighting Engine — Scene transitions from "Lunch service" (warm daylight bloom) to "Dinner service" (deep obsidian, candlelight spotlights) based on the user's local time
- [ ] Lunar Phase Integration — The orbital rings in the `BookingPortal` reflect the current phase of the moon
- [ ] Seasonal Menu Awareness — Background geometry evolves by season (sparse winter icosahedrons → abundant spring leaves)

---

### Sprint 7: AI Sommelier & Flavor Pairing Engine
**Target: Q4 2026**

- [ ] GPT-4o powered "Flavor Pairing Assistant" floating panel that suggests wine pairings based on selected menu items
- [ ] Conversational booking flow — Replace the static form with a multi-turn AI dialogue
- [ ] Vision API integration — A "Capture your Palate" mode where users photograph their pantry and the AI maps their flavor profile to a recommended 3-course menu
- [ ] Personalized narrative — The `NarrativeOverlay` text adapts in real-time based on user interaction history (returning visitor vs. first-time curious explorer)

---

### Sprint 8: WebGPU Visual Upgrade
**Target: Q1 2027**

- [ ] Migrate materials to WebGPU compute shaders via Three.js WebGPU backend
- [ ] True volumetric god-rays from the spotlight above the dish (not a post-process — rendered in-volume)
- [ ] Real-time fluid simulation on the plate surface — the "food" responds to mouse velocity as if it is a living liquid
- [ ] Screen-Space Global Illumination (SSGI) — light from the dish bounces onto the plate, the plate bounces onto the table

---

### Sprint 9: The Reservation Intelligence Layer
**Target: Q2 2027**

- [ ] Live table availability from OpenTable API with real-time 3D seating visualization
- [ ] Dynamic pricing display — peak hours animate the "Secure a Moment" button with a subtle urgency pulse
- [ ] Guest preference memory — returning visitors see their last booking pre-filled in the 3D portal, with a personalized greeting

---

## 🌌 Year 3+: Immersive Convergence — "The Moment"

**Goal:** The site transcends its medium. It becomes a place people visit for the experience alone, not to make a booking. It is reviewed in design publications and taught in web design courses.

---

### Sprint 10: WebXR Spatial Dining
**Target: Q3 2027**

- [ ] Full WebXR support via `@react-three/xr`
- [ ] In VR headset (Vision Pro, Quest 3): Enter the 3D dining room and walk around the dish
- [ ] Spatial menu: Each dish floats in the real world (via AR mode) on your dining table before you order
- [ ] Haptic API integration — a subtle vibration feedback (on mobile) when the dish "glistens" at maximum shimmer frequency

---

### Sprint 11: Digital Artifact NFT Receipts
**Target: Q4 2027**

- [ ] Every confirmed reservation mints a unique generative 3D artifact — a "Crystallized Moment" where the dish's geometry is frozen at the exact timestamp of the booking
- [ ] Artifacts are downloadable as `.glb` files and viewable in any WebGL viewer
- [ ] A gallery page renders all minted artifacts — the restaurant's history told in procedural geometry

---

### Sprint 12: The Living Digital Twin
**Target: 2028+**

- [ ] Kitchen IoT sensors feed live data to the 3D scene — when Chef arrives, the dish "wakes up" and begins to warm (shader heat distortion activates)
- [ ] Real-time plating camera feed composited inside the 3D dish geometry using a Three.js `VideoTexture`
- [ ] Guest-side: A QR code at the table opens a WebXR overlay of the dish's story (provenance of each ingredient, chef's intention, flavor journey) anchored to the physical plate

---

## Design System Reference

```css
/* Celestial Gastronomy Design Tokens */
:root {
  --obsidian:      #050505;   /* Primary background — charged void */
  --accent-gold:   #D4AF37;   /* Primary accent — restraint, precision */
  --ethereal-teal: #0F2C2E;   /* Secondary accent — depth, mystery */
  --void-smoke:    #111111;   /* Secondary background — depth layer */
  --lunar-silver:  #C0C0C0;   /* Text primary — crisp, intentional */
  --ghost-white:   rgba(255,255,255,0.07); /* Glassmorphism substrate */
  
  --font-serif:    'Cormorant Garamond', Georgia, serif;
  --font-sans:     'Inter', 'Helvetica Neue', sans-serif;
  
  --ease-cinematic: cubic-bezier(0.19, 1, 0.22, 1); /* Expo-out — majestic momentum */
  --ease-magnetic:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Back-out — physical spring */
}
```

---

## Success Metrics

| Year | Target Metric |
|---|---|
| **Year 1** | Lighthouse Performance ≥ 90, Core Web Vitals all green, Awwwards "Site of the Day" submission |
| **Year 2** | Featured in Smashing Magazine or CSS-Tricks, AI features reduce booking abandonment by 40% |
| **Year 3** | Awwwards "Site of the Year" nominee, cited in 2+ design publications, 10k organic monthly visits from design community |

---

## Architecture Overview

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Celestial Gastronomy narrative layout
│   ├── layout.tsx          # Root layout with canvas + overlays
│   └── globals.css         # Design token system
├── components/
│   ├── canvas/
│   │   ├── Scene.tsx               # Master 3D orchestrator + camera
│   │   ├── LuxuryDish.tsx          # The culinary 3D artifact
│   │   ├── GlistenMaterial.tsx     # Custom GLSL Fresnel shader
│   │   ├── SpatialAudioController.tsx  # 3D audio engine
│   │   ├── BookingPortal.tsx       # Armillary sphere reservation UI
│   │   └── BookingGlassForm.tsx    # Glassmorphism HTML overlay in 3D
│   ├── layout/
│   │   ├── Navbar.tsx              # Dynamic visibility nav
│   │   ├── MenuOverlay.tsx         # Staggered full-screen menu
│   │   ├── Preloader.tsx           # Cinematic brand reveal
│   │   ├── NarrativeOverlay.tsx    # Scroll-triggered story panels
│   │   ├── FixedCanvas.tsx         # Fullscreen R3F canvas host
│   │   └── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   └── shared/
│       ├── AudioToggle.tsx         # Sound control with spectrum bars
│       ├── CustomCursor.tsx        # Clean-dot + atmospheric ring cursor
│       ├── Magnetic.tsx            # Magnetic hover attraction
│       └── TextReveal.tsx          # GSAP scroll-triggered letter reveal
└── store/
    └── useStore.ts                 # Global Zustand state machine
```

---

*Last Updated: April 2026 — Phase 1 "Celestial Gastronomy" complete.*
