export type Project = {
  title: string;
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
    title: 'Auction Hub',
    description: 'Online auction platform with bidding & listings.',
    imageUrl: '/images/auction.jpg',
    detailImageUrl: '/images/auction-detail.jpg',
    slug: 'auction-hub',
    liveUrl: 'https://auction-hub.netlify.app/',
    repoUrl: 'https://github.com/sanakhuram/auction-hub-SP2',
    detailedDescription: `
Auction Hub is a professional online auction platform allowing users to buy and sell collectibles, artwork, and vintage items. It provides a seamless bidding experience with user authentication and profile management.

Key Features:
- User Authentication (secure login & registration)
- Listing Management (create, edit, delete listings)
- Bidding System (place bids, track history)
- User Profiles (view seller info and bid history)
- Guest Access (browse listings without registering)
- Dark Mode (Tailwind-powered theme switching)
`,
    techStack: ['JavaScript', 'Vite', 'Tailwind', 'API'],
  },
  {
    title: 'Sociogram',
    description: 'Social media app with profiles & CRUD functionality.',
    imageUrl: '/images/sociogram.jpg',
    detailImageUrl: '/images/sociogram-detail.jpg',
    slug: 'sociogram',
    liveUrl: 'https://sociogram-app.netlify.app/',
    repoUrl: 'https://github.com/sanakhuram/css-frameworks',
    detailedDescription: `
Sociogram is a social media-style app with full CRUD operations and profile management. Users can create, like, comment on posts, follow/unfollow others, and search for content.

Key Features:
- User Authentication
- Profile Management
- Post CRUD (Create, Read, Update, Delete)
- Engagement (Likes & Comments)
- Search & Pagination
- Dark Mode
`,
    techStack: ['JavaScript', 'Tailwind', 'Vite', 'API'],
  },
  {
    title: 'Vibe Cart',
    description: 'Modern e-commerce platform with cart & checkout.',
    imageUrl: '/images/vibe-cart.jpg',
    detailImageUrl: '/images/vibe-cart-detail.jpg',
    slug: 'vibe-cart',
    liveUrl: 'https://jsfw-sanakhuram.vercel.app/',
    repoUrl: 'https://github.com/sanakhuram/jsfw-sanakhuram',
    detailedDescription: `
Vibe Cart is a modern e-commerce platform built with Next.js, React,TypeScript and TailwindCSS. Users can browse products, manage carts, and checkout efficiently.

Key Features:
- Product Listing & Search
- Cart Management
- Checkout Flow
- Reviews & Ratings
- Dark Mode
- Contact Form
`,
    techStack: ['NextJS', 'React', 'Tailwind', 'Jest', 'TypeScript'],
  },
{
  title: 'Holidaze',
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
  techStack: ['NextJS', 'React', 'Tailwind', 'TypeScript', 'API'],
},
{
    title: 'Color Muse Blog',
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
  description:
    'Hiking & trail website.',
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
    description:
      'A modern coffee shop.',
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
    description:
      'A cryptocurrency dashboard.',
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
    description:
      'A Charity website.',
    imageUrl: '/images/hope-health.jpg',
    slug: 'hope-health',
    techStack: [ 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://hopeandhealthwelfareassociation.com/',
    repoUrl: 'https://github.com/sanakhuram/hope-health-welfare-associations',
    detailedDescription: `
Hope & Health Welfare Association is a non-profit organization dedicated to improving community health and well-being. The website is designed with accessibility and user-friendliness in mind, ensuring that all users can easily navigate and access information about the organization's mission, programs, and events.

Key Features:
- Accessibility-Focused Design
- Responsive Layout
- Informational Pages
- Contact Forms
-  donation Integration
- language Support (English & Urdu)
- Volunteer Sign-Up
- Event Calendar
- Newsletter Subscription
- Stichbox an online store for handicrafts
`,
    detailImageUrl: '/images/hope-health-detail.jpg',
  },
    {
    title: 'Square Eyes',
    description:
      'A movie e-commerce website.',
    imageUrl: '/images/square-eyes.jpg',
    slug: 'square-eyes',
    techStack: ['JavaScript', 'API', 'HTML', 'CSS'],
    liveUrl: 'https://sanakhuram.github.io/squareEyes-js/',
    repoUrl: 'https://github.com/sanakhuram/squareEyes-js',
    detailedDescription: `
Square Eyes is a responsive e-commerce website designed for movie enthusiasts. The platform integrates with the Noroff API to offer a wide selection of movie genres, allowing users to browse, search, and purchase their favorite films.

Key Features:
- Responsive Design
- Movie Browsing & Search
- Genre Filtering
- User Reviews & Ratings
- Add to Cart Functionality
- A Checkout Page with Form Validation
- Policy & Terms of Service Pages
`,
    detailImageUrl: '/images/square-eyes-detail.jpg',
  },
    {
    title: 'Community Science Museum',
    description:
      'An educational museum site.',
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
  description: 'E-commerce website .',
  imageUrl: '/images/rainy-days.jpg',
  slug: 'rainy-days',
  techStack: ['JavaScript' , 'API', 'HTML', 'CSS'],
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
}

];
