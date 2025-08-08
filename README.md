# Meet Soni - Portfolio Website

## 🚀 About Me

I'm **Meet Soni**, a Brisbane-based technologist with a global academic journey — from earning my Bachelor in Information Technology in India to completing my Master of Computer Science at The University of Queensland.

Beyond code and data, I'm driven by curiosity and a commitment to continuous growth. I enjoy working at the intersection of problem-solving and creativity — whether that means exploring emerging technologies, refining processes for efficiency, or collaborating with diverse teams to bring ideas to life.

For me, technology is a tool to enable better decisions, smoother experiences, and lasting impact.

> *"Learn deeply, adapt quickly, and create with purpose."* — Meet Soni

## 🛠️ Portfolio Features

### ✨ **Modern Design**
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark Theme**: Professional dark theme with purple accents
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Elements**: Hover effects and dynamic components

### 📱 **Key Sections**
- **Hero Section**: Animated introduction with typewriter effect
- **About Me**: Personal story and professional philosophy
- **Experience Timeline**: Interactive work experience showcase
- **Projects**: Portfolio of technical projects with live demos
- **Contact Form**: Functional email integration with EmailJS
- **Social Links**: Direct connections to professional profiles

### 🎯 **Technical Highlights**
- **React.js**: Modern component-based architecture
- **Bootstrap**: Responsive grid system and components
- **EmailJS**: Functional contact form with email delivery
- **GitHub Integration**: Live GitHub activity calendar
- **Particle.js**: Dynamic background animations
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/meetsoni/Portfolio.git

# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

### Personal Information
- Update personal details in `src/components/About/About.js`
- Modify experience timeline in `src/components/About/ExperienceTimeline.js`
- Add your projects in `src/components/Projects/Projects.js`

### Styling
- Main styles: `src/style.css`
- Component-specific styles in respective component files
- Color scheme can be modified in CSS variables

### Content
- Update profile image in `src/Assets/`
- Modify social links in `src/components/Home/Home2.js`
- Customize meta tags in `public/index.html`

## 📱 Responsive Design

This portfolio is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with side-by-side sections)
- **Tablet**: 768px - 1199px (Adaptive grid layouts)
- **Mobile**: < 768px (Stacked layout for optimal mobile experience)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure environment variables

### GitHub Pages
```bash
npm run build
git add build
git commit -m "Build for deployment"
git subtree push --prefix build origin gh-pages
```

## 🛠️ Built With

- **Frontend**: React.js, Bootstrap, CSS3
- **Animations**: Particle.js, CSS Animations
- **Email Service**: EmailJS
- **Deployment**: Vercel/Netlify
- **Version Control**: Git & GitHub