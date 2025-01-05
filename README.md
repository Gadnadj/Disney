https://disney-stars.netlify.app/

Disney+ Clone
A modern web application replicating the functionality and design of Disney+, built with React, TypeScript, Vite, and Tailwind CSS. It integrates TMDB API to fetch and display movies and series.

Features
🎥 Trending Movies/Series: Display trending videos using TMDB API.
🔍 Genre Filtering: Browse movies/series by genre.
🖼️ Responsive Design: Optimized for all devices.
🖱️ Interactive UI: Hover effects, smooth scrolling, and animations.
📽️ Production House Showcase: Interactive production house logos with video previews.
Tech Stack
Frontend: React, TypeScript, Vite, Tailwind CSS.
API: The Movie Database (TMDB) API.
Icons: React Icons.
Installation
Clone the repository:

bash
Copier le code
git clone https://github.com/yourusername/disney-plus-clone.git

Navigate to the project directory:
cd disney-plus-clone

Install dependencies:
npm install

Create a .env file in the root directory and add your TMDB API key:

VITE_MOVIES_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_API_KEY=your_api_key_here
VITE_MOVIE_BY_GENRE_BASE_URL=https://api.themoviedb.org/3/discover/movie

Start the development server:
npm run dev

Open your browser and navigate to:
http://localhost:5173

API Integration
Fetch trending movies/series.
Filter movies by genres.
Video previews for production houses.

npm run dev: Start the development server.
npm run build: Build the project for production.
npm run preview: Preview the production build.


