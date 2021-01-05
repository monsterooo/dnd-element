import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
`;

function Position({ x, y, children }) {
  return <Container style={{ left: x, top: y }}>{children}</Container>;
}

export default Position;
