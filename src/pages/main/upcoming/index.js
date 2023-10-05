import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OneMovie from '../../../components/oneMovie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { get_upComingMovie } from '../../../apis/get_Api';
import { flexCenter, subtitle } from '../../../styles/common.style';

const UpComing = () => {
    const [upComingMovie, setUpComingMovie] = useState([]);

    useEffect(() => {
        get_upComingMovie(setUpComingMovie);
    }, []);

    useEffect(() => {
        console.log(`popularMovie:`, upComingMovie);
    }, [upComingMovie]);

    const goToScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <S.Wrapper>
            <S.Title>Upcoming Movies</S.Title>
            {upComingMovie.map(({ id, title, poster_path, overview, vote_average }) => {
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
            <FontAwesomeIcon icon={faAngleUp} bounce size="3x" onClick={goToScrollTop} cursor="pointer" />
        </S.Wrapper>
    );
};

export default UpComing;

const Wrapper = styled.div`
  margin: 0 5%;
  max-width: 1460px;
  padding-top: 100px;
  width: 100%;
`;

const Title = styled.p`
    margin-top: 2%;
    ${flexCenter};
    ${subtitle}
`;

const S = {
  Wrapper,
  Title,
};
