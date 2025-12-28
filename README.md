# Sakura Portfolio 🌸

A premium, handcrafted personal portfolio website with a Japanese Sakura / Spring in Kyoto theme. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Features

- **Aesthetic**: Off-white rice paper texture, subtle sakura animations, and elegant typography (Noto Serif JP + Inter).
- **Responsive**: Mobile-first design that looks great on all devices.
- **Performance**: Optimized images, lightweight animations (Framer Motion), and clean code.
- **Content**: Centralized data management in `data/content.ts`.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

- **Content**: Edit `data/content.ts` to update your name, projects, and experience.
- **Colors**: Adjust CSS variables in `app/globals.css`.
- **Badge**: Modify `components/ui/HankoBadge.tsx` to change the initial in the stamp.

## Deployment on Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js. Deploy!

## Credits

- Fonts: Google Fonts (Inter, Noto Serif JP)
- Icons: Lucide React (optional, not heavily used to maintain minimalism)
- Texture: CSS Noise Generator

License: MIT
