import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;
import { Movie } from '../types';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

type Props = {}

const Slider = (props: Props) => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = (element: HTMLDivElement) => {
        element.scrollLeft += screenWidth - 110;
    };

    const sliderLeft = (element: HTMLDivElement) => {
        element.scrollLeft -= screenWidth - 110;
    };

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'
                onClick={() => elementRef.current && sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => elementRef.current && sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'
                ref={elementRef}>
                {movieList.map((item: Movie, index: number) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path}
                        alt=""
                        key={index}
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all ease-in duration-100'
                        onClick={() => elementRef.current && sliderLeft(elementRef.current)} />
                ))}
            </div>
        </div>
    );
};

export default Slider;