# Changelog

All notable changes to the MSREP website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2025-07-20

### Changed

- **Project Structure Simplification**
  - Moved all Next.js files from `nextjs-site/` subdirectory to root level
  - Retired Hugo folder to separate branch
  - Simplified development workflow with single-level project structure
  - Updated documentation to reflect new folder structure

### Improved

- **Component Architecture**
  - Extracted EventCard component for better code organization
  - Created centralized type definitions in `/src/types/`
  - Improved code readability and maintainability

## [2.0.0] - 2025-07-17

### Added

- **Complete migration from Hugo to Next.js 14**
- New modern React-based architecture with TypeScript
- Responsive design with Tailwind CSS
- **Component-based structure:**
  - Navigation component with mobile-responsive design
  - Footer component with site links
  - Reusable layout structure
- **New pages implemented:**
  - Home page with hero section, mission, partners, and newsletter signup
  - About page with detailed information about the repetitorium
  - Events page with dynamic event listing and filtering
  - Individual event detail pages with comprehensive information
  - Registration page with complete form functionality
  - Contact page with contact information and contact form
  - Data protection page (GDPR compliant)
  - Imprint page (German legal requirements)
- **Enhanced features:**
  - Dynamic event system with detailed event information
  - Professional registration form with validation
  - Improved navigation with clear site structure
  - SEO-optimized meta tags and structured data
  - Professional medical website design
- **Developer improvements:**
  - TypeScript for better code quality and development experience
  - Modern React hooks and functional components
  - Clean component architecture
  - Proper error handling and loading states

### Changed

- **Complete technology stack migration:**
  - From Hugo static site generator to Next.js 14
  - From Alpine.js to React
  - Maintained Tailwind CSS for styling consistency
- **Improved content structure:**
  - Removed blog functionality as requested
  - Focused on event-driven content structure
  - Enhanced user experience for event registration
- **Design improvements:**
  - Modernized UI with consistent design language
  - Better mobile responsiveness
  - Professional medical theme
  - Improved accessibility

### Removed

- Hugo static site generator and related files
- Alpine.js JavaScript framework
- Blog functionality and related content
- Legacy template structure
- Old navigation system

### Technical Details

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** React functional components with hooks
- **Forms:** Client-side form handling with validation
- **Images:** Next.js optimized Image component
- **Routing:** File-based routing with dynamic routes for events
- **SEO:** Built-in meta tags and Open Graph support

### Migration Notes

- All content from the original Hugo site has been preserved and migrated
- Image assets have been moved to the Next.js public directory
- Site structure has been reorganized for better maintainability
- All original functionality has been preserved or improved

## [1.x.x] - Previous Hugo Versions

### Legacy Hugo Implementation

- Hugo static site generator
- TailwindCSS for styling
- Alpine.js for interactivity
- Blog functionality
- Basic event information
- Static form handling

---

**Note:** This changelog tracks the major migration from Hugo to Next.js. For detailed commit history, please refer to the Git repository.
