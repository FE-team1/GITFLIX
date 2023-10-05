import { useEffect, useState } from 'react';
import OneMovie from '../../components/oneMovie';
import Header from '../../components/layout/header';
import styled from 'styled-components';
import Carousel from './components/carousel';
import { Container } from '@mui/material';
import { InView, useInView } from 'react-intersection-observer';
import { axiosInstance } from '../../apis/core';
import { get_movieList } from '../../apis/get_Api';

const MainPage = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(0);
    const [ref, inView] = useInView();

    useEffect(() => {
        get_movieList(setMovieList);
    }, []);

    useEffect(() => {
        console.log(`movieList:`, movieList);
    }, [movieList]);

    const productFetch = () => {
        axiosInstance
            .get(`/discover/movie?pageNo=${page}`)
            .then((res) => {
                console.log(res.data.results);
                // 리스트 뒤로 붙여주기
                setMovieList([...movieList, ...res.data.results]);
                // 요청 성공 시에 페이지에 1 카운트 해주기
                setPage((page) => page + 1);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        // inView가 true 일때만 실행한다.
        if (inView) {
            console.log(inView, '무한 스크롤 요청 🎃');

            productFetch();
        }
    }, [inView]);

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
                    <div ref={ref}>안녕</div>
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

// 무한스크롤 구현 방법
// 1. react-query를 이용한 데이터 호출시 갯수 조정해서 일정 갯수 호출시 리랜더하면서 새로운 데이터를 호출하기
//    - 하루를 투자해서 시도해봤지만 기존의 데이터 호출을 react-query 버전으로 바꿔야 하는데 실패해서 데이터 호출이 안되서 포기
// 2. 스크롤 이벤트 감지해서 페이지 끝에 닿으면 닿는 것을 감지해서 추가 데이터를 받아오기
// 3. intersection observer api 사용하기
