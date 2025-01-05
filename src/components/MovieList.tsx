import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { Movie } from '../types';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
const screenWidth = window.innerWidth;


type Props = {
    genreId: number;
}

const MovieList = ({ genreId }: Props) => {

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
        element.scrollLeft += screenWidth - 110;
    };

    const sliderLeft = (element: HTMLDivElement) => {
        element.scrollLeft -= screenWidth - 110;
    };

    const elementRef = useRef<HTMLDivElement>(null);


    return (
        <div>
            <IoChevronBackOutline onClick={() => elementRef.current && sliderLeft(elementRef.current)}
                className='text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute'
            />

            <div className='flex overflow-x-auto gap-8  scrollbar-none pt-5 px-3 pb-5'>
                {movieList.map((item, index) => (
                    <MovieCard movie={item} key={index} />
                ))}
            </div>
            <IoChevronForwardOutline onClick={() => elementRef.current && sliderRight(elementRef.current)}
                className='text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0'
            />
        </div>
    );
};

export default MovieList;