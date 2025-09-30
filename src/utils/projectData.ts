export type Project = {
  title: string;
  description: string;       // short description for list page
  imageUrl: string;          // list page / thumbnail
  detailImageUrl?: string;   // slug page image inside frame
  slug: string;
  liveUrl: string;
  repoUrl: string;
  detailedDescription: string; // text shown on slug page
  techStack: string[];       
};

export const projects: Project[] = [
  {
    title: "Auction Hub",
    description: "Online auction platform with bidding & listings.",
    imageUrl: "/images/auction.jpg",
    detailImageUrl: "/images/auction-detail.jpg",
    slug: "auction-hub",
    liveUrl: "https://auction-hub.netlify.app/",
    repoUrl: "https://github.com/sanakhuram/auction-hub-SP2",
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
    techStack: ["JavaScript", "Vite", "Tailwind", "API"]
  },
  {
    title: "Sociogram",
    description: "Social media app with profiles & CRUD functionality.",
    imageUrl: "/images/sociogram.jpg",
    detailImageUrl: "/images/sociogram-detail.jpg",
    slug: "sociogram",
    liveUrl: "https://sociogram-app.netlify.app/",
    repoUrl: "https://github.com/sanakhuram/css-frameworks",
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
    techStack: ["JavaScript", "Tailwind", "Vite", "API"]
  },
  {
    title: "Vibe Cart",
    description: "Modern e-commerce platform with cart & checkout.",
    imageUrl: "/images/vibe-cart.jpg",
    detailImageUrl: "/images/vibe-cart-detail.jpg",
    slug: "vibe-cart",
    liveUrl: "https://jsfw-sanakhuram.vercel.app/",
    repoUrl: "https://github.com/sanakhuram/jsfw-sanakhuram",
    detailedDescription: `
Vibe Cart is a modern e-commerce platform built with Next.js, React, and TailwindCSS. Users can browse products, manage carts, and checkout efficiently.

Key Features:
- Product Listing & Search
- Cart Management
- Checkout Flow
- Reviews & Ratings
- Dark Mode
`,
    techStack: ["Next.js", "React", "Tailwind", "Jest"]
  }
];
