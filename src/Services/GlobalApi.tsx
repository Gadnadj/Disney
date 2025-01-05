import axios from 'axios';

const moviesBaseUrl = 'https://api.themoviedb.org/3';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=5ce5f1c74ea4723e6e0abc1d92478386';

const api_key = '5ce5f1c74ea4723e6e0abc1d92478386';


const getTrendingVideos = axios.get(`${moviesBaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId = (id: number) => axios.get(movieByGenreBaseURL + '&with_genres=' + id);



export default {
    getTrendingVideos,
    getMovieByGenreId
};