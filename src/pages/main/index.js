import { useEffect, useState } from 'react';
import { get_movieList } from '../../apis/movieList';
import Poster from '../../components/poster';

const MainPage = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        get_movieList(setMovieList);
    }, []);

    useEffect(() => {
        console.log(movieList);
    }, [movieList]);

    return (
        <>
            {movieList.map(({ id, adult }) => {
                return <Poster movie_id={id} />;
            })}
        </>
    );
};

export default MainPage;
