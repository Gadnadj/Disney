import { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { Movie } from '../types';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

type Props = {
    genreId: number;
    index_: number;
}

const MovieList = ({ genreId, index_ }: Props) => {

    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = (element: HTMLDivElement) => {
        element.scrollLeft += 500;
    };

    const sliderLeft = (element: HTMLDivElement) => {
        element.scrollLeft -= 500;
    };

    const elementRef = useRef<HTMLDivElement>(null);


    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => elementRef.current && sliderLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer 
                hidden md:block absolute
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'} `} />

            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item) => (
                    <>
                        <MovieCard movie={item} />
                    </>
                ))}
            </div>
            <IoChevronForwardOutline onClick={() => elementRef.current && sliderRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0
                absolute right-0 
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />
        </div>
    );
};

export default MovieList;