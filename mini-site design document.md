# Temple Underground Marketing Minisite Template Design Document

## Purpose

This document defines the design strategy, architectural philosophy, technical stack, UX priorities, and scalable template system for the Temple Underground marketing minisite infrastructure.

This document is NOT intended to define backend systems, administrative applications, or operational infrastructure.

Instead, this document focuses specifically on:

* lightweight public-facing marketing minisites
* QR-code destination pages
* campaign landing pages
* highly targeted lead-generation experiences
* reusable website templates
* mobile-first conversion systems

These minisites exist to support and funnel users into the larger Temple Underground ecosystem.

The larger Temple Underground website acts as:

# the primary entity of truth

The minisites act as:

# focused conversion-oriented access points

---

## Core Minisite Philosophy

The minisite should:

* provide information immediately
* reduce friction
* feel lightweight and open
* communicate legitimacy and professionalism
* guide users toward taking a free class
* prioritize mobile interaction
* support rapid deployment of targeted campaigns

The minisite is NOT intended to:

* contain every piece of information
* replace the primary website
* overwhelm users with navigation
* behave like a large application

The objective is:

# fast comprehension and conversion

---

# Template System Philosophy

## Reusable Campaign Infrastructure

The minisite system should function as a reusable template architecture.

Once the foundational design system is established, new minisites should be rapidly deployable by:

* changing copy
* changing imagery
* changing CTA emphasis
* changing audience targeting
* changing campaign analytics

The underlying component structure should remain consistent.

---

## Audience-Specific Targeting

The minisite architecture should support highly targeted campaign variants.

Examples:

### Discipline-Oriented Targeting

* boxing-focused
* grappling-focused
* wrestling-focused
* MMA-focused
* self-defense-focused

### Lifestyle-Oriented Targeting

* parents
* beginners
* competitors
* morning trainees
* evening trainees
* third-shift workers
* fitness-focused participants

### Campaign-Oriented Targeting

* poster QR codes
* event handouts
* social media links
* local business partnerships
* instructor-specific campaigns

Each minisite should feel customized to its audience while remaining structurally consistent.

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

# User Experience Priorities

## Mobile-First Design

The overwhelming majority of traffic is expected to come from mobile devices.

The minisite should therefore prioritize:

* thumb-friendly navigation
* vertical readability
* fast loading on cellular networks
* compressed imagery
* immediate access to key information
* minimal friction
* reduced scrolling fatigue

Desktop support remains important, but mobile experience is the primary design target.

---

## QR-Code Access Patterns

Most users will arrive through:

* physical posters
* flyers
* business cards
* gym advertisements
* social media links
* direct messages

This means users are likely:

* already partially interested
* seeking immediate information
* not intending to deeply browse

The site should therefore prioritize:

* immediate clarity
* concise information hierarchy
* rapid CTA visibility
* minimal cognitive load

---

## Information Hierarchy

The user should quickly understand:

1. what Temple Underground is
2. what is being offered
3. when classes occur
4. where the gym is located
5. how much training costs
6. that the first class is free
7. how to contact or visit

Everything else is secondary.

---

# Technology Stack

## Internationalization

The minisite infrastructure must support both:

* English
* Spanish

This should be considered foundational infrastructure rather than an afterthought.

The architecture should support:

* bilingual routing
* reusable translated copy
* audience-targeted language variants
* scalable future localization

Potential approaches:

* Astro i18n routing
* translation JSON files
* content collections
* language-aware layouts

---

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

## Rendering Philosophy

The website should remain primarily:

* HTML
* CSS
* static content

JavaScript should only be introduced where interactivity meaningfully improves user experience.

The minisite should feel:

* immediate
* responsive
* lightweight
* stable

Avoid turning the marketing site into a large client-side application.

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

## Component Philosophy

The minisite architecture should rely on:

* reusable lightweight components
* highly consistent layout patterns
* modular campaign sections
* composable CTA structures

Potential reusable components:

* hero sections
* pricing cards
* schedules
* CTA bars
* testimonial sections
* instructor highlights
* image galleries
* campaign banners
* FAQ sections
* maps/location embeds

These components should be designed to be duplicated and recombined rapidly.

---

## UI Components

### ShadCN/UI

ShadCN should primarily be used as:

* a lightweight component foundation
* a utility for reusable UI primitives
* a source for isolated interactive elements

The objective is NOT to heavily depend on large runtime UI systems.

The site should remain primarily driven by:

* semantic HTML
* Tailwind styling
* lightweight component composition

Potential usage:

* buttons
* sheets
* dialogs
* cards
* forms
* collapsible sections

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

## Media Strategy

## Images

Images should:

* communicate authenticity
* demonstrate active training
* reinforce professionalism
* show atmosphere and culture
* support cinematic branding

Images should avoid:

* excessive clutter
* poor lighting
* overcompression artifacts
* fake-looking stock imagery

---

## Video Strategy

Embedded video may be used selectively.

Potential use cases:

* short training clips
* atmosphere reels
* coaching demonstrations
* sparring highlights
* facility previews

Video should:

* remain short-form
* avoid autoplay with sound
* prioritize mobile performance
* avoid excessive bandwidth usage

Embedded videos should support the marketing message rather than distract from conversion.

---

## Carousel Strategy

Carousels may be used selectively for:

* training examples
* class atmosphere
* testimonials
* gym imagery
* technique highlights

However:

* excessive carousel usage should be avoided
* performance cost should remain low
* interaction should remain intuitive on mobile

If possible, lightweight native scroll systems are preferred over highly complex carousel libraries.

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

# Pricing Structure

## First Class Free

The first class is completely free.

This should remain one of the primary marketing messages throughout the website and campaign infrastructure.

The goal is to reduce onboarding friction and encourage people to experience the environment before making a financial commitment.

---

## Drop-In Pricing

### Group Class Drop-In

* $20 per class

Drop-ins are intended for:

* occasional visitors
* travelers
* people exploring the environment
* participants with inconsistent schedules

---

## Monthly Membership Plans

Pricing is frequency-based.

These plans are intended for participants who can consistently attend group classes and take advantage of Sunday Open Mat.

### $100/month

Includes:

* 1 weekday group class per week
* Sunday Open Mat access

---

### $150/month

Includes:

* 2 weekday group classes per week
* Sunday Open Mat access

---

### $200/month

Includes:

* unlimited weekday group classes
* Sunday Open Mat access

---

## Membership Philosophy

The monthly structure is designed around training frequency and consistency.

The value of each membership increases significantly when participants:

* attend consistently
* utilize Open Mat
* participate in the broader training environment
* train with the community regularly

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

# Operational Information

## Current Schedule

### Adult Classes

Monday–Thursday:

* 7 AM – 9 AM
* 4 PM – 6 PM
* 7 PM – 9 PM

---

### Kids Classes

Monday–Thursday:

* 6 PM – 7 PM

---

### Open Mat / Open Training

Sunday:

* 3 PM

Open Mat is a less structured training session where participants can:

* train freely
* spar
* drill techniques
* study positions
* collaborate with teammates
* gain additional mat time

Open Mat is intended to support:

* experimentation
* repetition
* live training
* community interaction
* technical refinement

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
