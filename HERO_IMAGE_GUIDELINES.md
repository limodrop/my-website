# Hero Image Guidelines

## Purpose
The hero image is the **first visual impression** visitors see. On mobile especially, it must instantly communicate luxury, professionalism, and chauffeur service quality.

---

## Image Specifications

### Subject Matter
**REQUIRED:**
- **Vehicle-forward composition** (primary focus)
- Luxury sedan or black SUV (Mercedes, BMW, Cadillac, or similar)
- Front 3/4 angle or side profile
- Clean, professional setting

**PREFERRED BACKGROUNDS:**
- Hotel entrance/dropoff
- Airport curbside
- Urban setting (neutral, not busy)
- Calm, upscale environment

**AVOID:**
- Busy compositions with multiple people
- Interior car shots
- Action/movement shots
- Bright, distracting backgrounds
- Rideshare-style imagery

### Technical Requirements
- **Minimum resolution:** 1920x1080 (Full HD)
- **Aspect ratio:** 16:9 or wider
- **Format:** JPG (optimized for web)
- **File size:** < 500KB after optimization
- **Orientation:** Landscape

### Lighting & Mood
- **Dark, cinematic lighting** preferred
- Overcast or golden hour
- Avoid harsh midday sun
- Moody > bright and cheerful
- Black vehicles photograph best

---

## Overlay Strategy

### Mobile (Primary)
```css
bg-black/80  /* 80% opacity - very strong */
```
- Text must be perfectly readable
- Image supports but doesn't compete
- Dark overlay creates luxury feel

### Tablet
```css
bg-black/70  /* 70% opacity */
```
- Slightly lighter for larger screen

### Desktop
```css
bg-black/65  /* 65% opacity */
```
- More image visible on large screens
- Still maintains readability

**Rule:** Never compromise text readability for image visibility

---

## Composition Checklist

Before using any hero image, verify:

- ✅ Vehicle is the primary subject
- ✅ Image feels premium and calm
- ✅ Background is clean, not distracting
- ✅ Lighting is cinematic/professional
- ✅ With overlay, text is perfectly readable
- ✅ Image instantly says "luxury chauffeur service"
- ✅ No visible branding conflicts
- ✅ Professional quality (not amateur)

---

## Design Principles

### Images Sell First
Users make judgments in **under 2 seconds**. The hero image must:
1. Signal luxury immediately
2. Communicate professionalism
3. Feel calm and premium
4. Support (not fight) the headline

### Fewer Elements = More Luxury
- One vehicle, minimal people
- Clean background
- No visual clutter
- Calm > flashy

### Mobile-First Mentality
- Most users will see the mobile version
- Mobile hero must work perfectly
- Desktop scales the same concept up
- **Never** redesign for desktop

---

## Current Implementation

**File:** `/public/images/hero/chauffeur-service.jpg`

**Alt text:** "Luxury chauffeur vehicle in Portland, Oregon"

**Used in:** [StaticHero.tsx](app/ui/hero/StaticHero.tsx)

---

## Future Image Sources

### Recommended Stock Photo Search Terms:
- "luxury black sedan chauffeur"
- "executive transportation vehicle"
- "premium black car hotel entrance"
- "professional chauffeur service Mercedes"
- "luxury SUV curbside"

### Avoid These Terms:
- "taxi" or "uber"
- "limousine" (unless stretched limo service)
- "car service" (too generic)
- "ride sharing"

---

## Testing Checklist

Before deploying a new hero image:

1. **Mobile Safari** (iOS)
   - [ ] Text perfectly readable
   - [ ] Image feels premium
   - [ ] No layout shifts
   - [ ] Fast load time

2. **Mobile Chrome** (Android)
   - [ ] Same as above

3. **Desktop** (1920x1080)
   - [ ] Image quality high
   - [ ] Text still prominent
   - [ ] Proper scaling

4. **Performance**
   - [ ] Image optimized
   - [ ] WebP format available
   - [ ] Lazy loading works
   - [ ] No flash of unstyled content

---

## Reference Examples

**GOOD:**
- Black Mercedes S-Class, 3/4 front angle, hotel entrance, dusk lighting
- Luxury SUV, side profile, airport curbside, overcast day, chauffeur standing by
- Executive sedan, front angle, clean urban background, minimal people

**BAD:**
- Busy airport scene with multiple cars and people
- Bright daylight interior shot
- Generic car in parking lot
- Action shot of moving vehicle
- Brightly colored vehicle

---

*Last updated: January 2026*
