import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
import { Movie } from '../types';

type Props = {}

const Slider = (props: Props) => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);

        });
    };
    return (
        <div className='flex'>
            {movieList.map((item: Movie, index: number) => (
                <img src={IMAGE_BASE_URL + item.backdrop_path}
                    alt=""
                    key={index}
                    className='min-w-full h-[310px] object-cover' />
            ))}
        </div>
    );
};

export default Slider;