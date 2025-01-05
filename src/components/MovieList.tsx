import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { Movie } from '../types';

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

    return (
        <div>
            {movieList.map((item, index) => (
                <
            ))}
        </div>
    );
};

export default MovieList;