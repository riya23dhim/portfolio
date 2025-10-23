# Riya Dhiman - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a dark glassmorphic theme.

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## Features

- Dark glassmorphic theme with gradient accents
- Responsive design for all screen sizes
- Smooth scroll animations with AOS
- Interactive components with hover effects
- Contact form with email integration
- Modern UI with Tailwind CSS

## Customization

### Add Your Profile Photo
Replace the placeholder in `src/components/HeroSection.tsx` with your actual photo:
```tsx
// Add your photo import and update the image src
import profilePhoto from '/path/to/your/photo.jpg';
// Then update the img src in the component
```

### Update Contact Information
Edit `src/components/ContactSection.tsx` and `src/components/Footer.tsx` to include your:
- Email address
- GitHub profile
- LinkedIn profile
- Location

### Modify Projects
Update the projects array in `src/components/ProjectsSection.tsx` with your actual projects:
- Project titles and descriptions
- Technology stacks
- Live demo URLs
- GitHub repository URLs

### Update Skills
Edit the skills arrays in `src/components/SkillsSection.tsx` to reflect your technical expertise.

### Change Content
Update personal information in:
- `src/components/AboutSection.tsx` - Your background and education
- `src/components/HeroSection.tsx` - Your introduction and tagline

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Deployment

This portfolio can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

For Vercel deployment:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- AOS (Animate On Scroll)
- Lucide React (Icons)

## License

MIT License - feel free to use this template for your own portfolio!