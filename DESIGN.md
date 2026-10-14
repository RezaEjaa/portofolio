# Design System Inspired by PhotoFiltr

## 1. Visual Theme & Atmosphere

PhotoFiltr's design system embodies a modern, playful aesthetic centered on AI-powered creativity and instant transformation. The visual language combines bold, contemporary typography with a vibrant gradient backdrop that transitions through purples, pinks, and warm tones—creating an energetic, inviting atmosphere that signals innovation and ease of use. The system prioritizes clarity and directness, with generous whitespace and well-defined hierarchy guiding users through face-swapping workflows. Dark, solid shapes ground the design while soft shadows and rounded corners soften the interface, striking a balance between technical sophistication and approachable simplicity. The aesthetic is distinctly modern with retro-inspired undertones (clash font, bold shapes), making the product feel both cutting-edge and human-centered.

**Key Characteristics**
- Bold, approachable modern typography with clash aesthetic
- Vibrant purple-to-pink gradient backgrounds evoking energy and transformation
- High-contrast dark text on light neutrals for clarity
- Playful rounded corners and soft drop shadows
- Generous whitespace and breathing room in layouts
- Geometric, composed imagery with clear before/after contrasts
- Accessible color palette with semantic red accents for warnings
- Mix of filled and transparent component states 

## 2. Color Palette & Roles

### Primary
- **Primary Brand Purple** (`#725FEB`): Core interactive element color used for buttons, active states, and primary CTAs; conveys innovation and transformation
- **Primary Purple Variant** (`#6F5CE5`): Subtle shift for hover and secondary emphasis states

### Accent Colors
- **Accent Red** (`#EB5F61`): Secondary accent for highlights and call-to-attention moments
- **Accent Red Light** (`#F59797`): Softened red for lighter contexts and backgrounds
- **Accent Purple Light** (`#A497F5`): Very light purple tint for backgrounds and subtle fills

### Interactive
- **Interactive Purple** (`#725FEB`): Buttons, form focus states, and active navigation
- **Interactive Purple Dark** (`#6F5CE5`): Pressed or hover states on purple buttons
- **Interactive Light Background** (`#D7D3EC`): Light purple fill for secondary buttons and hover states

### Neutral Scale
- **Text Primary** (`#000000`): Main body text and high-contrast headings
- **Text Secondary** (`#1D1D1D`): Secondary text, slightly softer than pure black
- **Text Tertiary** (`#333333`): Muted text for captions and metadata
- **Text Light** (`#626570`): Light gray for disabled or less prominent text
- **Background White** (`#FFFFFF`): Primary surface and card backgrounds
- **Background Light** (`#FCFCFC`): Subtle off-white for layers and containers
- **Background Lighter** (`#FAFAFA`): Very subtle background tint
- **Background Lightest** (`#F3F4F6`): Lightest neutral fill

### Surface & Borders
- **Surface Default** (`#E8EAED`): Secondary surface and border reference
- **Surface Muted** (`#EFEFEF`): Muted surface for inactive tabs and secondary containers
- **Dark Surface** (`#120A22`): Deep navy/black for backgrounds and strong borders

### Semantic / Status
- **Warning** (`#FFE600`): Yellow accent for warning states and alerts; stands out distinctly

## 3. Typography Rules

### Font Family
**Primary:** Clashgrotesk Variable (400, 500, 600, 700 weights) with fallback to system sans-serif (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)

**Secondary:** Clashgrotesk Variable (same weights and fallback)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| **Display / H1** | Clashgrotesk Variable | 64px | 600 | 76.8px | normal | Hero headlines; maximum visual impact |
| **Heading Large / H2** | Clashgrotesk Variable | 48px | 600 | 57.6px | normal | Section titles and major headings |
| **Heading Medium / H3** | Clashgrotesk Variable | 24px | 700 | 33.6px | normal | Subsection titles and card headers |
| **Body Large** | Clashgrotesk Variable | 20px | 500 | 30px | normal | Primary body text and descriptions |
| **Body Regular** | Clashgrotesk Variable | 17.6px | 600 | 26.4px | normal | Standard body text and UI labels |
| **Button** | Clashgrotesk Variable | 19.2px | 600 | 28.8px | normal | Call-to-action buttons; bold weight for emphasis |
| **Input / Form** | Clashgrotesk Variable | 16px | 400 | normal | normal | Form fields and input text |
| **Caption** | Clashgrotesk Variable | 12px | 500 | 12px | normal | Small labels and helper text |

### Principles
- **Bold and confident:** Clashgrotesk's geometric forms and variable weight capability reinforce modern, innovative positioning
- **High legibility:** Large line heights (1.2x–1.5x) ensure comfortable reading and clear hierarchy differentiation
- **Weight for contrast:** 600–700 weights used for headings and CTAs; 400–500 for body; creates visual rhythm without decoration
- **Minimal letter spacing:** Relies on font weight and size shifts rather than letter-spacing adjustments for a cohesive, tight feel
- **Consistent baseline:** All text follows a shared vertical rhythm anchored to line-height multiples

## 4. Component Stylings

### Buttons

**Primary Button (Large CTA)**
- **Background:** `#725FEB`
- **Text Color:** `#FFFFFF`
- **Font Size:** 19.2px
- **Font Weight:** 600
- **Line Height:** 28.8px
- **Padding:** 12px 24px
- **Border Radius:** 6px
- **Border:** none
- **Box Shadow:** none
- **Hover State:** Background `#6F5CE5`, shadow `rgba(0, 0, 0, 0.1) 0px 4px 12px`
- **Active State:** Background `#6F5CE5`, box-shadow `#725FEB 6px 6px 0px 0px`

**Secondary Button (Light Purple)**
- **Background:** `#D7D3EC`
- **Text Color:** `#1D1D1D`
- **Font Size:** 19.2px
- **Font Weight:** 600
- **Line Height:** 28.8px
- **Padding:** 8px 20px
- **Border Radius:** 6px
- **Border:** 2px solid `#725FEB`
- **Box Shadow:** `#725FEB 6px 6px 0px 0px`
- **Hover State:** Background `#A497F5`, border color `#6F5CE5`
- **Active State:** Box shadow strengthened to `#6F5CE5 6px 6px 0px 0px`

**Tertiary Button (Ghost)**
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#1D1D1D`
- **Font Size:** 17.6px
- **Font Weight:** 600
- **Line Height:** 26.4px
- **Padding:** 0px 16px
- **Border Radius:** 0px
- **Border:** none
- **Box Shadow:** none
- **Hover State:** Background `rgba(0, 0, 0, 0.05)`
- **Active State:** Text color `#725FEB`

**Tertiary Button (Outline Small)**
- **Background:** `#EFEFEF`
- **Text Color:** `#1D1D1D`
- **Font Size:** 17.6px
- **Font Weight:** 600
- **Line Height:** 26.4px
- **Padding:** 8px 16px
- **Border Radius:** 0px
- **Border:** none
- **Box Shadow:** none
- **Hover State:** Background `#E8EAED`

**Pill Button (Small Tag)**
- **Background:** `#EFEFEF`
- **Text Color:** `#1D1D1D`
- **Font Size:** 17.6px
- **Font Weight:** 600
- **Line Height:** 26.4px
- **Padding:** 1px 6px
- **Border Radius:** 0px
- **Border:** none
- **Hover State:** Background `#E8EAED`

### Cards & Containers

**Main Content Card**
- **Background:** `#F6F5F5`
- **Text Color:** `#000000`
- **Padding:** 0px
- **Border Radius:** 8px
- **Border:** none
- **Box Shadow:** `rgba(0, 0, 0, 0.2) 2px 2px 9px 2px`
- **Width:** 100% (max 616px)
- **Min Height:** 500px
- **Hover State:** Shadow `rgba(0, 0, 0, 0.25) 2px 2px 12px 2px`

**Badge Card (Active Tab)**
- **Background:** `#6F5CE5`
- **Text Color:** `#FFFFFF`
- **Padding:** 3.2px 0px
- **Border Radius:** 6px
- **Border:** 2px solid `#120A22`
- **Box Shadow:** `#120A22 2px 2px 0px 0px`
- **Font Size:** 12px
- **Font Weight:** 500
- **Width:** auto (fits content)

**Dashed Upload Container**
- **Background:** `#FFFFFF`
- **Text Color:** `#1D1D1D`
- **Padding:** 40px 24px
- **Border Radius:** 8px
- **Border:** 2px dashed `#626570`
- **Box Shadow:** none
- **Font Size:** 17.6px
- **Font Weight:** 600
- **Hover State:** Background `#FAFAFA`, border color `#725FEB`
- **Active/Drag State:** Border color `#725FEB`, background `#F3F4F6`

### Inputs & Forms

**Text Input**
- **Background:** `#FFFFFF`
- **Text Color:** `#1D1D1D`
- **Font Size:** 16px
- **Font Weight:** 400
- **Line Height:** normal
- **Padding:** 8px 12px
- **Border Radius:** 6px
- **Border:** 2px solid `#000000`
- **Box Shadow:** none
- **Focus State:** Border color `#725FEB`, box-shadow `0px 0px 0px 3px rgba(114, 95, 235, 0.1)`
- **Disabled State:** Background `#F3F4F6`, border color `#626570`, text color `#626570`
- **Placeholder Color:** `#626570`

### Navigation

**Header Navigation Link**
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#1D1D1D`
- **Font Size:** 17.6px
- **Font Weight:** 600
- **Line Height:** 26.4px
- **Padding:** 0px 0px
- **Border Radius:** 0px
- **Border:** none
- **Box Shadow:** none
- **Hover State:** Text color `#725FEB`
- **Active State:** Text color `#725FEB`, border-bottom `2px solid #725FEB`

**Footer Link**
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#333333`
- **Font Size:** 17.6px
- **Font Weight:** 600
- **Line Height:** 26.4px
- **Padding:** 8px 16px
- **Hover State:** Text color `#725FEB`, underline `1px solid #725FEB`
- **Active State:** Text color `#725FEB`

### Badges & Status Labels

**Purple Badge**
- **Background:** `#D7D3EC`
- **Text Color:** `#1D1D1D`
- **Font Size:** 12px
- **Font Weight:** 600
- **Padding:** 4px 8px
- **Border Radius:** 4px
- **Border:** 1px solid `#725FEB`

**Warning Badge**
- **Background:** `#FFE600`
- **Text Color:** `#000000`
- **Font Size:** 12px
- **Font Weight:** 700
- **Padding:** 4px 8px
- **Border Radius:** 4px
- **Border:** 1px solid `#FFA500`

## 5. Layout Principles

### Spacing System

PhotoFiltr uses an 8px-based spacing scale derived from a 4px base unit. All margin, padding, and gap values are multiples of 4px for rhythm and alignment consistency.

- **4px:** Tight spacing for small gaps between related elements
- **8px:** Minimal padding within compact components (buttons, inputs)
- **12px:** Small gap between list items or form fields
- **16px:** Standard padding within cards and containers
- **20px:** Medium padding for larger content areas
- **24px:** Margin between sections at medium hierarchy
- **32px:** Padding for major content blocks
- **48px:** Large vertical margin between distinct sections
- **64px:** Gap between major layout regions (hero to content)
- **72px:** Padding for full-width sections
- **80px:** Large vertical padding for emphasized sections
- **96px:** Maximum margin between top-level layout blocks

### Grid & Container

- **Max Width:** 1200px for full-page layouts; 616px for focused content areas (cards, forms)
- **Column Strategy:** 12-column semantic grid with breakpoints at 320px (mobile), 768px (tablet), 1024px (desktop)
- **Gutter:** 24px between columns at desktop; collapses to 16px at tablet, 12px at mobile
- **Section Patterns:** Hero sections use full width with 80px vertical padding; content sections center within max-width container with 48px margin above/below

### Whitespace Philosophy

Generous whitespace creates breathing room and reduces cognitive load. Primary content is never crowded; minimum 20px padding inside cards, 24px margins between elements. Vertical spacing is slightly larger than horizontal (1.2x ratio) to guide eye flow and create visual hierarchy. The gradient background and soft shadows replace decorative borders, allowing whitespace itself to define structure.

### Border Radius Scale

- **0px:** Navigation links, ghost buttons, minimal UI elements where sharpness is intentional
- **4px:** Small badges, fine UI details
- **6px:** Buttons, inputs, small cards, and standard interactive elements
- **8px:** Medium cards and containers; primary content surfaces
- **10px:** Large cards and imagery containers
- **20px:** Oversized buttons or emphasized interactive zones
- **50% (circular):** Avatar circles, circular buttons, micro-interactions

### Border Widths

- **Thin (2px):** Button borders and input outlines; used for secondary buttons and form fields
- **Medium (3px):** Card borders and emphasized containers; used for elevated or highlighted cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| **Ground (No shadow)** | No box-shadow | Flat surfaces, buttons, disabled states |
| **Raised (Small)** | `rgb(18, 10, 34) 2px 2px 0px 0px` | Badge cards, secondary elevations |
| **Elevated (Medium)** | `rgba(0, 0, 0, 0.2) 2px 2px 9px 2px` | Primary content cards, modals, main containers |
| **Modal (Large)** | `rgb(0, 0, 0) 6px 6px 0px 0px` | Full-screen overlays, dialogs |
| **Hover (Medium+)** | `rgba(0, 0, 0, 0.1) 0px 4px 12px` (calculated) | Interactive hover states on buttons and cards |

**Shadow Philosophy:** PhotoFiltr employs a restrained shadow system that combines hard offsets (mimicking geometric, retro aesthetics) with soft blur for depth. Small 2–6px offsets create a playful, slightly elevated look without overwhelming the interface. The dark navy (`#120A22`) offset shadows provide contrast and sophistication, while blurred shadows (medium elevation) add subtle depth for layering. Shadows are minimal or absent on button surfaces to keep the interface lightweight and responsive.

### Opacity Levels

- **50% (0.50):** Hover backgrounds, semi-transparent overlays, disabled interactive states
- **90% (0.90):** Subtle opacity reductions for secondary text or muted backgrounds
- **Full (1.0):** All primary surfaces, text, and active states

### Z-index / Layering

- **Base (1):** Primary content and sections
- **Elevated (2):** Floating elements like tooltips or popovers
- **Modal (3):** Primary modals and focused overlays
- **Sticky (100):** Fixed headers and navigation
- **Sticky Top (101):** Sticky elements that sit above fixed nav
- **Toast (999999):** Notifications, alerts, and system messages (floats above all other content)

## 7. Do's and Don'ts

### Do

- **Do use Clashgrotesk Variable consistently** across all typography; its geometric forms are core to the brand identity
- **Do maintain the 8px spacing grid** for all margins, padding, and gaps; ensures visual rhythm and scanability
- **Do pair purple (`#725FEB`) with light purple (`#D7D3EC`)** for primary CTAs and secondary actions; creates cohesion
- **Do apply soft shadows** (`rgba(0, 0, 0, 0.2) 2px 2px 9px 2px`) to primary cards and modals for clear layering
- **Do round button corners to 6px** and card corners to 8px; softens the geometric aesthetic
- **Do use dark text (`#1D1D1D` or `#000000`)** on light backgrounds for accessible 7:1 contrast
- **Do group related buttons horizontally** with 12px gaps; aligns with spacing system
- **Do underline interactive text links** on hover; reinforces affordance
- **Do center full-width content** within a 1200px max-width container above 1024px breakpoint
- **Do use `#FFE600` (warning yellow) sparingly** for true alerts and error states only

### Don't

- **Don't use shadows heavier than `rgba(0, 0, 0, 0.2) 2px 2px 9px 2px`**; the design favors subtle depth
- **Don't mix more than two complementary fonts**; Clashgrotesk is the only font family
- **Don't apply border-radius > 8px** to standard components; breaks the geometric aesthetic
- **Don't use pure white (`#FFFFFF`) text on purple (`#725FEB`)** without testing contrast; minimum AA at 14px
- **Don't stack margins greater than 96px** without visual justification (e.g., hero to main content is acceptable)
- **Don't use red (`#EB5F61`) for non-error messaging**; it signals alarm and warning
- **Don't create buttons smaller than 42px tall** or less than 16px wide; violates touch target minimums
- **Don't place critical content below the fold without a visual anchor** (hero, CTA button, or scroll indicator)
- **Don't disable buttons without clear feedback**; always show disabled state with `#626570` text and `#F3F4F6` background
- **Don't forget to include focus states** on all interactive elements (at minimum a 2px outline or shadow)

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|------------|
| **Mobile** | 320px–767px | Single-column layout; full-width cards; padding reduces to 16px; font sizes reduce 10–15%; stacked navigation; hidden secondary elements |
| **Tablet** | 768px–1023px | Two-column grid; max-width 600px for content; padding 20px; spacing gaps reduce from 24px to 16px; navigation collapses to menu |
| **Desktop** | 1024px+ | Full layout; max-width 1200px; 12-column grid; padding 32px+; spacing gaps at full 24px; all navigation visible |

### Touch Targets

- **Minimum size:** 48px × 48px for all interactive elements (buttons, links, inputs)
- **Recommended spacing:** 12px minimum between touch targets to prevent mis-taps
- **Hover states required:** All desktop-only interactions must include visible hover feedback
- **Focus indicators:** Minimum 2px outline or 4px box-shadow around interactive elements for keyboard navigation

### Collapsing Strategy

- **Hero section:** Reduce `h1` from 64px to 48px on tablet, 36px on mobile; adjust `line-height` proportionally
- **Two-column layouts:** Stack to single column below 768px; maintain full-width padding
- **Navigation:** Horizontal menu at desktop → hamburger menu icon at tablet → full-screen menu at mobile
- **Cards:** Full width at mobile with 16px padding; 50% width at tablet (two per row); maintain margin gaps
- **Spacing:** Reduce all gaps by 25% at tablet, 50% at mobile; maintain proportional rhythm
- **Form fields:** Full width at mobile; side-by-side at 768px+ with 12px gap
- **Images:** Maintain aspect ratio; scale to 100% width on mobile within padding; cap at 616px on larger screens

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Interactive Purple (`#725FEB`)
- **Secondary Action:** Light Purple (`#D7D3EC`)
- **Warning/Alert:** Warning Yellow (`#FFE600`)
- **Body Text:** Text Primary (`#000000`) or Text Secondary (`#1D1D1D`)
- **Background Surface:** Background White (`#FFFFFF`)
- **Light Neutral:** Text Light (`#626570`)
- **Accent Highlight:** Accent Red (`#EB5F61`)

### Iteration Guide

1. **Start with Clashgrotesk Variable 600 weight for all headings; 500 weight for body.** Maintain the 8px baseline grid; every padding/margin value must be a multiple of 4px or 8px. Never mix fonts.

2. **Use `#725FEB` as the sole interactive color** for primary buttons, active states, and focus indicators. Pair with light purple (`#D7D3EC`) for secondary buttons only. Never use color decoratively.

3. **Apply shadows in layers:** No shadow for flat buttons, `#120A22 2px 2px 0px 0px` for raised cards, `rgba(0, 0, 0, 0.2) 2px 2px 9px 2px` for main content. Offset shadows (hard edge) mimic the geometric aesthetic; soft shadows add depth to modals.

4. **Round corners consistently:** 6px for buttons and inputs, 8px for cards, 0px for ghost buttons and navigation. This reinforces the modern-playful identity without overuse of curves.

5. **Dark text on light backgrounds always:** `#1D1D1D` on `#FFFFFF` or `#F3F4F6`; `#FFFFFF` on `#725FEB` only with WCAG AA contrast verification. Never reverse contrast without explicit design decision.

6. **Enforce 48px minimum touch targets** on mobile (buttons, clickable areas). Center full-width layouts at 1200px max; use 16px padding at mobile, 24px at tablet, 32px+ at desktop.

7. **Reserve `#FFE600` for critical warnings and error states only.** Use `#626570` for disabled/secondary text. Use `#EB5F61` (red) sparingly for destructive actions or critical information.

8. **Structure layouts with generous whitespace:** 24px margins between sections minimum, 48px between major content blocks. Group related UI into cards with consistent 8px padding; use dashed borders (`2px dashed #626570`) only for upload zones.

9. **Implement focus states on all interactive elements:** Minimum 2px outline (`2px solid #725FEB`) or box-shadow (`0px 0px 0px 3px rgba(114, 95, 235, 0.1)`) for keyboard and assistive device navigation.

10. **Test responsive behavior at 320px, 768px, and 1024px breakpoints.** Stack layouts to single column below 768px; reduce font sizes 10–15%; maintain spacing proportions (reduce gaps 25–50% at mobile). Always maintain 12px minimum spacing between interactive elements.