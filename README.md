# MSREP Website

This is the official website for the Münster Repetitorium (MSREP) - continuing education events for Anesthesiology and Intensive Care Medicine.

Built with [Next.js 14](https://nextjs.org), TypeScript, and Tailwind CSS.

## Features

- 🏥 **Medical Event Management**: Dynamic listing and detailed pages for medical education events
- 📝 **Event Registration**: Comprehensive registration form with validation
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ♿ **Accessibility**: WCAG compliant design with proper semantic HTML
- 🔍 **SEO Optimized**: Meta tags, structured data, and search engine friendly URLs
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- ⚡ **Performance**: Server-side rendering and static generation for optimal performance

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

For detailed development documentation, see [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md).

### Quick Start

1. **Clone and install**

   ```bash
   git clone <repository-url>
   cd msrep-site
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```plaintext
msrep-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── events/       # Events listing and detail pages
│   │   ├── registration/ # Registration form
│   │   └── ...          # Other pages
│   ├── components/       # Reusable React components
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── ...                 # Configuration files
```

## Documentation

- [Developer Guide](./DEVELOPER_GUIDE.md) - Comprehensive development documentation
- [Migration Summary](./MIGRATION_SUMMARY.md) - Details about the Hugo to Next.js migration
- [Changelog](./CHANGELOG.md) - Project history and changes

## License

This project is private and proprietary to the MSREP organization.
