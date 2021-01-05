import React from "react";
import styled from "styled-components";
import Drag from "./components/Drag";
import ELEMENT from "./utils/element";

const Container = styled.div`
  width: 80px;
  height: 40px;
  background: #eee;
  text-align: center;
  line-height: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

function Sidebar() {
  return Object.keys(ELEMENT).map((key) => (
    <Drag config={ELEMENT[key]} key={key}>
      <Container>{key}</Container>
    </Drag>
  ));
}

export default Sidebar;
