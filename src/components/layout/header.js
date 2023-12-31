import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { flexAlignCenter } from "../../styles/common.style";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const searchMovie = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/search/?q=${keyword}`);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Logo src="img/githubicon.png" onClick={goToHome}></S.Logo>
          <nav>
            <S.Ul>
              <li onClick={() => navigate("/now-playing")}>Now Playing</li>
              <li onClick={() => navigate("/popular")}>Popular</li>
              <li onClick={() => navigate("/top-rated")}>Top Rated</li>
              <li onClick={() => navigate("/upcoming")}>Upcoming</li>
            </S.Ul>
          </nav>

          <S.SearchBox>
            <S.Input placeholder="Search movie" onKeyPress={(e) => searchMovie(e)} />
            <S.Icon>
              <AiOutlineSearch size={30} />
            </S.Icon>
          </S.SearchBox>
        </S.Container>
      </S.Wrapper>
      <Outlet />
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: rgba(16,16,16, 0.7);
`;

const Container = styled.div`
  ${flexAlignCenter}
  font-size: 1.2rem;
  margin: 20px 80px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  margin-left: 50px;
  margin-right: 40px;
`;

const Ul = styled.div`
  display: flex;
  padding-right: 590px;
  li {
    padding: 10px;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    cursor: pointer;
    ${flexAlignCenter}
    transition:color .2s ease;
    &:hover {
      color: ${({ theme }) => theme.COLORS.primary};
    }
  }
`;

const SearchBox = styled.div`
  border: 2px solid #fff;
  border-radius: 4px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 200px;
  font-size: ${({ theme }) => theme.FONT_SIZE.middle};
  color: "white";
  padding: 8px;
`;

const Icon = styled.div`
  display: inline-block;
`;

const S = {
  Logo,
  Container,
  Wrapper,
  Ul,
  Input,
  SearchBox,
  Icon,
};

