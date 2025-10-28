# Urable 3D Visualizer Feature Page

A React component showcasing the Urable 3D Visualizer features, built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

2. Start the development server:
```bash
npm run dev
```

The application will be running at `http://localhost:5173` (or the next available port).

### Build for Production

3. Build the project:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
kyle_react/
├── public/
│   └── assets/
│       ├── icons/           # Feature icons (car, palette, light, proposal)
│       ├── logos/           # Manufacturer logos (STEK, 3M, Avery Dennison, XPEL)
│       ├── urable-logo-mint.svg
│       └── 3d-visualizer-preview.png
├── src/
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind CSS imports
├── urable_3_d_visualizer_feature_page_react_tailwind.jsx  # Main component
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Features

- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Modern React**: Built with React 18 and functional components
- **Fast Development**: Powered by Vite for instant hot reloading
- **Placeholder Assets**: All required images and icons are included as placeholders
- **Production Ready**: Optimized build process for deployment

## Component Features

The main component showcases:
- Hero section with gradient backgrounds
- Manufacturer compatibility logos
- Feature highlights with icons
- Modern dark theme design
- Call-to-action buttons

## Customization

Replace the placeholder assets in `/public/assets/` with your actual:
- Company logos
- Feature icons
- 3D visualizer screenshots
- Brand assets