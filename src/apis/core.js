import axios from 'axios';

// create axios
// 하나의 파일로 모둘화
/**
 * @
 */
export const axiosInstance = axios.create({
    baseURL: process.env.API_ACCESS_TOKEN,
    Headers: {
        Authorization: `Bearer `
    },
})