Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
AI Employee Platform Landing Page Interface
</summary_title>

<image_analysis>

1. Navigation Elements:
- Main header navigation with: Products, Solutions, Resources, Company
- CTA button "Hire Ema" in top right
- Secondary navigation through "Learn More" button in hero section


2. Layout Components:
- Header height: 80px
- Hero section: full-width container
- Left column: 45% width for text content
- Right column: 55% width for interface visualization
- Padding: 32px horizontal, 64px vertical


3. Content Sections:
- Hero headline: "One employee Infinite roles"
- Descriptive text block
- Interactive UI demonstration
- Product screenshot showing Exchange interface
- Workflow visualization elements


4. Interactive Controls:
- Primary CTA: "Hire Ema" (green button)
- Secondary CTA: "Learn More" (outlined button)
- Dropdown menus in main navigation
- Interactive product demo interface


5. Colors:
- Primary Green: #27AE60
- Black: #000000
- White: #FFFFFF
- Background: #FAFAFA
- Text Gray: #4A4A4A


6. Grid/Layout Structure:
- 12-column grid system
- Max-width container: 1200px
- Responsive breakpoints at 768px, 992px, 1200px
- Flexible container spacing
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Navigation
│   │   └── Hero
│   ├── features/
│   │   ├── ProductDemo
│   │   └── CTAButtons
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Responsive navigation system
- Interactive product demonstration
- Dynamic content loading
- Smooth scroll animations
- Cross-browser compatibility


3. State Management:
```typescript
interface AppState {
├── navigation: {
│   ├── isMenuOpen: boolean
│   ├── activeSection: string
│   └── scrollPosition: number
├── }
├── demo: {
│   ├── currentStep: number
│   ├── isPlaying: boolean
│   └── demoData: DemoInterface
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/products/*',
├── '/solutions/*',
├── '/resources/*',
└── '/company/*'
]
```


5. Component Architecture:
- HeaderComponent
- NavigationComponent
- HeroSection
- ProductDemoComponent
- CTAButton
- AnimatedInterface


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 992px,
└── 'wide': 1200px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.