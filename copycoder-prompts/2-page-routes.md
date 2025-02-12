Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /products
- /solutions
- /resources
- /company

Page Implementations:
/products:
Core Purpose: Showcase product catalog and enable product discovery

/filtering
Key Components:
- ProductGrid: Displays product cards in responsive grid
- FilterSidebar: Category, price, feature filters
- ProductSearch: Search bar with autocomplete
- ProductCard: Individual product display with image, price, quick actions
Layout Structure
- Two-column layout (desktop): FilterSidebar (25%) + ProductGrid (75%)
- Single column layout (mobile): Collapsible filters + scrolling product list
- Sticky header with search

/solutions:
Core Purpose: Present industry

/use-case specific solutions and capabilities
Key Components:
- SolutionCards: Featured solution highlights
- IndustrySelector: Industry-specific filtering
- CaseStudies: Customer success stories
- FeatureComparison: Solution comparison table
Layout Structure
- Hero section with solution overview
- Three-column card grid for solutions
- Full-width case study carousel
- Responsive comparison table

/resources:
Core Purpose: Provide educational and support materials
Key Components
- ResourceLibrary: Filterable content cards
- SearchBox: Content search
- ResourceCategories: Content type filtering
- DownloadManager: Resource download handling
Layout Structure
- Masonry grid layout for resources
- Sticky category navigation
- List view on mobile
- Download modal overlay

/company:
Core Purpose: Share company information and culture
Key Components
- TeamSection: Leadership and team profiles
- Timeline: Company history
- ValueProps: Company values and mission
- ContactInfo: Office locations and contact details
Layout Structure
- Single column narrative layout
- Full-width media sections
- Alternating content blocks
- Responsive contact cards

Layouts:
MainLayout:
- Applicable routes: All routes
- Core components
  - Navigation header
  - Footer
  - Breadcrumbs
  - Mobile menu
- Responsive behavior
  - Collapsible navigation on mobile
  - Fluid container widths
  - Consistent padding/margins
  - Breakpoints at 768px, 1024px, 1440px

ContentLayout
- Applicable routes: /resources, /solutions
- Core components
  - Sidebar navigation
  - Content area
  - Related content
- Responsive behavior
  - Sidebar collapses to top navigation on mobile
  - Grid adjusts columns based on viewport
  - Maintains readable content width

ProductLayout
- Applicable routes: /products
- Core components
  - Filter panel
  - Product grid
  - Quick view modal
- Responsive behavior
  - Filter panel becomes modal on mobile
  - Grid columns adjust (4-2-1)
  - Maintains touch-friendly targets
</page-structure-prompt>