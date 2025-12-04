# Hero Section Component

A modern and responsive Hero Section component built with Next.js, React and Tailwind CSS.

## Included Components

- **Hero Section**: Main component with navigation, title, call-to-actions and images
- **AnimatedGroup**: Component for group animations using Framer Motion
- **Button**: Reusable button component from shadcn/ui

## How to run

1. Install dependencies (already installed):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project structure

```
├── app/                    # Next.js application directory
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── blocks/           # Block components
│   │   └── demo.tsx     # Demo component
│   └── ui/              # UI components
│       ├── animated-group.tsx
│       ├── button.tsx
│       └── hero-section-1.tsx
├── lib/                   # Utilities
│   └── utils.ts          # cn function for classes
└── styles/               # Global styles
    └── globals.css       # Global CSS and variables

```

## Technologies used

- **Next.js 14**: React Framework
- **TypeScript**: Static typing
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **Radix UI**: Accessible components 