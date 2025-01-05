import axios from 'axios';

const moviesBaseUrl = import.meta.env.VITE_MOVIES_BASE_URL;
const movieByGenreBaseURL = `${import.meta.env.VITE_MOVIE_BY_GENRE_BASE_URL}?api_key=${import.meta.env.VITE_API_KEY}`;
const api_key = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(`${moviesBaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId = (id: number) => axios.get(movieByGenreBaseURL + '&with_genres=' + id);

export default {
    getTrendingVideos,
    getMovieByGenreId
};
