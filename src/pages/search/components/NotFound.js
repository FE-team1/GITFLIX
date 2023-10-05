import styled from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import { useSearchParams } from "react-router-dom";

const NotFound = () => {
  const [query, setQuery] = useSearchParams();
  let keyword = query.get("q");
  return (
    <Wrapper>
      <ErrorTitle>There are no results matching the search term "{keyword}" you entered.</ErrorTitle>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  ${flexCenter};
`;

const ErrorTitle = styled.h2`
  font-size: 30px;
  margin-right: 15px;
  color: gray;
`;
