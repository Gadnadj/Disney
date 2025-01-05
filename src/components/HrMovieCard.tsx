const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
import { Movie } from '../types';




type Props = {
    movie: Movie;
}

const HrMovieCard = ({ movie }: Props) => {
    return (
        <section className='hover:scale-110 transition-all duration-150 ease-in'>
            <img src={IMAGE_BASE_URL + movie.backdrop_path}
                className='w-[110px] md:w-[260px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer shadow-lg shadow-black
        '/>
            <h2 className='w-[110px] md:w-[260px] text-white
        mt-2 font-bold'>{movie.title}</h2>
        </section>
    );
};

export default HrMovieCard;