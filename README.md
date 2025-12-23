# MT - Full Stack Developer Portfolio

A modern, professional, and responsive portfolio website built with React.js and Vite. Designed to showcase full stack development skills and attract internship opportunities.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-triggered animations and particle effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: ARIA labels and keyboard navigation support
- **Performance**: Fast loading with optimized Vite build

## 🎨 Sections

1. **Hero** - Professional introduction with animated background and CTAs
2. **About** - Personal story, education, and career goals
3. **Skills** - Categorized technical skills (Frontend, Backend, Database, Tools, Concepts)
4. **Projects** - Showcase of 6 full stack projects with details
5. **Education** - Academic background and certifications
6. **Experience** - Academic projects, freelance work, and learning journey
7. **Contact** - Functional contact form with validation and social links

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your information:

#### **Hero Section** (`src/components/Hero.jsx`)
- Replace "MT" with your name/initials
- Update the headline and description

#### **About Section** (`src/components/About.jsx`)
- Write your personal story
- Add your education details
- Update career goals

#### **Projects Section** (`src/components/Projects.jsx`)
- Replace example projects with your actual projects
- Add GitHub repository links
- Add live demo links (if available)

#### **Education Section** (`src/components/Education.jsx`)
- Update degree information
- Add your school/university name
- List your certifications

#### **Experience Section** (`src/components/Experience.jsx`)
- Add your actual work experience
- Update project details
- Customize achievements

#### **Contact Section** (`src/components/Contact.jsx`)
- Update email address
- Add LinkedIn profile URL
- Add GitHub profile URL

#### **Footer** (`src/components/Footer.jsx`)
- Update social media links
- Customize footer text

### 2. Profile Photo

1. Add your professional photo to the `/public` folder
2. Name it `profile.jpg` (or update the reference in `Hero.jsx`)
3. Uncomment the image code in `src/components/Hero.jsx`:

```jsx
// Replace the placeholder div with:
<img src="/profile.jpg" alt="MT - Full Stack Developer" />
```

### 3. CV/Resume

1. Add your CV PDF to the `/public` folder
2. Name it `cv.pdf`
3. The download button in the Contact section will automatically work

### 4. Color Scheme

To change colors, edit `src/index.css` and update the CSS custom properties:

```css
:root {
  --color-accent-blue: #3b82f6;  /* Primary accent color */
  --color-accent-gold: #f59e0b;  /* Secondary accent color */
  /* ... other colors */
}
```

### 5. Form Submission

The contact form currently logs to console. To make it functional:

1. Set up a backend API endpoint
2. Or use a service like [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/), or [Netlify Forms](https://www.netlify.com/products/forms/)
3. Update the `handleSubmit` function in `src/components/Contact.jsx`

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website.

---

**Built with ❤️ using React & Vite**
