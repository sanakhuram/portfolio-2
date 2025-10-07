export type Project = {
  title: string;
  category: string; 
  description: string; // short description for list page
  imageUrl: string; // list page / thumbnail
  detailImageUrl?: string; // slug page image inside frame
  slug: string;
  liveUrl: string;
  repoUrl: string;
  detailedDescription: string; // text shown on slug page
  techStack: string[];
};
export const projects: Project[] = [
{
  category:'Academic Project',
  title: 'Auction Hub',
  description: 'Online auction platform with CURD functionality',
  imageUrl: '/images/auction.jpg',
  detailImageUrl: '/images/auction-detail.jpg',
  slug: 'auction-hub',
  liveUrl: 'https://auction-hub.netlify.app/',
  repoUrl: 'https://github.com/sanakhuram/auction-hub-SP2',
  detailedDescription: `
Project Overview:
This project was built as part of the Semester 2 Project Exam for web development. Auction Hub is a professional online auction platform that allows registered users to create, edit, delete listings, place bids, track bid history, and view other users' profiles and bids. Non-registered users can browse listings only.

Updated Tech Stack:
- JavaScript (Vanilla): Core application logic and API handling
- Vite.js: Fast frontend build tool
- Tailwind CSS: Utility-first CSS framework for UI styling
- LocalStorage: JWT token storage for authentication
- Noroff API (REST API): Backend API for managing auctions
- Netlify: Deployment and hosting
- ESLint: Linting tool to enforce code quality
- Prettier: Code formatter for consistent styling
- Husky: Git hooks for pre-commit checks
- Playwright: End-to-end testing framework

Features:
- User Authentication: Secure login and registration for buyers and sellers
- Listing Management: Create, edit, and delete own listings
- Bidding System: Place bids, track bid history, view highest bids, see winning bids
- Profile Management: View and update your profile, avatar, and banner
- Guest Access: Non-registered users can browse listings but cannot bid
- Dark/Light Mode: Full theme toggle support
- Search Functionality: Search for listings with refined filtering options
- Scrollable Content: Smooth scrolling for long lists of auctions
- Custom Styles: Custom color classes and shadows applied throughout the UI
- Viewing Others: Logged-in users can view other profiles and their bid history

How to Use the App:
1. Sign Up/Login:
   - Register using your stud.noroff.no email
   - Receive 1,000 credits to start bidding
   - Login to start bidding or selling

2. Create a Listing:
   - Add title, description, images, and deadline
   - Earn credits when your item is sold

3. Edit & Delete Listings:
   - Modify title, description, images, or deadline
   - Delete listings before they have bids

4. Place a Bid:
   - Enter a bid amount to compete
   - Credits are deducted if you win

5. Manage Profile:
   - Update avatar, banner, and profile details
   - Track own bids, winning bids, and balance

6. View Others:
   - View other users’ profiles and their bidding history

7. Search & Browse:
   - Refined search with filtering
   - Scrollable listing view with smooth UI

`,
  techStack: [
    'JavaScript',
    'Vite',
    'Tailwind',
    'API',
    'LocalStorage',
    'Netlify',
    'ESLint',
    'Prettier',
    'Husky',
    'Playwright',
  ],
},

  {
    title: 'Sociogram',
    category:'Academic Project',
    description: 'Social media app with full CRUD functionality.',
    imageUrl: '/images/sociogram.jpg',
    detailImageUrl: '/images/sociogram-detail.jpg',
    slug: 'sociogram',
    liveUrl: 'https://sociogram-app.netlify.app/',
    repoUrl: 'https://github.com/sanakhuram/css-frameworks',
    detailedDescription: `
Project Overview:
This project is part of the CSS Frameworks Assignment, where Tailwind CSS was integrated into an existing JavaScript 2 Course Assignment (JS2CA). Sociogram is a client-side social media app allowing users to interact and manage content dynamically.

Core Functionality:
- User Authentication: Register, Login, Logout using JWT stored in LocalStorage
- Profile Management: View and update profile, change avatar and banner
- Follow/Unfollow: Users can follow or unfollow other users
- Post Management: Create, Edit, Delete, and View posts
- Engagement: Like posts, comment on posts
- View Others’ Profiles: See other users’ posts and profiles
- Dark/Light Mode: Fully functional theme toggle for better UX

Tailwind CSS Features:
- Responsive Design: Optimized for mobile and desktop
- Utility-First Styling: Uses Tailwind’s built-in classes
- Custom Configurations:
  - Custom color palette (darkBlue, lightBlue, red, etc.)
  - Custom box shadows for UI enhancements
  - Custom animations (writing, slide-in effects)

Performance & Deployment:
- Built with Vite for fast development and hot reloading
- Uses LocalStorage for JWT authentication
- Code quality ensured with Prettier and ESLint
- Deployed on Netlify for live hosting

How to Use the App:
1. Sign Up/Login:
   - Register a new account or login using existing credentials
2. Profile Management:
   - Update profile information, change avatar and banner images
3. Create, Edit, Delete Posts:
   - Add new posts, modify existing posts, or delete unwanted posts
4. Engagement:
   - Like and comment on other users’ posts
   - Follow and unfollow other users
5. Dark/Light Mode:
   - Toggle the theme for comfortable viewing
`,
    techStack: [
      'JavaScript',
      'Tailwind',
      'Vite',
      'LocalStorage',
      'Netlify',
      'Prettier',
      'ESLint',
      'API'
    ],
  },

  {
    title: 'Vibe Cart',
    category:'Academic Project',
    description: 'Modern e-commerce platform with cart & checkout.',
    imageUrl: '/images/vibe-cart.jpg',
    detailImageUrl: '/images/vibe-cart-detail.jpg',
    slug: 'vibe-cart',
    liveUrl: 'https://jsfw-sanakhuram.vercel.app/',
    repoUrl: 'https://github.com/sanakhuram/jsfw-sanakhuram',
    detailedDescription: `
Vibe Cart is a modern, fully functional e-commerce platform built with Next.js, React, TypeScript, and TailwindCSS. Users can browse products, add to favorites, manage cart items, and checkout efficiently. The platform includes a responsive layout, animations via Framer Motion, a contact form, and a Terms & Conditions page.

E-Commerce Functionality:
- Add products to cart
- Manage quantities & remove items
- View detailed product info
- Check reviews & ratings
- Display discount badges

Navigation & UI:
- Animated hero section
- Sticky header with cart & favourites
- Responsive layout
- Product sorting options
- Real-time search bar
- Pagination
- Responsive footer

Developer Setup:
- Next.js App Router for routing
- Context API for state management
- Notifications via react-hot-toast
- Animations with Framer Motion
- ESLint + Prettier for code quality
- Unit tests with Jest + React Testing Library

Testing:
- ProductCard
- Header
- AddToCartButton
- SortSearchBar
- Footer
- BackToTopButton

Additional Notes:
- Consistent color themes and UI design
- Contact form implemented with React
- Suggested items feature included
- Terms & Conditions page implemented
`,
    techStack: ['NextJS', 'React', 'Tailwind', 'Jest', 'TypeScript','Vercel', 'Prettier', 'ESLint', 'API','Husky'],
  },

  {
    title: 'Holidaze',
    category:'Academic Project',
    description: 'Venue booking platform .',
    imageUrl: '/images/holidaze.jpg',
    detailImageUrl: '/images/holidaze-detail.jpg',
    slug: 'holidaze',
    liveUrl: 'https://holidaze-green.vercel.app/',
    repoUrl: 'https://github.com/sanakhuram/holidaze',
    detailedDescription: `
Holidaze is a full-featured accommodation booking platform built with Next.js, React, and TailwindCSS. Users can search venues, view details, book accommodations, and manage their reservations efficiently.

Key Features:
- Venue Listing & Search Filters
- Booking Flow with Calendar Selection
- Map Integration with OpenStreetMap
- User Authentication & Profiles
- Dark Mode Support
- Admin Dashboard for Managing Venues
`,
    techStack: ['NextJS', 'React', 'Tailwind', 'TypeScript', 'API', 'Vercel', 'Prettier', 'ESLint'],
  },
  {
    title: 'Color Muse Blog',
    category:'Academic Project',
    description: 'A blog featuring CRUD.',
    imageUrl: '/images/color-muse-blog.jpg',
    slug: 'color-muse-blog',
    techStack: ['JavaScript', 'API', 'HTML', 'CSS'],

    liveUrl: 'https://color-muse-blog-project-exam-1.netlify.app/',
    repoUrl: 'https://github.com/your-username/color-muse-blog',
    detailedDescription: `
Color Muse Blog is a responsive blogging platform that allows users to create, read, update, and delete blog posts. The application features a carousel to showcase featured posts and provides a user-friendly interface for managing content.

Key Features:
- Responsive Design
- CRUD Operations for Blog Posts
- Carousel for Featured Posts
- User Authentication
- Search Functionality
- profile Management
- login & Registration
`,
    detailImageUrl: '/images/color-muse-blog-detail.jpg',
  },
  {
    title: 'Follow The Steps',
    category: 'Award Winning Project',
    description: 'Hiking & trail website.',
    imageUrl: '/images/follow-the-steps.jpg',
    slug: 'golden-egg-project',
    techStack: ['CSS', 'HTML', 'JavaScript', 'API'],
    liveUrl: 'https://sanakhuram.github.io/follow-the-steps/',
    repoUrl: 'https://github.com/sanakhuram/follow-the-steps',
    detailedDescription: `
Follow the Steps is a hiking and trails discovery website focused on the Trondheim area. It features interactive maps and detailed trail information using OpenStreetMap API. Winner of Noroff’s Golden Egg Award 2025 ,.

Key Features:
- Interactive Maps
- Trail Information
- User Reviews
- Responsive Design
- faq Section
- Contact Form
- Book a tour feature
`,
    detailImageUrl: '/images/follow-the-steps-detail.jpg',
  },
  {
    title: 'Brew & Bloom',
    category: 'Learning Project',
    description: 'A modern coffee shop.',
    imageUrl: '/images/brew-bloom.jpg',
    slug: 'brew-bloom',
    techStack: ['React', 'NextJS', 'TypeScript', 'API', 'Tailwind'],
    liveUrl: 'https://coffee-cafe-app.vercel.app',
    repoUrl: 'https://github.com/sanakhuram/coffee-cafe-app',
    detailedDescription: `
Brew & Bloom is a modern coffee shop web application that allows users to browse the menu, place orders, and manage their profiles. The app features a custom-built API for handling menu items, orders, and user interactions.

Key Features:
- Menu Browsing
- Order Placement
- Responsive Design
- cart Functionality
- checkout Process
- gallery Page
`,
    detailImageUrl: '/images/brew-bloom-detail.jpg',
  },
  {
    title: 'Crypto Dashboard',
    category: 'Learning Project',
    description: 'A cryptocurrency dashboard.',
    imageUrl: '/images/cypto-dashboard.jpg',
    slug: 'crypto-dashboard',
    techStack: ['API', 'React', 'TypeScript', 'NextJS', 'Tailwind'],
    liveUrl: 'https://crypto-dashboard-nine-gilt.vercel.app',
    repoUrl: 'https://github.com/sanakhuram/crypto-dashboard',
    detailedDescription: `
Crypto Dashboard is a real-time cryptocurrency dashboard that provides users with up-to-date information on various cryptocurrencies. The app utilizes the CoinGecko API to fetch data and is built with React, TypeScript, and TailwindCSS.

Key Features:
- Real-Time Cryptocurrency Data
- Search Functionality
- Responsive Design
- Detailed Cryptocurrency Pages
- Genre Statistics and Trends
`,
    detailImageUrl: '/images/crypto-dashboard-detail.jpg',
  },
  {
  title: 'Hope & Health Welfare Association',
  category: 'Client Project',
  description: 'A responsive charity website.',
  imageUrl: '/images/hope-health.jpg',
  slug: 'hope-health',
  techStack: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
  liveUrl: 'https://hopeandhealthwelfareassociation.com/',
  repoUrl: 'https://github.com/sanakhuram/hope-health-welfare-associations',
  detailedDescription: `
Hope & Health Welfare Association is a non-profit organization dedicated to improving community health, education, and social welfare in Okara, Pakistan, with a special focus on empowering underprivileged girls. This website was designed from Figma to code, including custom logo and branding, responsive layout, and integration with donation and shop features.

Key Features:

1. Multi-Page Website:
- Home, About Us, Our Work, Donations, Get Involved, Shop, News & Updates, Contact Us.
- Fully responsive design for mobile, tablet, and desktop.

2. Donations & Shop:
- Integrated donation page for fundraising.
- Online store ("Stitchbox") selling handmade items by the girls, with proceeds supporting the charity.

3. Interactive & Dynamic Features:
- JavaScript-driven UI enhancements.
- EmailJS integration for contact forms, volunteer sign-ups, and donation inquiries.

4. Accessibility & Language Support:
- Website designed for accessibility.
- Supports English & Urdu translations.

5. Visual Design:
- Logo and branding designed with Canva.
- Images and videos provided by the charity organization.
- Color palette chosen to reflect women empowerment and community focus.

6. Content Integration:
- Text content created collaboratively with the charity’s administration.
- Galleries and video sections showcasing programs and events.

7. Impact:
- Since launch, donation insights have increased.
- Website serves as a central platform for community engagement, volunteer coordination, and fundraising.
`,
  detailImageUrl: '/images/hope-health-detail.jpg',
},


{
  title: 'Food Blog',
  category: 'Learning Project',
  description: 'A responsive food blog website.',
  imageUrl: '/images/food-blog.jpg',
  slug: 'food-blog',
  techStack: ['API', 'HTML', 'JavaScript', 'Tailwind'],
  liveUrl: 'https://sanakhuram.github.io/Food-Blog/',
  repoUrl: 'https://github.com/sanakhuram/Food-Blog',
  detailedDescription: `
Food Blog is a responsive website where users can search for recipes using the Spoonacular API. The search functionality displays up to 10 recipes at a time. 

Key Features:

1. Home Page:
- Displays a search filter where users can type recipe names.
- Shows 10 results per search with recipe title and image.
- Fully responsive design for mobile, tablet, and desktop.

2. Recipe Details:
- Clicking a recipe opens a detailed page.
- Includes step-by-step instructions, ingredients, and other recipe information.

3. API Integration:
- Uses Spoonacular API to fetch real recipe data dynamically.
- Ensures up-to-date information and variety of recipes.

4. Styling:
- Built with Tailwind CSS for modern, responsive, utility-first styling.
- Clean and interactive UI with dynamic JavaScript elements.
`,
  detailImageUrl: '/images/food-blog-detail.jpg',
},
{
  title: 'Square Eyes',
  category: 'Academic Project',
  description: 'A responsive movie e-commerce website.',
  imageUrl: '/images/square-eyes.jpg',
  slug: 'square-eyes',
  techStack: ['JavaScript', 'API', 'HTML', 'CSS', 'FIGMA'],
  liveUrl: 'https://sanakhuram.github.io/squareEyes-js/',
  repoUrl: 'https://github.com/sanakhuram/squareEyes-js',
  detailedDescription: `
Square Eyes is a responsive e-commerce website designed for movie enthusiasts. The project was built from Figma to code, featuring CSS gradients, shadows, and modern interactive UI elements using HTML, CSS, and JavaScript. It integrates with the Noroff API to display a wide selection of movies across various genres.

Key Features:

1. Movie Browsing & Genre Filtering:
- Users can browse movies and filter by genres like Action, Drama, Comedy, Horror, and Kids.
- Provides an intuitive and accessible browsing experience.

2. Movie Details:
- Clicking a movie shows detailed information, including title, description, rating, and other relevant data fetched from the Noroff API.

3. Add to Cart & Checkout:
- Users can select movies, add them to a shopping cart, and proceed to checkout.
- Checkout page includes form validation for a smooth transaction process.

4. Responsive Design & Accessibility:
- Fully responsive across mobile, tablet, and desktop devices.
- Designed with accessibility in mind, following WCAG best practices and tested with WAVE tool.

5. API Integration:
- Connects to the Noroff Dev API to fetch real movie data dynamically.
- Ensures interactive and up-to-date content for users.

6. Design & Development:
- UI/UX designed in Figma with attention to color gradients, shadows, and usability.
- Semantic HTML5, CSS3 Grid & Flexbox for layout, and JavaScript for dynamic features.
`,
  detailImageUrl: '/images/square-eyes-detail.jpg',
},

  {
    title: 'Community Science Museum',
    category:'Academic Project',
    description: 'An educational museum site.',
    imageUrl: '/images/community-science-museum.jpg',
    slug: 'community-science-museum',
    techStack: ['HTML', 'CSS'],
    liveUrl: 'https://sanakhuram.github.io/semester-project-sana-khuram/',
    repoUrl: 'https://github.com/sanakhuram/semester-project-sana-khuram',
    detailedDescription: `
Community Science Museum is an educational website designed for primary and middle school children (ages 7–15) and their families. The site provides interactive exhibits, educational resources, and fun activities to engage young minds in the wonders of science.

Key Features:
- Interactive Exhibits
- Educational Resources
- Fun Activities & Games
- Responsive Design
- book a tour feature
`,
    detailImageUrl: '/images/community-science-museum-detail.jpg',
  },
  {
    title: 'Rainy Days',
    category: 'Learning Project',
    description: 'E-commerce website .',
    imageUrl: '/images/rainy-days.jpg',
    slug: 'rainy-days',
    techStack: ['JavaScript', 'API', 'HTML', 'CSS'],
    liveUrl: 'https://sanakhuram.github.io/Rainy-Days/',
    repoUrl: 'https://github.com/sanakhuram/rainy-days',
    detailedDescription: `
Rainy Days is a fully responsive e-commerce website focused on jackets and outerwear. The platform integrates with a product API to display a wide range of items, allowing users to browse, filter, and purchase jackets with ease.

Key Features:
- Responsive Design for all devices
- Product Listing & Search
- Category & Size Filtering
- Cart Management & Checkout Flow
- User Reviews & Ratings
- Add to Cart Functionality
- A Checkout Page with Form Validation
- Policy & Terms of Service Pages
`,
    detailImageUrl: '/images/rainy-days-detail.jpg',
  },
{
  title: 'BiblioTint',
  category: 'Learning Project',
  description: 'A responsive book search website.',
  imageUrl: '/images/BiblioTint.jpg',
  slug: 'biblio-tint',
  techStack: ['JavaScript', 'API', 'HTML', 'CSS'],
  liveUrl: 'https://sanakhuram.github.io/BilblioTint/',
  repoUrl: 'https://github.com/sanakhuram/BilblioTint',
  detailedDescription: `
BiblioTint is a responsive web application that allows users to search for books, explore new authors, and view detailed information for each book using the Google Books API.

Key Features:

1. Search for Books:
- Users can search by book title, author, or keyword.
- Displays a list of results including book covers, titles, authors, and short descriptions.
- Shows up to 10 results per query for a clean, user-friendly interface.

2. Book Details:
- Clicking a book displays more detailed information, such as a full description, publisher, published date, and preview link.
- Designed to make browsing and discovering books seamless.

3. Responsive Design:
- Fully responsive layout optimized for mobile, tablet, and desktop screens.
- Ensures usability across all devices with consistent styling.

4. API Integration:
- Powered by the Google Books API to fetch real-time book data.
- Dynamic content allows users to explore thousands of books instantly.

5. Built With:
- HTML5: Semantic and accessible structure.
- CSS3: Styling, layout, and responsive design using Flexbox and Grid.
- JavaScript: Handles interactivity and API calls.
- Google Books API: Provides all book data for search and details.
`,
  detailImageUrl: '/images/BiblioTint-detail.jpg',
},

];
