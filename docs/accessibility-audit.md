# ADA Accessibility Audit Checklist

**Last Updated:** January 24, 2025  
**Compliance Target:** WCAG 2.1 Level AA

This document provides a comprehensive checklist for ensuring Oregon Town Car's website meets ADA (Americans with Disabilities Act) accessibility standards.

---

## ✅ 1. Color Contrast & Visual Design

### Requirements
- [ ] **Text contrast ratio:** Minimum 4.5:1 for normal text
- [ ] **Large text contrast ratio:** Minimum 3:1 for text 18pt+ or 14pt+ bold
- [ ] **Interactive elements:** Sufficient contrast for buttons, links, form fields
- [ ] **Focus indicators:** Visible and clear (minimum 3:1 contrast)
- [ ] **Non-text elements:** Icons and graphics have 3:1 contrast ratio
- [ ] **Color is not sole indicator:** Information conveyed through color also uses text/icons

### Testing Tools
- Chrome DevTools Lighthouse
- WebAIM Contrast Checker
- axe DevTools browser extension

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 2. Images & Visual Content

### Requirements
- [ ] **All images have alt text:** Descriptive and meaningful
- [ ] **Decorative images:** Empty alt attribute (`alt=""`)
- [ ] **Complex images:** Long descriptions provided via `aria-describedby` or adjacent text
- [ ] **SVG icons:** Proper ARIA labels or role="img" with title
- [ ] **Background images:** Important content not conveyed solely through CSS backgrounds
- [ ] **Image maps:** Proper alt text for each clickable area

### Testing Process
- [ ] Manual review of all image alt attributes
- [ ] Screen reader testing (NVDA/VoiceOver)
- [ ] Verify decorative vs. informational image classification

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 3. Keyboard Navigation

### Requirements
- [ ] **All interactive elements keyboard accessible:** No mouse-only functionality
- [ ] **Logical tab order:** Follows visual reading order
- [ ] **Skip navigation link:** Present and functional for bypassing repetitive content
- [ ] **Keyboard traps avoided:** Users can tab away from all elements
- [ ] **Focus visible:** Clear focus indicator on all interactive elements
- [ ] **Dropdown menus:** Keyboard accessible (arrow keys, Enter, Esc)
- [ ] **Modals/dialogs:** Focus management (trap within modal, return on close)

### Testing Process
1. Unplug mouse and navigate entire site with Tab, Shift+Tab, Enter, Space, Arrow keys
2. Test all forms, menus, accordions, modals
3. Verify focus order matches visual layout
4. Check skip link functionality

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 4. Focus Indicators

### Requirements
- [ ] **Visible on all elements:** Links, buttons, form fields, interactive widgets
- [ ] **Sufficient contrast:** 3:1 minimum against background
- [ ] **Not removed via CSS:** No `outline: none` without alternative
- [ ] **Custom focus styles:** Maintain or enhance default browser focus
- [ ] **Focus order logical:** Matches DOM order and visual layout

### Testing Process
- [ ] Tab through all pages and verify focus visibility
- [ ] Test on light and dark themes
- [ ] Verify custom focus styles meet contrast requirements

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 5. Semantic HTML & Structure

### Requirements
- [ ] **Proper heading hierarchy:** H1 → H2 → H3 (no skipping levels)
- [ ] **One H1 per page:** Descriptive and unique
- [ ] **Landmarks:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`
- [ ] **Lists:** Use `<ul>`, `<ol>`, `<li>` for list content
- [ ] **Tables:** Proper `<table>`, `<th>`, `<td>` with scope attributes
- [ ] **Forms:** Semantic form elements (`<form>`, `<fieldset>`, `<legend>`)
- [ ] **Buttons vs. links:** Buttons for actions, links for navigation

### Testing Process
- [ ] Use HTML validator (W3C)
- [ ] Review heading outline in browser DevTools
- [ ] Check landmark structure with screen reader
- [ ] Verify semantic element usage

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 6. ARIA Roles & Attributes

### Requirements
- [ ] **ARIA only when needed:** Prefer native HTML semantics
- [ ] **Valid ARIA usage:** Proper roles, states, and properties
- [ ] **No conflicting roles:** ARIA doesn't override native semantics
- [ ] **aria-label/aria-labelledby:** Provides accessible names when needed
- [ ] **aria-describedby:** Additional context for complex elements
- [ ] **aria-live regions:** For dynamic content updates
- [ ] **aria-expanded/aria-pressed:** For interactive widgets
- [ ] **aria-hidden:** Only on purely decorative elements

### Testing Process
- [ ] Validate ARIA with axe DevTools
- [ ] Screen reader testing to verify ARIA effectiveness
- [ ] Check for redundant or incorrect ARIA usage

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 7. Form Accessibility

### Requirements
- [ ] **All inputs have labels:** `<label>` properly associated with `<input>`
- [ ] **Placeholder not sole label:** Use proper `<label>` elements
- [ ] **Required fields indicated:** Visually and programmatically (`required` attribute)
- [ ] **Error messages clear:** Specific, actionable, and announced to screen readers
- [ ] **Error association:** `aria-describedby` linking errors to fields
- [ ] **Fieldsets and legends:** Grouping related form controls
- [ ] **Autocomplete attributes:** For common fields (name, email, phone, address)
- [ ] **Submit button accessible:** Keyboard and screen reader accessible

### Testing Process
1. Navigate all forms with keyboard only
2. Submit forms with errors and verify messaging
3. Test with screen reader (NVDA/VoiceOver)
4. Verify label associations in DevTools

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 8. Error Messaging & Validation

### Requirements
- [ ] **Errors clearly identified:** Visually and programmatically
- [ ] **Error suggestions provided:** How to fix the error
- [ ] **Errors not color-only:** Icons or text also indicate errors
- [ ] **Inline validation:** Real-time feedback for long forms
- [ ] **Focus on first error:** After submission, focus moves to first error
- [ ] **Success confirmation:** Clear confirmation after successful submission
- [ ] **aria-invalid:** Set to "true" on fields with errors
- [ ] **aria-live announcements:** Screen reader notifications for dynamic errors

### Testing Process
- [ ] Submit forms with invalid data
- [ ] Verify error messaging clarity
- [ ] Test with screen reader
- [ ] Check focus management after errors

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 9. Heading Hierarchy & Document Outline

### Requirements
- [ ] **One H1 per page:** Describes main content/page purpose
- [ ] **No skipped levels:** H1 → H2 → H3 (not H1 → H3)
- [ ] **Headings describe sections:** Accurate and descriptive
- [ ] **Logical nesting:** Subsections properly nested under parent headings
- [ ] **Visual vs. semantic:** Visual styling matches semantic hierarchy

### Testing Process
1. Use browser extension to view heading outline (e.g., HeadingsMap)
2. Verify hierarchy with screen reader
3. Check that visual heading sizes match semantic levels

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 10. Screen Reader Testing

### Requirements
- [ ] **Content read in logical order:** Matches visual layout
- [ ] **All interactive elements announced:** Type, state, name, role
- [ ] **Images announced properly:** Alt text read correctly
- [ ] **Links descriptive:** Context clear without surrounding text
- [ ] **Dynamic content announced:** ARIA live regions functional
- [ ] **Skip links work:** Allow bypassing navigation
- [ ] **Page title descriptive:** Unique and meaningful

### Testing Tools
- **Windows:** NVDA (free), JAWS (paid)
- **Mac:** VoiceOver (built-in)
- **Mobile:** TalkBack (Android), VoiceOver (iOS)

### Testing Process
1. Navigate entire site with screen reader
2. Test all interactive elements (forms, buttons, menus)
3. Verify announcements are clear and logical
4. Test on both desktop and mobile

### Current Status
- [ ] NVDA testing completed
- [ ] VoiceOver testing completed
- [ ] Mobile testing completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 11. Mobile & Responsive Accessibility

### Requirements
- [ ] **Touch targets:** Minimum 44x44px
- [ ] **Pinch-to-zoom enabled:** No user-scalable=no
- [ ] **Orientation support:** Works in portrait and landscape
- [ ] **Mobile navigation accessible:** Hamburger menus keyboard accessible
- [ ] **Touch gestures have alternatives:** Keyboard/assistive tech accessible
- [ ] **Responsive focus indicators:** Visible on mobile devices

### Testing Process
- [ ] Test on iOS and Android devices
- [ ] Verify touch target sizes
- [ ] Test with mobile screen readers (VoiceOver, TalkBack)
- [ ] Check responsive behavior at various screen sizes

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 12. Multimedia & Video Content

### Requirements
- [ ] **Captions:** Provided for all pre-recorded video
- [ ] **Transcripts:** Available for audio-only content
- [ ] **Audio descriptions:** For video with important visual information
- [ ] **Autoplay disabled:** Or user can easily pause
- [ ] **Keyboard controls:** Play, pause, volume accessible
- [ ] **No flashing content:** Avoid seizure triggers (max 3 flashes/second)

### Testing Process
- [ ] Review all video/audio content
- [ ] Verify caption accuracy and synchronization
- [ ] Test media player keyboard controls
- [ ] Check for autoplay violations

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 13. Link Accessibility

### Requirements
- [ ] **Descriptive link text:** Avoid "click here" or "read more" without context
- [ ] **External links indicated:** Visually and programmatically
- [ ] **New window warning:** Notify users of target="_blank"
- [ ] **Underlined or clearly styled:** Distinguishable from regular text
- [ ] **Focus visible:** Clear focus indicator on links
- [ ] **Skip repetitive links:** Skip navigation available

### Testing Process
- [ ] Audit all links for descriptive text
- [ ] Verify external link indicators
- [ ] Test link focus states
- [ ] Check link color contrast

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 14. Content Readability

### Requirements
- [ ] **Plain language:** Clear, concise, jargon-free
- [ ] **Reading level:** Appropriate for target audience (8th-10th grade recommended)
- [ ] **Line length:** 80 characters max for optimal readability
- [ ] **Line spacing:** Minimum 1.5x font size
- [ ] **Paragraph spacing:** Clear visual separation
- [ ] **Text resize:** Content readable at 200% zoom without horizontal scroll

### Testing Process
- [ ] Test text resize at 200% zoom
- [ ] Review content for plain language
- [ ] Check line length and spacing
- [ ] Use readability tools (Hemingway, Flesch-Kincaid)

### Current Status
- [ ] Audit completed
- [ ] Issues identified
- [ ] Issues resolved

---

## ✅ 15. Accessibility Testing Tools Setup

### Recommended Tools

#### Automated Testing
- [ ] **Lighthouse (Chrome DevTools):** Built-in accessibility audits
- [ ] **axe DevTools:** Browser extension for detailed WCAG checks
- [ ] **WAVE:** Web accessibility evaluation tool
- [ ] **Pa11y:** Command-line accessibility testing
- [ ] **Accessibility Insights:** Microsoft's testing tool

#### Manual Testing
- [ ] **Screen readers:** NVDA (Windows), VoiceOver (Mac)
- [ ] **Keyboard navigation:** Tab, Shift+Tab, Enter, Space, Arrow keys
- [ ] **Browser zoom:** Test at 200% magnification
- [ ] **Color contrast analyzers:** WebAIM, Contrast Checker

#### CI/CD Integration
- [ ] **pa11y-ci:** Automated accessibility testing in build pipeline
- [ ] **axe-core:** Integration with Jest/Cypress tests
- [ ] **Lighthouse CI:** Performance + accessibility checks on every commit

### Current Status
- [ ] Tools installed
- [ ] Team trained
- [ ] Automated checks configured

---

## 🎯 Priority Action Items

### High Priority (Fix Immediately)
- [ ] Keyboard navigation issues
- [ ] Missing form labels
- [ ] Insufficient color contrast
- [ ] Missing alt text on images
- [ ] Broken heading hierarchy

### Medium Priority (Fix Within Sprint)
- [ ] ARIA improvements
- [ ] Link text improvements
- [ ] Focus indicator enhancements
- [ ] Error messaging clarity

### Low Priority (Next Quarter)
- [ ] Video captions
- [ ] Content readability improvements
- [ ] Advanced ARIA patterns

---

## 📊 Audit Log

| Date | Auditor | Pages Tested | Issues Found | Issues Fixed | Status |
|------|---------|--------------|--------------|--------------|--------|
| 2025-01-24 | Internal | — | — | — | Initial setup |
| | | | | | |

---

## 🔗 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Deque University](https://dequeuniversity.com/)

---

## 📝 Notes

This checklist should be reviewed quarterly and updated as new features are added or accessibility standards evolve.
