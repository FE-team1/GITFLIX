import { axiosInstance } from './core';

export const MovieApi = {
    // /movie/endpoint
    getMovieList(endpoint, params) {
        return axiosInstance.get(`/movie/${endpoint}`, {
            params: { ...params },
        });
    },
};
