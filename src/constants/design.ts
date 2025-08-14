/**
 * Design System Constants
 * 
 * Centralized styling constants and theme values for consistent design.
 * These values should be used instead of hardcoded strings throughout the app.
 */

// ==========================================
// COLOR PALETTE
// ==========================================

export const COLORS = {
  // Brand Colors
  PRIMARY: '#003866',    // Dark blue
  SECONDARY: '#006db0',  // Medium blue  
  TERTIARY: '#deecf5',   // Light blue
  DARK: '#001b33',       // Very dark blue (headers/footers)
  
  // Semantic Colors
  SUCCESS: '#10b981',    // Green
  WARNING: '#f59e0b',    // Amber
  ERROR: '#ef4444',      // Red
  INFO: '#3b82f6',       // Blue
  
  // Grayscale
  WHITE: '#ffffff',
  GRAY_50: '#f9fafb',
  GRAY_100: '#f3f4f6',
  GRAY_200: '#e5e7eb',
  GRAY_300: '#d1d5db',
  GRAY_400: '#9ca3af',
  GRAY_500: '#6b7280',
  GRAY_600: '#4b5563',
  GRAY_700: '#374151',
  GRAY_800: '#1f2937',
  GRAY_900: '#111827',
} as const;

// ==========================================
// TAILWIND CLASS MAPPINGS
// ==========================================

export const BACKGROUND_CLASSES = {
  PRIMARY: 'bg-primary',
  SECONDARY: 'bg-secondary',
  TERTIARY: 'bg-tertiary',
  DARK: 'bg-dark',
  WHITE: 'bg-white',
  SUCCESS: 'bg-green-500',
  WARNING: 'bg-amber-500',
  ERROR: 'bg-red-500',
  INFO: 'bg-blue-500',
} as const;

export const TEXT_CLASSES = {
  PRIMARY: 'text-primary',
  SECONDARY: 'text-secondary',
  TERTIARY: 'text-tertiary',
  DARK: 'text-dark',
  WHITE: 'text-white',
  SUCCESS: 'text-green-500',
  WARNING: 'text-amber-500',
  ERROR: 'text-red-500',
  INFO: 'text-blue-500',
  GRAY_600: 'text-gray-600',
  GRAY_700: 'text-gray-700',
  GRAY_900: 'text-gray-900',
} as const;

// ==========================================
// BUTTON STYLES
// ==========================================

export const BUTTON_VARIANTS = {
  PRIMARY: 'bg-primary text-white hover:bg-blue-700 focus:ring-primary',
  SECONDARY: 'bg-secondary text-white hover:bg-blue-600 focus:ring-secondary',
  OUTLINE: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  GHOST: 'text-primary hover:bg-gray-100 focus:ring-primary',
} as const;

export const BUTTON_SIZES = {
  SM: 'px-3 py-1.5 text-sm',
  MD: 'px-4 py-2 text-sm',
  LG: 'px-6 py-3 text-base',
} as const;

// ==========================================
// SPACING & LAYOUT
// ==========================================

export const CONTAINER_SIZES = {
  SM: 'max-w-sm',    // 384px
  MD: 'max-w-md',    // 448px
  LG: 'max-w-lg',    // 512px
  XL: 'max-w-xl',    // 576px
  '2XL': 'max-w-2xl', // 672px
  '3XL': 'max-w-3xl', // 768px
  '4XL': 'max-w-4xl', // 896px
  '5XL': 'max-w-5xl', // 1024px
  '6XL': 'max-w-6xl', // 1152px
  '7XL': 'max-w-7xl', // 1280px
} as const;

export const PADDING_CLASSES = {
  NONE: '',
  SM: 'py-4',
  MD: 'py-8',
  LG: 'py-12',
  XL: 'py-16',
  '2XL': 'py-24',
} as const;

// ==========================================
// TYPOGRAPHY
// ==========================================

export const HEADING_CLASSES = {
  1: 'text-4xl font-extrabold',
  2: 'text-3xl font-bold',
  3: 'text-2xl font-bold',
  4: 'text-xl font-bold',
  5: 'text-lg font-semibold',
  6: 'text-base font-semibold',
} as const;

export const TEXT_SIZE_CLASSES = {
  XS: 'text-xs',
  SM: 'text-sm',
  BASE: 'text-base',
  LG: 'text-lg',
  XL: 'text-xl',
  '2XL': 'text-2xl',
  '3XL': 'text-3xl',
  '4XL': 'text-4xl',
} as const;

// ==========================================
// COMPONENT SPECIFIC STYLES
// ==========================================

export const STATUS_BADGE_STYLES = {
  upcoming: 'bg-blue-100 text-blue-800',
  ongoing: 'bg-green-100 text-green-800',
  completed: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
} as const;

export const EVENT_CATEGORY_COLORS = {
  meeting: 'bg-blue-400',
  symposium: 'bg-purple-400',
  repetitorium: 'bg-green-400',
  workshop: 'bg-orange-400',
} as const;

export const FORM_INPUT_CLASSES = {
  BASE: 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary',
  ERROR: 'border-red-500 focus:ring-red-500 focus:border-red-500',
  SUCCESS: 'border-green-500 focus:ring-green-500 focus:border-green-500',
} as const;

// ==========================================
// ANIMATION & TRANSITIONS
// ==========================================

export const TRANSITIONS = {
  DEFAULT: 'transition-all duration-200 ease-in-out',
  FAST: 'transition-all duration-150 ease-in-out',
  SLOW: 'transition-all duration-300 ease-in-out',
  COLORS: 'transition-colors duration-200',
  TRANSFORM: 'transition-transform duration-200',
} as const;

// ==========================================
// SHADOWS & EFFECTS
// ==========================================

export const SHADOW_CLASSES = {
  SM: 'shadow-sm',
  MD: 'shadow-md',
  LG: 'shadow-lg',
  XL: 'shadow-xl',
  NONE: 'shadow-none',
} as const;

// ==========================================
// BREAKPOINTS (for reference)
// ==========================================

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Combines class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Gets responsive classes for different screen sizes
 */
export function getResponsiveClasses(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  const classes = [mobile];
  if (tablet) classes.push(`md:${tablet}`);
  if (desktop) classes.push(`lg:${desktop}`);
  return classes.join(' ');
}
