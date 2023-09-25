import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { flexAlignCenter } from '../../styles/common.style';

const Header = () => {
    return (
        <S.Container>
            <S.Logo src="img/githubicon.png"></S.Logo>
            <nav>
                <S.Ul>
                    <li>Now Playing</li>
                    <li>Popular</li>
                    <li>Top Rated</li>
                    <li>Upcoming</li>
                </S.Ul>
            </nav>
            <S.Input />
            <AiOutlineSearch />
        </S.Container>
    );
};

export default Header;

const Container = styled.div`
    ${flexAlignCenter}
    font-size: 1.2rem;
    margin: 0 4%;
    padding-top: 1%;
`;

const Logo = styled.img`
    width: 50px;
    margin-right: 50px;
`;

const Ul = styled.div`
    display: flex;
    padding-right: 700px;
    li {
        padding: 10px;
        font-weight: 500;
        cursor: pointer;
        ${flexAlignCenter}
    }
`;

const Input = styled.input`
    outline: none;
    border-radius: 7px;
    color: ${({ theme }) => theme.COLORS.black};
`;

const S = {
    Logo,
    Container,
    Ul,
    Input,
};
