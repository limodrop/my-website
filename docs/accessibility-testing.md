# Accessibility Testing Guide

This document provides step-by-step instructions for testing Oregon Town Car's website for accessibility compliance.

## Quick Start

### 1. Automated Testing (Chrome DevTools Lighthouse)

1. Open Chrome DevTools (F12 or right-click > Inspect)
2. Navigate to the **Lighthouse** tab
3. Select **Accessibility** category only
4. Click **Analyze page load**
5. Review issues and implement fixes

**Target Score:** 95+ (out of 100)

### 2. Run Accessibility Audit Script

```bash
npm run audit:a11y
```

This will provide instructions for running Lighthouse from the command line.

---

## Manual Testing Checklist

### Keyboard Navigation Test

1. **Unplug or disable your mouse**
2. Use only keyboard to navigate:
   - `Tab` - Move forward through interactive elements
   - `Shift + Tab` - Move backward
   - `Enter` - Activate links and buttons
   - `Space` - Toggle checkboxes, activate buttons
   - `Arrow Keys` - Navigate menus, select options
   - `Esc` - Close modals and menus

3. **Verify:**
   - All interactive elements are reachable
   - Focus indicator is visible on all elements
   - Tab order matches visual layout
   - No keyboard traps (you can tab away from everything)
   - Skip navigation link works (bypasses header)

**Pages to Test:**
- Homepage
- Services pages
- Fleet pages
- Booking form
- Contact page
- Legal pages (Privacy, Terms, Accessibility, SMS Policy, Cookie Policy)

---

## Screen Reader Testing

### Windows (NVDA - Free)

1. **Download NVDA:** https://www.nvaccess.org/download/
2. **Install and launch NVDA**
3. **Basic Commands:**
   - `Insert + Down Arrow` - Start reading from current position
   - `Insert + Space` - Toggle browse/focus mode
   - `H` - Next heading
   - `Shift + H` - Previous heading
   - `K` - Next link
   - `B` - Next button
   - `F` - Next form field

4. **Test:**
   - All content is read in logical order
   - Images have meaningful alt text
   - Form labels are announced
   - Buttons and links are clearly identified
   - Page title is descriptive

### Mac (VoiceOver - Built-in)

1. **Enable VoiceOver:** `Cmd + F5`
2. **Basic Commands:**
   - `Control + Option + A` - Start reading
   - `Control + Option + Right Arrow` - Move to next item
   - `Control + Option + Cmd + H` - Next heading
   - `Control + Option + Space` - Activate link/button

3. **Test same criteria as NVDA above**

### Mobile Testing

**iOS (VoiceOver):**
1. Settings > Accessibility > VoiceOver > On
2. Swipe right/left to navigate
3. Double-tap to activate

**Android (TalkBack):**
1. Settings > Accessibility > TalkBack > On
2. Swipe right/left to navigate
3. Double-tap to activate

---

## Browser Extensions for Accessibility Testing

### Recommended Extensions

1. **axe DevTools (Free)**
   - Install: [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)
   - Usage: DevTools > axe DevTools tab > Scan all of my page

2. **WAVE Evaluation Tool (Free)**
   - Install: [Chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
   - Usage: Click extension icon on any page

3. **Accessibility Insights for Web (Microsoft - Free)**
   - Install: [Chrome](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni)
   - Features: Automated checks, tab order visualization, color contrast checker

4. **Color Contrast Analyzer**
   - Install: [Chrome](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)
   - Check text/background contrast ratios

---

## Specific Test Cases

### 1. Form Accessibility Test

**Booking Form:**
- [ ] All input fields have visible labels
- [ ] Labels are programmatically associated with inputs
- [ ] Required fields are marked with `*` and `required` attribute
- [ ] Error messages are clear and specific
- [ ] Errors are associated with fields (`aria-describedby`)
- [ ] Form can be completed using keyboard only
- [ ] Success/error states are announced to screen readers

**Test with screen reader:**
1. Navigate to booking form
2. Tab through each field
3. Verify field labels are read aloud
4. Submit with errors and verify error announcements

### 2. Navigation Menu Test

**Desktop Navigation:**
- [ ] All menu items keyboard accessible
- [ ] Dropdown menus open/close with keyboard (Enter, Esc)
- [ ] Focus trapped within dropdowns when open
- [ ] Menu items announced correctly by screen reader

**Mobile Menu (Hamburger):**
- [ ] Menu button has accessible label
- [ ] Menu opens/closes with keyboard
- [ ] Focus moves into menu when opened
- [ ] Can close with Esc key
- [ ] Touch targets minimum 44x44px

### 3. Image Alt Text Audit

**Review all images:**
- [ ] Informational images have descriptive alt text
- [ ] Decorative images have empty alt (`alt=""`)
- [ ] Complex images (charts, diagrams) have detailed descriptions
- [ ] Alt text is concise but descriptive
- [ ] No "image of" or "picture of" prefix

**Test:** Use screen reader to navigate through pages and listen to alt text

### 4. Color Contrast Check

**Minimum Requirements:**
- Normal text: 4.5:1
- Large text (18pt+): 3:1
- UI components: 3:1

**Test with:**
- Chrome DevTools > Elements > Color picker
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Color Contrast Analyzer extension

**Critical Elements to Check:**
- Body text on background
- Links (default, hover, focus)
- Buttons (all states)
- Form inputs and labels
- Error messages

### 5. Heading Structure Audit

**Requirements:**
- One H1 per page (describes main content)
- No skipped heading levels (H1 → H2 → H3, not H1 → H3)
- Headings in logical order
- Headings describe their sections accurately

**Test with:**
- HeadingsMap extension (shows heading outline)
- Screen reader heading navigation (H key in NVDA)
- Chrome DevTools > Elements > Accessibility tree

**Check all major pages:**
- Homepage
- Services pages
- Fleet pages
- City pages
- Legal pages

### 6. Link Text Audit

**Avoid:**
- "Click here"
- "Read more" (without context)
- URLs as link text
- Links with only icons (no text)

**Good Practice:**
- Descriptive link text
- Unique link text (or provide context)
- External links indicated (icon + text)

**Test:** Use screen reader to navigate by links (K key in NVDA)

---

## Testing Schedule

### Every Release
- [ ] Lighthouse accessibility audit (target: 95+)
- [ ] Keyboard navigation test on new/changed pages
- [ ] Form validation with keyboard and screen reader

### Monthly
- [ ] Full screen reader test (NVDA or VoiceOver)
- [ ] Color contrast audit
- [ ] Heading hierarchy check

### Quarterly
- [ ] Mobile accessibility test (iOS + Android)
- [ ] Third-party accessibility audit consideration
- [ ] Review accessibility statement and update if needed

---

## Common Issues and Fixes

### Issue: Missing Form Labels
**Fix:** Add `<label>` element with `for` attribute matching input `id`

```html
<!-- Bad -->
<input type="text" placeholder="Name" />

<!-- Good -->
<label for="name">Name</label>
<input type="text" id="name" />
```

### Issue: Low Color Contrast
**Fix:** Adjust text or background color to meet 4.5:1 ratio

```css
/* Bad - contrast ratio 2.8:1 */
color: #999;
background: white;

/* Good - contrast ratio 4.6:1 */
color: #757575;
background: white;
```

### Issue: Missing Alt Text
**Fix:** Add descriptive alt attribute to images

```html
<!-- Bad -->
<img src="sedan.jpg" />

<!-- Good -->
<img src="sedan.jpg" alt="Black Mercedes S-Class sedan" />

<!-- Decorative -->
<img src="decoration.jpg" alt="" />
```

### Issue: Button vs. Link Confusion
**Fix:** Use `<button>` for actions, `<a>` for navigation

```html
<!-- Bad - div styled as button -->
<div onclick="submit()">Submit</div>

<!-- Good - semantic button -->
<button type="submit">Submit Booking</button>

<!-- Good - link for navigation -->
<a href="/services">View Services</a>
```

---

## Resources

### Official Guidelines
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)

### Testing Tools
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [axe-core](https://github.com/dequelabs/axe-core)
- [Pa11y](https://pa11y.org/)

### Learning Resources
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Deque University](https://dequeuniversity.com/)

---

## Contact for Accessibility Issues

If you encounter accessibility barriers on our website:

- **Email:** info@oregontowncar.com
- **Phone:** (503) 353-7755
- **Report:** Use our [Accessibility Statement](https://oregontowncar.com/en/accessibility) feedback form

We are committed to responding to accessibility feedback within 3 business days.
