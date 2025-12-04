# Axos Waitlist Landing Page Component

## Overview
A stunning waitlist landing page with Three.js animated background featuring Axos brand colors (purple/magenta gradient). The component includes email submission integrated with Supabase backend.

## Features
- ✅ Three.js animated light streak background with Axos purple/magenta colors
- ✅ Fully responsive design
- ✅ Email validation and submission
- ✅ Integration with Supabase Edge Functions
- ✅ Success/error state handling
- ✅ Duplicate email detection
- ✅ Glassmorphism UI design
- ✅ TypeScript support

## Files Created

### 1. Main Component
- **Path**: `/components/ui/waitlist-landing-page-with-countdown-timer.tsx`
- **Description**: Full-screen waitlist experience with Three.js background
- **Key Features**:
  - Three.js scene with animated light streaks
  - Email form with validation
  - Success confirmation UI
  - Error handling
  - Responsive design

### 2. API Route
- **Path**: `/app/api/waitlist/route.ts`
- **Description**: Next.js API route that proxies requests to Supabase Edge Function
- **Handles**:
  - Email validation
  - Supabase function calls
  - Error responses
  - Duplicate detection

### 3. Demo Component
- **Path**: `/components/blocks/waitlist-demo.tsx`
- **Description**: Simple wrapper to use the waitlist component

## Dependencies Installed

```bash
npm install three
npm install --save-dev @types/three
```

## Usage

### Basic Usage

```tsx
import { WaitlistExperience } from "@/components/ui/waitlist-landing-page-with-countdown-timer";

export default function WaitlistPage() {
  return <WaitlistExperience />;
}
```

### Integration in Your App

You can integrate this component in several ways:

#### Option 1: Replace entire page
```tsx
// app/waitlist/page.tsx
import { WaitlistExperience } from "@/components/ui/waitlist-landing-page-with-countdown-timer";

export default function WaitlistPage() {
  return <WaitlistExperience />;
}
```

#### Option 2: Add to existing demo
```tsx
// components/blocks/demo.tsx
import dynamic from "next/dynamic"

const WaitlistExperience = dynamic(
  () => import("@/components/ui/waitlist-landing-page-with-countdown-timer").then(m => ({ default: m.WaitlistExperience })),
  { ssr: true }
)

// Use in your component tree
<WaitlistExperience />
```

## Customization

### Brand Colors
The component uses Axos purple/magenta gradient. To modify colors, edit the shader in the component:

```typescript
// In waitlist-landing-page-with-countdown-timer.tsx
vec3 color1 = vec3(0.58, 0.2, 0.9);  // Purple
vec3 color2 = vec3(0.8, 0.3, 0.9);   // Magenta
vec3 color3 = vec3(0.6, 0.15, 0.85); // Deep purple
```

### Text Content
Modify the text in the component:

```tsx
<h1 className="...">
  AI-Powered Crypto Investing
</h1>
<p className="...">
  Smart recommendations. 24/7 monitoring. Zero emotions.
</p>
```

## API Integration

The component expects a POST endpoint at `/api/waitlist` that accepts:

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Success Response:**
```json
{
  "ok": true
}
```

**Error Responses:**
- `400`: Invalid email
- `409`: Duplicate email (already registered)
- `500`: Server error

## Supabase Configuration

Ensure your `.env.local` has:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive

## Performance

- Three.js scene is optimized for smooth 60fps animation
- Proper cleanup on unmount prevents memory leaks
- Responsive design adapts to all screen sizes

## Notes

- The component uses `'use client'` directive (Next.js 13+ App Router)
- Three.js canvas is positioned fixed for full-screen background
- Form submission is disabled during processing to prevent duplicates
- Component handles window resize automatically

