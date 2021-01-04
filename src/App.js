import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Left = styled.div`
  width: 120px;
  border-right: 1px solid gold;
`;
const Right = styled.div``;

export default function App() {
  return (
    <Container>
      <Left>Hello CodeSandbox</Left>
      <Right>right</Right>
    </Container>
  );
}
