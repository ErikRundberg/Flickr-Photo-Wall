# 🖼️ Flickr Photo Wall

This is a web application built with **Next.js** (App Router) that displays a responsive photo wall based on searches against Flickr's public API feed. The application automatically updates the image stream by polling the API periodically.

## ✨ Features

* **Search by Tags:** Allows the user to search the Flickr feed using comma-separated tags.
* **Live Updates:** The app automatically polls the Flickr API every **15 seconds** to check for new or updated photos, fulfilling the requirement for a running "slideshow" display.
* **Responsive Grid:** Works seamlessly across mobile, tablet, and desktop screen sizes.
* **Animations:** Uses **Framer Motion** to provide smooth transitions (fade-in and movement) when photos are loaded or updated.
* **API Proxy:** Uses Next.js API Routes to proxy the Flickr feed, resolving potential Cross-Origin Resource Sharing (CORS) issues.

## 💻 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js** (App Router) | Provides the application structure, Server Components, and the API Route proxy. |
| **React** (TypeScript) | For component-based UI development and type safety. |
| **Tailwind CSS** | Used for utility-first styling and rapidly creating the responsive grid layout. |
| **Framer Motion** | Used specifically for the fluid transition animations in the photo grid. |

## 🚀 Local Installation

### Prerequisites

You must have [**Node.js**](https://nodejs.org/en/download) (v18 or later) and [**npm**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your development machine.

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ErikRundberg/Flickr-Photo-Wall
    cd Flickr-Photo-Wall
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **View the application:**
    Open [http://localhost:3000](http://localhost:3000) in your web browser to see the photo wall.


## 📁 Project Structure
This project uses the Next.js App Router convention, organizing source code under the `src/` directory.

```
flickr-photo-wall/
├── node_modules/       # Project dependencies
├── public/
│   └── favicon.ico     # Static assets
├── src/
│   ├── app/            # App Router entry points (Server Components)
│   │   ├── api/        # Next.js API Routes (Serverless functions)
│   │   │   └── flickr/ # API proxy for Flickr
│   │   │       └── route.ts
│   │   ├── layout.tsx  # Root layout, imports global CSS
│   │   └── page.tsx    # Root page component (Server Component wrapper)
│   ├── components/     # Reusable Client Components (UI logic, forms, grid)
│   │   ├── PhotoCard.tsx
│   │   ├── PhotoGrid.tsx
│   │   ├── PhotoWall.tsx
│   │   └── SearchForm.tsx
│   ├── hooks/          # Custom React Hooks (data fetching logic)
│   │   └── useFlickrFeed.ts
│   ├── lib/            # Utility files and types
│   │   └── flickr.types.ts
│   └── styles/         # Global CSS file
│       └── globals.css
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── next.config.ts
```