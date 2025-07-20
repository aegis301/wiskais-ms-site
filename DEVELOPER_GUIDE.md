# MSREP Website - Developer Documentation

## Overview

The MSREP website is a modern web application built with Next.js 14, TypeScript, and Tailwind CSS. It serves as the main website for the Münster Repetitorium events for Anesthesiology and Intensive Care Medicine.

## Technology Stack

### Core Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Project Structure

```plaintext
msrep-site/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── data-protection/    # Privacy policy
│   │   ├── events/             # Events pages
│   │   │   ├── [id]/          # Dynamic event detail pages
│   │   │   └── page.tsx       # Events listing
│   │   ├── imprint/           # Legal imprint
│   │   ├── registration/      # Registration form
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx          # Home page
│   └── components/            # Reusable components
│       ├── Footer.tsx
│       └── Navigation.tsx
├── public/                    # Static assets
│   └── images/               # Image assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd msrep-site/nextjs-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Component Architecture

### Layout Components

#### `src/app/layout.tsx`

- Root layout component
- Includes Navigation and Footer
- Defines metadata and SEO tags

#### `src/components/Navigation.tsx`

- Responsive navigation bar
- Mobile-friendly hamburger menu
- Client-side component with state management

#### `src/components/Footer.tsx`

- Site-wide footer
- Links to important pages
- Contact information

### Page Components

Each page is implemented as a default export function with:

- Metadata for SEO
- Responsive design
- Accessibility features
- Type-safe props

## Routing

The application uses Next.js App Router with file-based routing:

- `/` - Home page
- `/about` - About page
- `/events` - Events listing
- `/events/[id]` - Dynamic event detail pages
- `/registration` - Registration form
- `/contact` - Contact page
- `/data-protection` - Privacy policy
- `/imprint` - Legal imprint

### Dynamic Routes

Event detail pages use dynamic routing with static generation:

```typescript
// Generate static params for all events
export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }));
}

// Generate metadata for each event
export async function generateMetadata({ params }: { params: { id: string } }) {
  const event = events[params.id];
  return {
    title: `${event.title} - MSREP`,
    description: event.description,
  };
}
```

## Data Management

### Event Data Structure

Events are stored in a TypeScript object with the following interface:

```typescript
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  status: "upcoming" | "ongoing" | "completed";
  registrationOpen: boolean;
  speakers: string[];
  topics: string[];
  schedule: { time: string; topic: string; speaker: string }[];
  price: { presence: number; online: number };
}
```

### Form Handling

Registration forms use client-side state management:

```typescript
const [formData, setFormData] = useState({
  // form fields
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission
};
```

## Styling

### Tailwind CSS

The project uses Tailwind CSS for styling with custom configuration:

```typescript
// tailwind.config.ts
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
}
```

### Design System

- **Colors**: Professional medical theme with blue primary colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Responsive**: Mobile-first design with responsive breakpoints

## SEO and Metadata

Each page includes comprehensive metadata:

```typescript
export const metadata = {
  title: "Page Title - MSREP",
  description: "Page description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Page Title",
    description: "Page description",
    type: "website",
    locale: "de_DE",
  },
};
```

## Performance Optimization

### Image Optimization

- Uses Next.js `Image` component for automatic optimization
- Lazy loading and responsive images
- WebP format support

### Code Splitting

- Automatic code splitting with Next.js
- Client-side components loaded only when needed

### Static Generation

- Event pages are statically generated at build time
- Improved performance and SEO

## Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow React functional component patterns
- Use hooks for state management
- Implement proper error handling

### Component Guidelines

- Keep components small and focused
- Use descriptive prop types
- Include proper accessibility attributes
- Follow responsive design principles

### Git Workflow

- Use descriptive commit messages
- Create feature branches for new development
- Test thoroughly before merging

## Deployment

### Build Process

```bash
npm run build  # Creates optimized production build
npm run start  # Starts production server
```

### Environment Variables

Create `.env.local` file for environment-specific variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Static Export (Optional)

For static hosting:

```bash
npm run build
npm run export
```

## Future Enhancements

### Planned Features

- Dark mode implementation
- Newsletter subscription functionality
- Event calendar integration
- User authentication for event management
- Real-time form submission
- Interactive maps for venue locations

### Technical Improvements

- API integration for dynamic content
- Database integration for event management
- Content Management System (CMS) integration
- Advanced analytics implementation

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run type-check`
   - Verify all imports are correct
   - Ensure all required environment variables are set

2. **Image Loading Issues**
   - Verify image paths in `public/images/`
   - Check image formats are supported
   - Ensure proper alt text is provided

3. **Styling Issues**
   - Clear browser cache
   - Check Tailwind class names
   - Verify responsive breakpoints

### Performance Issues

- Use React DevTools for component analysis
- Check bundle size with `npm run analyze`
- Optimize images and assets

## Support

For technical questions or issues:

- Review this documentation
- Check the project's issue tracker
- Contact the development team

---

**Last Updated**: July 2025
**Version**: 2.0.0
