# Temple Underground Marketing Infrastructure

## Purpose

This document defines the architecture, goals, design philosophy, technical direction, and deployment strategy for the Temple Underground public-facing marketing ecosystem.

The marketing infrastructure exists to:

* generate leads
* convert visitors into trial participants
* communicate the Temple Underground identity clearly
* support QR-code campaigns and physical marketing materials
* provide lightweight, fast, modern web experiences
* collect actionable analytics regarding visitor behavior and conversion

This repository and system are intentionally separated from:

* internal administrative applications
* operational dashboards
* financial systems
* waiver systems
* scheduling infrastructure
* future authenticated client applications

---

# Core Objectives

## Business Objectives

* Increase local lead acquisition
* Improve conversion from poster/QR traffic
* Improve professionalism and trust perception
* Provide immediate access to:

  * schedule
  * pricing
  * location
  * contact information
  * free class onboarding
* Support campaign-based marketing
* Establish a scalable web identity for Temple Underground

---

## Technical Objectives

* Maintain lightweight performance
* Prioritize mobile-first usability
* Minimize unnecessary JavaScript
* Keep hydration isolated and intentional
* Optimize images aggressively
* Ensure rapid deployment and iteration
* Separate public infrastructure from authenticated systems
* Keep architecture scalable without premature complexity

---

# Design Philosophy

## Desired Emotional Tone

The website should feel:

* open
* breathable
* modern
* disciplined
* cinematic
* intentional
* structured
* premium
* fast

The site should NOT feel:

* cluttered
* cramped
* grimy
* overproduced
* overly corporate
* slow
* chaotic
* difficult to navigate

---

## Core Branding Themes

Temple Underground should be positioned as:

* a complete combative system
* a disciplined environment
* a technically legitimate martial arts academy
* an integrated striking and grappling system
* a place for both beginners and serious competitors

Core conceptual themes:

* structure
* breath
* movement
* pressure
* discipline
* resilience
* integrated combat systems

---

# Architectural Philosophy

## Static-First Rendering

The marketing infrastructure should prioritize static rendering wherever possible.

Most pages should ship primarily as HTML and CSS.

React and JavaScript should only be introduced where interactivity is genuinely beneficial.

---

## Island Architecture

Interactive components should remain isolated.

Examples of acceptable interactive islands:

* mobile navigation menus
* contact forms
* galleries/carousels
* analytics-aware CTA systems
* embedded scheduling tools

Examples of content that should remain static:

* pricing
* schedules
* informational sections
* philosophy sections
* instructor bios
* testimonials
* most imagery

---

## Performance Philosophy

Performance is considered part of the branding experience.

Fast websites psychologically communicate:

* competence
* professionalism
* confidence
* discipline

Performance should therefore be treated as a first-class design priority.

---

# Technology Stack

## Frontend Framework

### Astro

Astro will serve as the primary framework for the marketing infrastructure.

Reasons:

* static-first architecture
* partial hydration support
* lightweight runtime
* excellent performance
* flexible React integration
* ideal for marketing sites and landing pages

---

## Styling

### Tailwind CSS

Tailwind CSS will be used for:

* utility-first styling
* rapid iteration
* responsive design
* maintainable visual systems

---

## Interactive Components

### React (Selective Usage)

React should only be used where:

* state is required
* user interaction is significant
* hydration is justified

React should NOT become the default rendering layer for all pages.

---

## UI Components

### ShadCN/UI

ShadCN components may be used selectively.

Priority components:

* buttons
* cards
* dialogs
* forms
* sheets

Avoid excessive use of:

* highly nested interactive systems
* unnecessary command menus
* excessive overlays
* large client-side state systems

---

## Animation

### GSAP

GSAP should be used selectively for:

* hero reveals
* section transitions
* cinematic motion
* subtle parallax
* opacity/transformation-based animations

Avoid:

* scroll hijacking
* excessive timeline complexity
* constant motion
* layout-heavy animations

Animations should support atmosphere rather than dominate attention.

---

# Image Strategy

## Goals

* maintain visual quality
* minimize file size
* support mobile users
* improve load performance
* support responsive rendering

---

## Preferred Formats

### Primary Formats

* AVIF
* WebP

### Fallback Formats

* JPG
* PNG (only when transparency is required)

---

## Responsive Images

Images should be generated in multiple resolutions.

Recommended sizes:

* 480px
* 768px
* 1200px
* 1920px

The browser should determine which asset is appropriate.

---

## Compression Workflow

All images should be optimized before deployment.

Potential tooling:

* Sharp
* Squoosh
* ImageOptim

Raw exports should never be uploaded directly.

---

## Lazy Loading

Below-the-fold images should use lazy loading wherever appropriate.

---

# Analytics Infrastructure

## Goals

The marketing infrastructure should gather actionable behavioral data.

This includes:

* page visits
* traffic sources
* QR campaign performance
* CTA interactions
* session duration
* conversion patterns
* button click events
* navigation behavior

---

## Desired Trackable Events

Examples:

* call button clicked
* text button clicked
* email button clicked
* directions button clicked
* first class CTA clicked
* redirected to primary website
* QR campaign source
* session duration
* bounce behavior

---

## Recommended Analytics Platforms

Potential options:

* PostHog
* Plausible Analytics
* Cloudflare Analytics

Analytics should remain lightweight and privacy-conscious when possible.

---

# Deployment Philosophy

## Goals

* rapid deployment
* low maintenance overhead
* high uptime
* CDN-backed asset delivery
* easy iteration

---

## Recommended Platforms

Potential deployment targets:

* Cloudflare Pages
* Vercel
* Netlify

---

## CDN Strategy

Static assets should be delivered through CDN infrastructure.

Benefits:

* geographic edge delivery
* reduced latency
* reduced server load
* improved caching

---

# Initial Website Structure

## Homepage

### Hero Section

Content priorities:

* Temple Underground Vale Tudo
* Boxing and Brazilian Jiu-Jitsu
* first class free CTA
* cinematic imagery
* immediate contact access

---

## Why Temple Underground

Communicate:

* integrated system
* coaching philosophy
* competition experience
* structure/breath/movement concepts
* family and community atmosphere

---

## Schedule Section

Clearly communicate:

* class hours
* open mat information
* beginner accessibility

---

## Pricing Section

Quick readability is prioritized.

Pricing should remain concise and scannable.

---

## CTA Section

Primary actions:

* call
* text
* email
* directions
* schedule free class

---

# Repository Philosophy

## Repository Scope

This repository is intended ONLY for:

* public-facing websites
* campaign pages
* lead funnels
* marketing infrastructure
* QR-code destination pages

This repository should NOT contain:

* operational dashboards
* financial systems
* waiver management
* backend infrastructure
* sensitive business logic
* private administrative tools

---

# Long-Term Vision

The marketing infrastructure should evolve into a scalable ecosystem capable of supporting:

* campaign-specific landing pages
* location-specific pages
* event pages
* instructor profiles
* media galleries
* SEO content
* lead funnels
* future client onboarding flows

The system should remain:

* lightweight
* modular
* maintainable
* visually disciplined
* performance-oriented

---

# Immediate Priorities

## Current Sprint Goals

Priority order:

1. Create repository
2. Initialize Astro project
3. Create homepage MVP
4. Optimize initial imagery
5. Configure analytics
6. Deploy publicly
7. Generate QR codes
8. Print and distribute marketing materials

Perfection is not required for initial deployment.

Deployment velocity and real-world feedback take priority over premature architectural refinement.
