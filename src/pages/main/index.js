import { useEffect, useState } from 'react';
import OneMovie from '../../components/oneMovie';
import Header from '../../components/layout/header';
import styled from 'styled-components';
import Carousel from './components/carousel';
import { Container } from '@mui/material';
import { InView, useInView } from 'react-intersection-observer';
import { axiosInstance } from '../../apis/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { get_movieList } from '../../apis/get_Api';
import { flexCenter, title } from '../../styles/common.style';

const MainPage = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [ref, inView] = useInView();

    useEffect(() => {
        get_movieList(setMovieList);
    }, []);

    useEffect(() => {
        console.log(`movieList:`, movieList);
    }, [movieList]);

    const productFetch = () => {
        axiosInstance
            .get(`discover/movie?page=${page}&sort_by=popularity.desc`)
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

    const goToScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Carousel movieList={movieList} />
            <Container maxWidth="xl">
                <S.MainTxt>Popular Contents</S.MainTxt>
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
                    <div ref={ref}></div>
                </S.Wrapper>
                <FontAwesomeIcon
                    icon={faAngleUp}
                    bounce
                    size="3x"
                    transform="right-470 up-40"
                    onClick={goToScrollTop}
                    cursor="pointer"
                />
            </Container>
        </>
    );
};

export default MainPage;

const Wrapper = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 1460px;
    width: 100%;
`;

const MainTxt = styled.div`
    padding-top: 600px;
    ${flexCenter};
    ${title}
`;

const S = {
    Wrapper,
    MainTxt,
};
