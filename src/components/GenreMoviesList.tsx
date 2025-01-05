import GenresList from '../Constant/GenresList';
import MovieList from './MovieList';


type Props = {}

const GenreMoviesList = (props: Props) => {
    return (
        <div>
            {GenresList.genre.map((item, index) => (
                <div key={index} className='p-8 px-8 md:px16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} index_={index} />
                </div>
            ))}
        </div>
    );
};

export default GenreMoviesList;