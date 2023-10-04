import styled from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Wrapper>
      <Typography variant="h3" gutterBottom color={"gray"}>
        Movie Not Found😥
      </Typography>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  ${flexCenter};
`;
