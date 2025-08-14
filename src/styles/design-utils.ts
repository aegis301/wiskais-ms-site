/**
 * Design System Utilities
 * 
 * This file provides utility functions and constants for working with the design system.
 * Use these utilities in your React components for consistent styling.
 */

import { colors, typography, spacing, borderRadius, shadows } from './design-tokens';

// CSS Custom Properties for inline styles
export const cssVars = {
  // Brand colors
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  tertiary: 'var(--color-tertiary)',
  dark: 'var(--color-dark)',
  
  // Font families
  fontSans: 'var(--font-sans)',
  fontMono: 'var(--font-mono)',
} as const;

// Tailwind class utilities for common brand colors
export const brandClasses = {
  // Background colors
  bgPrimary: 'bg-blue-600', // Maps to primary color
  bgSecondary: 'bg-blue-500', // Maps to secondary color  
  bgTertiary: 'bg-blue-50', // Light blue background
  bgDark: 'bg-blue-800', // Dark blue for headers/footers
  
  // Text colors
  textPrimary: 'text-blue-600',
  textSecondary: 'text-blue-500',
  
  // Border colors
  borderPrimary: 'border-blue-600',
  borderSecondary: 'border-blue-500',
  
  // Hover states
  hoverBgPrimary: 'hover:bg-blue-700',
  hoverBgSecondary: 'hover:bg-blue-600',
  hoverTextPrimary: 'hover:text-blue-700',
  hoverTextSecondary: 'hover:text-blue-600',
} as const;

// Common button variants using the design system
export const buttonVariants = {
  primary: `bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:border-blue-700`,
  secondary: `bg-blue-500 text-white hover:bg-blue-600 border-blue-500 hover:border-blue-600`,
  outline: `border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white`,
  ghost: `text-blue-600 hover:bg-blue-50`,
  tertiary: `bg-blue-50 text-blue-600 hover:bg-blue-100`,
  dark: `bg-blue-800 text-white hover:bg-blue-900 border-blue-800 hover:border-blue-900`,
} as const;

// Common spacing classes aligned with design tokens
export const spacingClasses = {
  xs: 'p-2',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
  '2xl': 'p-12',
} as const;

// Export design tokens for direct access
export { colors, typography, spacing, borderRadius, shadows };

// Utility function to create CSS custom properties from design tokens
export const createCSSVars = (prefix: string, obj: Record<string, any>): Record<string, string> => {
  const result: Record<string, string> = {};
  
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, createCSSVars(`${prefix}-${key}`, value));
    } else {
      result[`--${prefix}-${key}`] = String(value);
    }
  });
  
  return result;
};

const designUtils = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  cssVars,
  brandClasses,
  buttonVariants,
  spacingClasses,
};

export default designUtils;
