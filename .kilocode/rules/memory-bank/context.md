# Active Context: LeadStream - Call Tracking SaaS

## Current State

**Project Status**: ✅ Hero section implemented with interactive particle background

LeadStream is a call tracking and attribution SaaS for New Zealand businesses. The hero section now features a premium interactive background with network/data-flow particle effects.

## Recently Completed

- [x] LeadStream hero background implementation
- [x] Interactive particle canvas with network routes
- [x] Layered background system (gradient + texture + particles + content)
- [x] Mobile-first responsive sizing (25rem-37.5rem)
- [x] Repulse hover interaction for data packets

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page with hero | ✅ Ready |
| `src/components/Hero.tsx` | Hero component with layered background | ✅ Ready |
| `src/components/ParticleCanvas.tsx` | Interactive particle system | ✅ Ready |
| `src/app/globals.css` | Hero styles and gradients | ✅ Ready |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Hero Background Implementation

### Layer Structure
1. **Base gradient** - Dark obsidian/midnight blue radial gradients
2. **Texture layer** - Faint grid pattern (replaceable placeholder)
3. **Particle canvas** - Interactive network data packets
4. **Content layer** - Headline, copy, CTA

### Particle Behavior
- 30-40 particles representing data packets
- Square/rectangular shapes (not round)
- Directional movement (rightward flow)
- Long link distances for structured network feel
- Repulse interaction on hover (signal interference)

### Responsive
- min-height: 25rem (400px)
- max-height: 37.5rem (600px)
- Uses rem units for accessibility
- Mobile-first design

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| Mar 2026 | LeadStream hero background implementation complete |
