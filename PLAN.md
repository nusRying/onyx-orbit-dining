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

### ✅ Sprint 6: The "Fluid Menu" — WebGL Dish Discovery
**Status: COMPLETE**

- [x] Full `/menu` page with a 3D carousel — each menu item is a unique procedural geometry (amuse-bouche → tetrahedron; main → sphere; dessert → torus)
- [x] "Liquify" page transition: clicking a menu item causes the screen to visually melt/warp using a custom GLSL displacement shader before revealing the dish detail view
- [x] Per-dish `GlistenMaterial` variant — each cuisine category has its own Fresnel colour profile (seafood → electric blue; wagyu → deep crimson; dessert → iridescent white)
- [x] Hover state: a 3D dish micro-preview materialises out of obsidian mist with a `Float` animation
- [x] Paired wine/pairing indicator orbiting each dish as a miniature animated ring
- [x] Scroll-hijacked horizontal menu rail on desktop — dishes slide in 3D space like a chef's pass reveal

---

### ✅ Sprint 7: The Cinematic Gallery — Depth & Parallax
**Status: COMPLETE**

- [x] `/gallery` page: full-screen, immersive photo experience driven by a custom shader `PlaneGeometry` with mesh distortion (images bulge off the screen as you hover)
- [x] Multi-plane parallax depth stack — textures shift on mouse move using `useThree` viewport tracking
- [x] Infinite horizontal scroll with momentum — powered by custom wheel/momentum logic in `GalleryScene`
- [x] Bokeh "Depth-of-Field" pass — integrated with the cinematic post-processing stack
- [x] "Night Mode" gallery theme — using the "city/night" environment preset for consistent mood
- [x] Light-leak animation — provided by the Bloom and Chromatic Aberration layers

---

### ✅ Sprint 8: Chef's Story — Cinematic Biographical Scroll
**Status: COMPLETE**

- [x] `/story` page: a vertical-scroll film strip narrating the chef's philosophy across 5 chapters ("The Origin", "The Obsession", "The Discovery", "The Discipline", "The Moment")
- [x] Each chapter has its own 3D vignette — a distinct procedural scene that morphs into the next as you cross a ScrollTrigger boundary
- [x] Custom reveal text effect on milestones using the `TextReveal` component
- [x] Horizontal "Timeline Rail" with gold connector lines and nodes that track narrative progress
- [x] Unified 3D environment transition between Home, Menu, Gallery, and Story routes

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

## 🌩️ Year 2: Living Intelligence — "The Synthesis"

**Goal:** The site becomes self-aware. It knows the weather at your window, the lunar cycle, the time of day, and your flavour history — and reshapes the 3D environment in real-time to match. This is no longer a website: it is a **reactive living entity**.

### Stack Additions — Year 2

| Technology | Purpose |
|---|---|
| Three.js WebGPU Renderer (`r170+`) | WGSL compute shaders replace GLSL for all materials |
| Vercel AI SDK 4.0 (streaming) | Streaming AI responses wired directly to canvas uniforms |
| `@ai-sdk/google` Gemini 2.0 Flash | On-device intent extraction for flavour pairing |
| Web Animations API + View Transitions API | Native browser page transitions at 120fps |
| CSS Houdini Paint API | Registered custom paint worklets for gold ink bleed effects |
| OpenWeatherMap + Temporal API | Precise real-world time/weather data with timezone awareness |

---

### 🔲 Sprint 11: Real-Time World Synchronisation
**Target: Q2 2026**

- [ ] **OpenWeatherMap + Temporal API pipeline** — Weather condition codes update a `SceneState` Zustand slice every 10 minutes via a Vercel Edge Function (zero cold-start latency); scene transitions smoothly via GSAP `to()` uniform tweening
- [ ] **Time-of-Day Lighting Engine** — 24-hour sun arc simulation: `ambientLight` colour temperature lerps from 2700K (dawn gold) → 5500K (noon white) → 1800K (candlelight dinner) using a custom WGSL `colorTemperature()` function
- [ ] **Lunar Phase Integration** — `SunCalc` library feeds live phase angle into the `BookingPortal` ring speed and emissive intensity; full moon = peak orbital velocity
- [ ] **Micro-climate geometry** — Rain triggers procedural droplet `InstancedMesh` (10,000 translucent particles) floating through the scene using a WebGPU compute-pass physics simulation
- [ ] **Seasonal Menu Awareness** — CSS Houdini Paint Worklet blends seasonal colour palettes without triggering React re-renders; winter → monochrome obsidian; spring → emergent teal

---

### 🔲 Sprint 12: WebGPU Visual Supreme
**Target: Q3 2026**

- [ ] **Three.js WebGPU backend migration** — Replace WebGL2 renderer with `three/webgpu`; materials rewritten in WGSL for 3–5× shader throughput on modern discrete GPUs
- [ ] **True Volumetric God-Rays** — Raymond volume march written as a WebGPU Compute Pass (not a screen-space post-process); 128-step ray cast from the spotlight through the dish's bounding volume
- [ ] **Real-time Fluid Simulation** — SPH (Smoothed Particle Hydrodynamics) particle solver in a WebGPU Compute Shader; 50,000 particles draping across the plate surface, responding to mouse velocity with < 2ms GPU-side latency
- [ ] **Screen-Space Global Illumination (SSGI)** — Implemented via a custom WebGPU render pass reading depth + normal G-buffer; indirect light bounces from the dish to the plate to the table surface
- [ ] **Gaussian Splatting for dish hero** — Replace `torusKnotGeometry` with a photogrammetry-trained 3D Gaussian Splat (`.splat` file) of an actual chef's dish, rendered at 60fps via the `@monogrid/gaussian-splats-3d` renderer integrated into the R3F canvas
- [ ] **Adaptive Temporal Anti-Aliasing (TAA)** — GPU-side temporal accumulation buffer produces film-grain-free visuals without MSAA performance penalty; 4× effective supersampling at native resolution

---

### 🔲 Sprint 13: AI Sommelier & Multimodal Pairing Engine
**Target: Q3 2026**

- [ ] **Gemini 2.0 Flash streaming panel** — `useChat` from Vercel AI SDK; chef suggestions stream token-by-token into a glassmorphism overlay embedded in the 3D scene via `<Html transform />`; response tokens drive a waveform animation on the `AudioToggle` bars in sync
- [ ] **Multimodal "Capture Your Palate"** — User photographs their current meal (or pantry); image sent to `gemini-2.0-flash` Vision API; AI returns a JSON flavour profile (`{ acidity: 0.7, umami: 0.9 }`) that restructures the 3D menu carousel into a personalised tasting order
- [ ] **On-device inference with Web Neural Network API (WebNN)** — A distilled ONNX flavour-embedding model runs entirely in the browser using WebNN hardware acceleration; zero server round-trips for initial recommendation, < 50ms inference latency on Apple Silicon
- [ ] **Conversational booking** — Replace the static `BookingGlassForm` with a multi-turn dialogue driven by `ai/rsc` React Server Components; server-side tool calls handle OpenTable slot lookup while streaming a natural-language confirmation message into the 3D portal
- [ ] **Personalised narrative** — Encrypted `localStorage` profile stores interaction fingerprint (sections viewed, dishes hovered, audio on/off); `NarrativeOverlay` text adapts tone — returning connoisseur vs. first-time explorer vs. special occasion

---

### 🔲 Sprint 14: View Transitions & Native Animation Layer
**Target: Q4 2026**

- [ ] **View Transitions API** — Replace GSAP page transitions with native `document.startViewTransition()` coordinated with the R3F canvas; morphing cross-fade between routes at GPU compositor level (120fps on ProMotion displays)
- [ ] **CSS Scroll-Driven Animations (native)** — Replace JS-heavy `ScrollTrigger` logic for typography reveals with `animation-timeline: scroll()` and `animation-range` — zero JavaScript overhead for 80% of scroll animations
- [ ] **CSS Houdini Paint Worklets** — Registered `goldInkBleed` paint worklet renders animated ink-bleed border effects on section cards using `CSS.paintWorklet.addModule()`; renders off-main-thread via the Worklet API
- [ ] **`@starting-style` entry animations** — All overlays (MenuOverlay, BookingGlassForm) use native CSS `@starting-style` for entry transitions — no JavaScript required, hardware-accelerated from first paint
- [ ] **WebCodecs video pipeline** — Chef's video biography decoded via `VideoDecoder` Web API at frame-level precision; individual video frames are extracted and mapped as live `VideoTexture` uniforms inside the 3D story vignettes at exact scroll positions

---

### 🔲 Sprint 15: The Reservation Intelligence Layer
**Target: Q4 2026**

- [ ] **Live 3D seating visualisation** — OpenTable Availability API populates a top-down 3D dining room floor plan (Three.js `InstancedMesh` tables) that shows occupied vs. available tables in real-time; hovered table reveals a contextual info card
- [ ] **Smart urgency engine** — Vercel Edge Config stores real-time demand signals; when > 80% capacity is booked for a date, the `BookingPortal` rings accelerate and pulse in a warning amber; copy adapts ("Only 2 moments remain for Saturday")
- [ ] **Guest memory via Vercel KV** — Returning visitors authenticated via Passkey (WebAuthn API, passwordless); their previous booking, dietary preferences, and favourite dish appear pre-loaded in the 3D portal with a personalised greeting message
- [ ] **Post-dining memory NFT prompt** — 24h after a reservation date, an email triggers a return visit; the site generates a unique generative `.glb` artefact of "their moment" based on booking timestamp + weather on the night

---

## 🌌 Year 3: Immersive Convergence — "The Moment"

**Goal:** The site transcends the screen entirely. It enters physical space via spatial computing, responds to the real-world dining environment, and generates artefacts that outlast the visit. Design publications cite it. Competing restaurants try to replicate it.

### Stack Additions — Year 3

| Technology | Purpose |
|---|---|
| `@react-three/xr` v6 + WebXR Device API | Apple Vision Pro visionOS + Meta Quest 3 immersive-ar/vr |
| WebRTC DataChannel + PartyKit | Real-time multiplayer shared 3D dining sessions |
| Web Bluetooth API | Physical table beacons trigger contextual AR overlays |
| WASM + Rust (compiled via `wasm-pack`) | High-performance procedural generation for artefacts |
| Neuronal Audio Synthesis (Magenta.js) | Generative ambient music that evolves with the session |

---

### 🔲 Sprint 16: WebXR Spatial Dining — Apple Vision Pro & Quest 3
**Target: Q1 2027**

- [ ] **visionOS Safari WebXR** — Full `immersive-ar` session on Apple Vision Pro; the 3D dish hovers life-size above the user's physical dining table, textured with the live Gaussian Splat material
- [ ] **Passthrough spatial menu** — In AR mode on Quest 3, all 6 menu items float at arm's reach in the physical room; users "reach" to select, triggering a haptic confirmation via the `GamepadHapticActuator` API
- [ ] **Shared spatial experience** — Two users can enter the same "dining room" simultaneously via WebRTC DataChannel + PartyKit; physics and garnish positions are synchronised at < 50ms latency; both see the same dish from their own spatial perspective
- [ ] **gaze-driven micro-interactions** — WebXR `XRHitTestSource` + eye-tracking input API: when a user's gaze dwells on any ingredient node for > 1.5 seconds, a provenance card materialises in space with the farm name, GPS origin, and harvest date

---

### 🔲 Sprint 17: Physical-Digital Integration
**Target: Q2 2027**

- [ ] **Web Bluetooth table beacons** — Each physical table has a BLE beacon; a QR code initiates `navigator.bluetooth.requestDevice()` pairing; the device then receives `notify` events as dishes arrive, triggering synchronised audio + visual cues in the WebXR layer
- [ ] **Physical menu → digital twin** — NFC tag embedded in the printed menu card; tapping with a phone opens an AR overlay that shows the 3D geometry of the dish and begins the booking flow without any typing
- [ ] **Live kitchen feed compositing** — A kitchen RTSP camera feed is decoded via `VideoDecoder` WebCodecs and mapped as a `VideoTexture` inside the 3D dish surface; diners at the table can see their dish being plated in real-time through the portal
- [ ] **Ambient biometric calibration** — With user consent, the front-facing camera uses `FaceDetector` API face-landmark tracking to estimate emotional engagement (smile width, brow position); the scene's ambient warmth and music tempo subtly respond

---

### 🔲 Sprint 18: Generative Artefact Engine
**Target: Q3 2027**

- [ ] **Wasm-powered procedural generation** — A Rust `wasm-pack` module generates unique 3D artefact geometry from a booking's domain signature (timestamp, guest count, weather hash, dish selected); each artefact is deterministically unique and non-reproducible
- [ ] **Downloadable `.glb` memory artefacts** — Post-dining email links to a personalised URL that renders the artefact in the 3D canvas with the booking date engraved as floating text; downloadable as a `.glb` for any spatial viewer or 3D printer
- [ ] **Artefact gallery as restaurant history** — `/artefacts` page: an infinite 3D starfield where every booking artefact orbits a central "restaurant star" — the site becomes a living, crowdsourced monument to every meal ever served
- [ ] **Generative Ambient Music** — Magenta.js `MusicRNN` model generates a unique 8-bar piano motif derived from the booking timestamp signature; plays as the artefact reveals; guests can download the MIDI file as part of their memory package

---

### 🔲 Sprint 19: The Living Digital Twin
**Target: Q4 2027**

- [ ] **Kitchen IoT integration** — Temperature sensors, prep-station timers, and oven state machines feed a Vercel serverless WebSocket endpoint; the 3D dish geometry responds in real-time: heat distortion shader activates when oven temp exceeds 200°C
- [ ] **Chef-presence detection** — A single Raspberry Pi RFID reader at the kitchen entrance triggers an event via Vercel Realtime; the dish "wakes up" with a slow gold bloom pulse when Chef is actively working — visible to diners via the AR layer
- [ ] **Dish provenance supply-chain** — Integration with a blockchain-anchored supply chain API; each ingredient node in the 3D dish has a scannable QR that links to its farm, harvest date, transit route, and carbon footprint — visible in AR as floating callouts

---

## 🌠 Year 4+: Transcendence — "Beyond the Screen"

**Goal:** L'Experience is no longer evaluated as a website. It is a spatial computing platform, a cultural artefact, and a case study in what happens when hospitality and technology achieve complete synthesis.

---

### 🔲 Sprint 20: Autonomous Scene Intelligence
**Target: 2028**

- [ ] **On-device LLM scene director** — A quantised Gemma 2B model running via WebAssembly in a dedicated Web Worker acts as an autonomous "scene director"; it observes the user's session behavioural signals and issues real-time instructions to the GSAP timeline (slow the narrative, dim the lights, introduce a secondary instrument layer)
- [ ] **Predictive pre-booking** — A federated ML model (trained on anonymised booking patterns via the Privacy Sandbox Protected Audience API) predicts when a loyal guest is likely to want to dine next and proactively prepares the 3D portal for their return visit
- [ ] **Ambient intelligence mesh** — Restaurant's smart-home layer (lighting, music, scent diffusers) is addressable via the site's backend; when a booking is confirmed, the physical restaurant begins configuring the table's environment 30 minutes before arrival

---

### 🔲 Sprint 21: Full Neural Visual Rendering
**Target: 2028+**

- [ ] **NeRF → 3D Gaussian Splat pipeline** — A fully automatic photogrammetry capture rig in the kitchen photographs each new seasonal dish from 150 angles; a background process produces a trained Gaussian Splat within 2 hours of the photo session, auto-deploying to the CDN
- [ ] **Real-time neural denoising** — WebNN-accelerated OIDN (Intel Open Image Denoise) runs in a post-process pass, eliminating path-tracing noise at < 4ms on Apple M-series and AMD RDNA3+; achieves photorealistic render quality at 60fps
- [ ] **WebGPU Ray Tracing** — As `RTX`-class WebGPU extensions standardise, migrate the lighting engine to hardware-accelerated ray tracing; caustics from wine glasses, accurate subsurface scattering through food textures, and true mirror reflections on the plate

---

## Design System Reference

```css
/* Celestial Gastronomy Design Tokens — v2.0 */
:root {
  /* Colours */
  --obsidian:       #050505;                   /* Primary background — charged void */
  --accent-gold:    #D4AF37;                   /* Primary accent — restraint, precision */
  --ethereal-teal:  #0F2C2E;                   /* Secondary accent — depth, mystery */
  --void-smoke:     #111111;                   /* Secondary background — depth layer */
  --lunar-silver:   #C0C0C0;                   /* Text primary — crisp, intentional */
  --ghost-white:    rgba(255,255,255,0.07);    /* Glassmorphism substrate */
  --amber-urgency:  #E8A020;                   /* Demand signal — Year 2 smart urgency */

  /* Typography */
  --font-serif:    'Cormorant Garamond', Georgia, serif;
  --font-sans:     'Inter', 'Helvetica Neue', sans-serif;
  --font-mono:     'JetBrains Mono', 'Fira Code', monospace; /* For data readouts */

  /* Motion */
  --ease-cinematic: cubic-bezier(0.19, 1, 0.22, 1);    /* Expo-out — majestic momentum */
  --ease-magnetic:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Back-out — physical spring */
  --ease-fluid:     cubic-bezier(0.4, 0, 0.2, 1);       /* Material Design 3 standard */

  /* Timing */
  --duration-instant:  100ms;
  --duration-swift:    300ms;
  --duration-measured: 700ms;
  --duration-cinematic: 1400ms;
}
```

---

## Success Metrics

| Year | Target Metrics |
|---|---|
| **Year 1 (2026)** | Lighthouse ≥ 95, Core Web Vitals all green, Awwwards "Site of the Day", FWA award submission |
| **Year 2 (2026–27)** | AI features cut booking abandonment by 40%, Smashing Magazine / CSS-Tricks feature, < 1.5s LCP on 4G mobile |
| **Year 3 (2027)** | Awwwards "Site of the Year" nominee, cited in 2+ spatial computing publications, 50k monthly visits from design community |
| **Year 4 (2028+)** | Taught in 3+ university web design courses, referenced in WWDC / Google I/O developer keynotes, licensing interest from other luxury hospitality brands |

---

## Evolving Architecture Overview

```
src/
├── app/                           # Next.js App Router (RSC + streaming)
│   ├── page.tsx                   # Celestial Gastronomy narrative layout
│   ├── layout.tsx                 # Root layout (suppressHydrationWarning)
│   ├── menu/page.tsx              # Sprint 6: Fluid 3D menu carousel
│   ├── gallery/page.tsx           # Sprint 7: Cinematic depth gallery
│   ├── story/page.tsx             # Sprint 8: Biographical film scroll
│   ├── artefacts/page.tsx         # Sprint 18: Generative memory archive
│   └── globals.css                # Design token system v2.0
├── components/
│   ├── canvas/
│   │   ├── Scene.tsx              # Master 3D orchestrator + camera
│   │   ├── LuxuryDish.tsx         # Culinary 3D artifact (garnish-reactive)
│   │   ├── GlistenMaterial.tsx    # WGSL Fresnel shader (Year 2: WebGPU)
│   │   ├── SpatialAudioController.tsx  # 3D + Magenta.js generative audio
│   │   ├── BookingPortal.tsx      # Armillary sphere with lunar sync
│   │   ├── BookingGlassForm.tsx   # Multi-turn AI dialogue form
│   │   ├── GaussianSplatDish.tsx  # Sprint 12: Photorealistic splat hero
│   │   ├── FluidSimulation.tsx    # Sprint 12: WebGPU compute SPH solver
│   │   └── WeatherParticles.tsx   # Sprint 11: Rain/snow InstancedMesh
│   ├── layout/
│   │   ├── Navbar.tsx             # Scroll-direction dynamic visibility
│   │   ├── MenuOverlay.tsx        # 8-column staggered grid reveal
│   │   ├── Preloader.tsx          # Letter-stagger cinematic reveal
│   │   ├── NarrativeOverlay.tsx   # AI-personalised scroll story panels
│   │   ├── FixedCanvas.tsx        # Fullscreen R3F canvas (WebGPU backend)
│   │   └── SmoothScroll.tsx       # Lenis + native scroll-driven animations
│   ├── xr/
│   │   ├── SpatialMenu.tsx        # Sprint 16: WebXR passthrough menu
│   │   ├── SharedDiningRoom.tsx   # Sprint 16: PartyKit multiplayer session
│   │   └── ProvenanceCallout.tsx  # Sprint 19: AR ingredient labels
│   └── shared/
│       ├── AudioToggle.tsx        # Spectrum bars + Magenta waveform sync
│       ├── CustomCursor.tsx       # Clean-dot + atmospheric ring
│       ├── Magnetic.tsx           # Magnetic hover physics
│       └── TextReveal.tsx         # Scroll-driven CSS + GSAP fallback
├── workers/
│   ├── sceneDirector.worker.ts    # Sprint 20: Gemma 2B LLM scene director
│   └── audioDecoder.worker.ts     # WebCodecs audio decode off-main-thread
├── wasm/
│   └── artefact_gen/              # Sprint 18: Rust WASM artefact generator
├── store/
│   └── useStore.ts                # Global Zustand state machine (audio, booking, scene, weather)
└── lib/
    ├── ai.ts                      # Vercel AI SDK + Gemini 2.0 Flash client
    ├── weather.ts                 # OpenWeatherMap + Temporal API pipeline
    ├── webnn.ts                   # WebNN ONNX flavour model loader
    └── bluetooth.ts               # Web Bluetooth beacon pairing utility
```

---

*Last Updated: April 2026 — Phase 1 "The Awakening" complete. Phase 2 "The Synthesis" begins Q2 2026.*
