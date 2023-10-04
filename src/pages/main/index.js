import { useEffect, useState } from 'react';
import { get_movieList } from '../../apis/movieList';
import OneMovie from '../../components/oneMovie';
import Header from '../../components/layout/header';
import styled from 'styled-components';
import Carousel from './components/carousel';
import { Container, Skeleton } from '@mui/material';

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
            <Header movieList={movieList} setMovieList={setMovieList} />
            <Carousel movieList={movieList} />
            <Container maxWidth="xl">
                <S.Wrapper>
                    {movieList.map(({ id, title, poster_path, overview, vote_average }) => {
                        return (
                            <>
                                <OneMovie
                                    movie_id={id}
                                    title={title}
                                    poster_path={poster_path}
                                    overview={overview}
                                    vote_average={vote_average}
                                />
                            </>
                        );
                    })}
                </S.Wrapper>
            </Container>
        </>
    );
};

export default MainPage;

const Wrapper = styled.div`
    margin: 0 5%;
    max-width: 1460px;
    padding-top: 600px;
    width: 100%;
`;

const S = {
    Wrapper,
};
