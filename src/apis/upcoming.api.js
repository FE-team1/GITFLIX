import { axiosInstance } from './core';

export const get_upComingMovie = (setUpComingMovie) => {
    axiosInstance
        .get('/movie/upcoming')
        .then((res) => {
            let upComingMovie = res.data.results;
            setUpComingMovie(upComingMovie);
        })
        .catch((err) => {
            console.log(err);
        });
};
