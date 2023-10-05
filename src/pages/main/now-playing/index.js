import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OneMovie from '../../../components/oneMovie';
import { get_nowPlayingMovie } from '../../../apis/get_Api';

const NowPlaying = () => {
    const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

    useEffect(() => {
        get_nowPlayingMovie(setNowPlayingMovie);
    }, []);

    useEffect(() => {
        console.log(`nowPlayingMovie:`, nowPlayingMovie);
    }, [nowPlayingMovie]);

    return (
        <S.Wrapper>
            <S.Title>Now-Playing Movies</S.Title>
            {nowPlayingMovie.map(({ id, title, poster_path, overview, vote_average }) => {
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
    );
};

export default NowPlaying;

const Wrapper = styled.div`
    margin: 0 5%;
    max-width: 1460px;
    padding-top: 100px;
    width: 100%;
`;

const Title = styled.p`
    margin: 1% 5%;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const S = {
    Wrapper,
    Title,
};
