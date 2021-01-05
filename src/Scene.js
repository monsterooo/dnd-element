import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #eee;
`;

function Scene({ children }) {
  return <Container>{children}</Container>;
}

export default Scene;
