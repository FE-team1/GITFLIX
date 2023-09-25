import { useEffect, useState } from 'react';
import { get_movieList } from '../../apis/movieList';
import OneMovie from '../../components/oneMovie';
import Header from '../../components/layout/header';
import styled from 'styled-components';

const MainPage = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        get_movieList(setMovieList);
    }, []);

    useEffect(() => {
        console.log(`movieList:`, movieList);
    }, [movieList]);

    return (
        <>
            <Header/>
            <S.Wrapper>
                {movieList.map(({ id, title, poster_path }) => {
                    return <OneMovie movie_id={id} title={title} poster_path={poster_path} />;
                })}
            </S.Wrapper>
        </>
    );
};

export default MainPage;

const Wrapper  = styled.div`
    margin: 0 4%;
`


const S = {
    Wrapper,
}
