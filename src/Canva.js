import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { acceptType } from "./utils/element";
import Render from "./components/Render";

const Container = styled.div`
  position: absolute;
  width: 375px;
  height: 100px;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function Canva() {
  const [canva, setCanva] = useState(null);
  const [receiveProps, drop] = useDrop({
    accept: acceptType,
    drop: (item, monitor) => {
      const { x: dx, y: dy } = monitor.getSourceClientOffset();
      const { x: cx, y: cy } = canva.getBoundingClientRect();

      console.log("item:", item);
      return { x: dx - cx, y: dy - cy, ...item };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  useEffect(() => {
    setCanva(document.querySelector("#canva"));
  }, []);
  return (
    <Container ref={drop} id="canva">
      <Render />
    </Container>
  );
}

export default Canva;
