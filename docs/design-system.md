# Design System

This document outlines the WISKAIS design system including colors, typography, and usage guidelines.

## Colors

### Brand Colors

- **Primary**: `#003866` - Main brand color, used for navigation, primary buttons
- **Secondary**: `#006db0` - Secondary brand color, used for accents and secondary buttons  
- **Tertiary**: `#deecf5` - Light brand color, used for backgrounds and subtle elements

### Usage in Tailwind CSS

The design system integrates with Tailwind CSS using custom color mappings:

```css
/* Primary color */
bg-primary         /* Background: #003866 */
text-primary       /* Text: #003866 */
border-primary     /* Border: #003866 */

/* Secondary color */
bg-secondary       /* Background: #006db0 */
text-secondary     /* Text: #006db0 */
border-secondary   /* Border: #006db0 */

/* Tertiary color */
bg-tertiary        /* Background: #deecf5 */

/* Blue scale (mapped to brand colors) */
bg-blue-600        /* Primary color: #003866 */
bg-blue-500        /* Secondary color: #006db0 */
bg-blue-50         /* Tertiary color: #deecf5 */
```

## Typography

### Font Family

- **Primary**: Muli (Google Fonts)
- **Fallback**: System font stack including -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

### Usage

The Muli font is automatically applied to all text through the global CSS. No additional configuration needed.

## Components

### Button Variants

```tsx
// Primary button (uses primary color)
<Button variant="primary">Primary Action</Button>

// Secondary button (uses secondary color)  
<Button variant="secondary">Secondary Action</Button>
```

### HeroSection

The HeroSection component automatically uses the tertiary color as background:

```tsx
<HeroSection 
  title="Page Title"
  subtitle="Optional subtitle"
  description="Optional description"
/>
```

## Importing Design Tokens

### In TypeScript/React Components

```tsx
import { colors, typography } from '@/styles/design-tokens';
import { brandClasses, buttonVariants } from '@/styles/design-utils';

// Use color values directly
const primaryColor = colors.primary; // "#003866"

// Use utility classes
const className = brandClasses.bgPrimary; // "bg-blue-600"
```

### In CSS/SCSS

```css
/* Use CSS custom properties */
.my-element {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  font-family: var(--font-sans);
}
```

## File Structure

```plaintext
src/
├── styles/
│   ├── design-tokens.ts     # Core design tokens (colors, typography, spacing)
│   └── design-utils.ts      # Utility functions and Tailwind class mappings
├── app/
│   └── globals.css          # Global styles with CSS custom properties
└── components/
    ├── Button.tsx           # Updated to use design system
    ├── HeroSection.tsx      # Updated to use design system
    ├── Navigation.tsx       # Updated to use design system
    └── Footer.tsx           # Updated to use design system
```

## Examples

### Using Brand Colors in Components

```tsx
// Direct CSS custom properties
<div style={{ backgroundColor: 'var(--color-primary)' }}>
  Primary background
</div>

// Tailwind classes
<div className="bg-primary text-white">
  Primary background with white text
</div>

// Design utilities
import { brandClasses } from '@/styles/design-utils';
<div className={brandClasses.bgPrimary}>
  Primary background
</div>
```

### Navigation Hover States

Navigation links automatically use the secondary color for hover states:

```tsx
// Hover effect: hover:bg-secondary
<Link href="/about" className="hover:bg-secondary">About</Link>
```

### Custom Component with Design System

```tsx
import { colors } from '@/styles/design-tokens';

function CustomComponent() {
  return (
    <div 
      className="bg-tertiary border-l-4 border-primary p-4"
      style={{ 
        borderLeftColor: colors.primary,
        backgroundColor: colors.tertiary 
      }}
    >
      <h3 className="text-primary font-semibold">
        Component using design system
      </h3>
      <p className="text-gray-700">
        This component uses both Tailwind classes and direct color values.
      </p>
    </div>
  );
}
```

## Migration Notes

- Replaced Inter font with Muli
- Updated all blue color references to map to brand colors
- HeroSection default background changed from `bg-gray-100` to `bg-tertiary`
- Navigation background changed from `bg-gray-900` to `bg-primary`
- Button primary variant now uses `bg-primary` instead of `bg-blue-600`
- Footer background changed from `bg-gray-900` to `bg-primary`

## Best Practices

1. **Use design tokens**: Import from `design-tokens.ts` for consistent values
2. **Prefer Tailwind classes**: Use `bg-primary` over custom CSS when possible
3. **Use CSS custom properties for complex styling**: Access via `var(--color-primary)`
4. **Test across components**: Ensure color changes work across all UI elements
5. **Maintain contrast**: Ensure text remains readable on all backgrounds
