import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Scene from "./Scene";
import Canva from "./Canva";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Left = styled.div`
  width: 100px;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-right: 1px solid gold;
`;
const Right = styled.div`
  flex: 1;
  height: 100%;
`;

export default function App() {
  return (
    <Container>
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <Scene>
          <Canva />
        </Scene>
      </Right>
    </Container>
  );
}
