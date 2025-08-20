# WISKAIS Design System Guide

## 📖 Overview

This document outlines the design system architecture for the WISKAIS website, explaining the design flow, architectural decisions, and implementation patterns used throughout the project.

## 🏗️ Architecture Overview

The WISKAIS design system uses a **3-layer architecture** that ensures consistency, maintainability, and flexibility:

```text
Layer 1: Design Constants (/src/constants/design.ts)
    ↓
Layer 2: Global CSS (/src/app/globals.css)
    ↓
Layer 3: Component Implementation
```

---

## 🎨 Layer 1: Design Constants

**File**: `/src/constants/design.ts`

This is the **single source of truth** for all design decisions. It contains:

### Brand Colors

```typescript
export const COLORS = {
  // Brand Colors
  PRIMARY: '#003866',    // Dark blue - Main brand color
  SECONDARY: '#006db0',  // Medium blue - Secondary actions
  TERTIARY: '#deecf5',   // Light blue - Backgrounds/accents
  DARK: '#001b33',       // Very dark blue - Headers/footers
  
  // Semantic Colors
  SUCCESS: '#10b981',    // Green - Success states
  WARNING: '#f59e0b',    // Amber - Warning states
  ERROR: '#ef4444',      // Red - Error states
  INFO: '#3b82f6',       // Blue - Information
}
```

### Component Style Patterns

```typescript
export const BUTTON_VARIANTS = {
  PRIMARY: 'bg-primary text-white hover:bg-blue-700 focus:ring-primary',
  SECONDARY: 'bg-secondary text-white hover:bg-blue-600 focus:ring-secondary',
  OUTLINE: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  GHOST: 'text-primary hover:bg-gray-100 focus:ring-primary',
}

export const STATUS_BADGE_STYLES = {
  upcoming: 'bg-blue-100 text-blue-800',
  ongoing: 'bg-green-100 text-green-800',
  completed: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
}
```

### Layout & Typography

```typescript
export const CONTAINER_SIZES = {
  SM: 'max-w-sm',    // 384px
  MD: 'max-w-md',    // 448px
  '4XL': 'max-w-4xl', // 896px - Blog posts
  '7XL': 'max-w-7xl', // 1280px - Main layouts
}

export const HEADING_CLASSES = {
  1: 'text-4xl font-extrabold',
  2: 'text-3xl font-bold',
  3: 'text-2xl font-bold',
}
```

---

## 🌐 Layer 2: Global CSS

**File**: `/src/app/globals.css`

This layer translates design constants into CSS custom properties and configures Tailwind CSS v4.

### CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --color-primary: #003866;
  --color-secondary: #006db0;
  --color-tertiary: #deecf5;
  --color-dark: #001b33;
  
  /* Semantic Colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

### Tailwind CSS v4 Theme Configuration

```css
@theme inline {
  /* Brand colors for Tailwind */
  --color-primary: var(--color-primary);
  --color-secondary: var(--color-secondary);
  --color-tertiary: var(--color-tertiary);
  --color-dark: var(--color-dark);
  
  /* Blue scale mapping to brand colors */
  --color-blue-600: var(--color-primary);   /* Primary */
  --color-blue-500: var(--color-secondary); /* Secondary */
  --color-blue-50: var(--color-tertiary);   /* Tertiary */
}
```

### Typography Setup

```css
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@300;400;500;600;700;800&display=swap');

@theme inline {
  --font-sans: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

## 🧩 Layer 3: Component Implementation

Components use the design system through **4 different approaches**:

### A) Direct Tailwind Classes (Most Common)

**Use for**: Simple, standard styling

```tsx
// BlogCard.tsx
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
  <h3 className="text-xl font-bold text-gray-900 mb-2">
    {post.title}
  </h3>
</div>
```

### B) Design Constants (Complex Patterns)

**Use for**: Reusable component patterns

```tsx
// Button component (example)
import { BUTTON_VARIANTS, BUTTON_SIZES } from '@/constants/design';

const Button = ({ variant = 'primary', size = 'md' }) => (
  <button className={`${BUTTON_VARIANTS[variant.toUpperCase()]} ${BUTTON_SIZES[size.toUpperCase()]}`}>
    {children}
  </button>
);
```

### C) Dynamic Helper Functions

**Use for**: Context-dependent styling

```tsx
// BlogCard.tsx
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'news': return 'bg-blue-100 text-blue-800';
    case 'events': return 'bg-green-100 text-green-800';
    case 'announcements': return 'bg-yellow-100 text-yellow-800';
    case 'updates': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
```

### D) Custom CSS (Special Cases)

**Use for**: Complex third-party component styling

```css
/* EventCalendar.css */
.rbc-calendar {
  font-family: var(--font-sans);
  background-color: var(--color-white);
}

.rbc-event {
  background-color: var(--color-primary);
  border: none;
}
```

---

## 🔄 Design Flow Process

Here's how design decisions flow through the system:

```text
1. Design Decision → "We need a primary blue color"
    ↓
2. Constants File → COLORS.PRIMARY = '#003866'
    ↓
3. Global CSS → --color-primary: #003866
    ↓
4. Tailwind Builds → .bg-primary { background-color: var(--color-primary) }
    ↓
5. Components Use → className="bg-primary"
    ↓
6. Browser Renders → Blue background (#003866)
```

---

## 🎯 Design Decisions & Rationale

### Color Strategy

- **Primary Blue (#003866)**: Professional medical/academic feel
- **Blue Scale Mapping**: Allows both `bg-primary` and `bg-blue-600` (same result)
- **Semantic Colors**: Standard success/warning/error for user feedback
- **Category Colors**: Distinct colors for different content types

### Typography Choices

- **Muli Font**: Clean, readable sans-serif for medical content
- **Font Weights**: 300-800 range for proper hierarchy
- **Heading Scale**: Consistent sizing with `text-4xl` to `text-base`

### Layout Philosophy

- **Container Sizes**: Responsive breakpoints for different content types
- **Spacing Scale**: Consistent padding/margin using Tailwind's scale
- **Grid Systems**: CSS Grid and Flexbox for modern layouts

### Component Patterns

- **Variant-based Components**: Flexible components with multiple styles
- **Status-driven Styling**: Dynamic classes based on data state
- **Responsive Design**: Mobile-first approach with breakpoint modifiers

---

## 📋 Implementation Guidelines

### When to Use Each Approach

| **Scenario** | **Approach** | **Example** |
|--------------|--------------|-------------|
| **Simple styling** | Direct Tailwind | `className="bg-white p-4 rounded-lg"` |
| **Brand colors** | Design tokens | `className="bg-primary text-white"` |
| **Component variants** | Design constants | `BUTTON_VARIANTS.PRIMARY` |
| **Dynamic content** | Helper functions | `getCategoryColor(category)` |
| **Third-party libs** | Custom CSS | Calendar component styling |

### Color Usage Guidelines

```tsx
// ✅ Recommended
<div className="bg-primary text-white">        // Brand color
<div className="bg-blue-600 text-white">       // Same as above
<div className="bg-green-500">                 // Semantic color

// ❌ Avoid
<div style={{backgroundColor: '#003866'}}>     // Hardcoded
<div className="bg-[#003866]">                 // Arbitrary value
```

### Typography Guidelines

```tsx
// ✅ Recommended
<h1 className="text-4xl font-extrabold text-primary">     // Design system
<p className="text-base text-gray-700 leading-relaxed">   // Consistent spacing

// ❌ Avoid
<h1 style={{fontSize: '2.25rem', fontWeight: 800}}>      // Inline styles
<p className="text-[18px] text-[#374151]">               // Arbitrary values
```

---

## 🔧 Maintenance & Updates

### Adding New Colors

1. Add to `COLORS` object in `design.ts`
2. Add CSS variable in `globals.css`
3. Map to Tailwind theme if needed
4. Update this documentation

### Adding New Components

1. Use existing design tokens where possible
2. Create helper functions for dynamic behavior
3. Add new patterns to `design.ts` if reusable
4. Document new patterns in this guide

### Updating Existing Styles

1. Check if change affects design constants
2. Update constants first, then components inherit changes
3. Test across all components using the changed values
4. Update documentation

---

## 🎨 Visual Reference

### Brand Color Palette

```text
Primary:   #003866  ██  Dark professional blue
Secondary: #006db0  ██  Medium engaging blue  
Tertiary:  #deecf5  ██  Light background blue
Dark:      #001b33  ██  Very dark accent blue
```

### Semantic Colors

```text
Success:   #10b981  ██  Green for positive states
Warning:   #f59e0b  ██  Amber for caution
Error:     #ef4444  ██  Red for errors
Info:      #3b82f6  ██  Blue for information
```

### Typography Scale

```text
Heading 1: 36px, 800 weight  "Main page titles"
Heading 2: 30px, 700 weight  "Section headers"  
Heading 3: 24px, 700 weight  "Subsection headers"
Body:      16px, 400 weight  "Main content text"
Small:     14px, 400 weight  "Secondary information"
```

---

## 🚀 Benefits of This System

### ✅ Consistency

- All components use the same color values
- Typography follows consistent scale
- Spacing is predictable and harmonious

### ✅ Maintainability

- Design changes happen in one place
- No scattered hardcoded values
- Easy to update brand colors

### ✅ Developer Experience

- TypeScript autocompletion for constants
- Clear patterns for common use cases
- Flexible enough for edge cases

### ✅ Performance

- Tailwind purges unused styles
- CSS variables are browser-optimized
- No runtime JavaScript for styling

### ✅ Scalability

- Easy to add new components
- Patterns can be extracted and reused
- Documentation guides future development

---

## 📚 Related Documentation

- [Component Library](./components.md) - Individual component documentation
- [Design System Summary](../DESIGN_SYSTEM_SUMMARY.md) - Implementation history
- [Developer Guide](../DEVELOPER_GUIDE.md) - Setup and development workflow

---

*Last updated: August 15, 2025*
*Maintained by: WISKAIS Development Team*
