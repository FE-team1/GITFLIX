import { axiosInstance } from './core';

export const get_image = (setPoster, movie_id) => {
    axiosInstance
        .get(`movie/${movie_id}/images`)
        .then((res) => {
            
            setPoster(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
