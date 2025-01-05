import React, { useEffect } from 'react';
import GlobalApi from '../Services/GlobalApi';

type Props = {}

const Slider = (props: Props) => {
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp);

        });
    };
    return (
        <div>Slider</div>
    );
};

export default Slider;