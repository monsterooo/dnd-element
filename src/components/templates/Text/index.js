import React from "react";
import Position from "../../Position";

function Text({ x, y }) {
  return (
    <Position x={x} y={y}>
      <div>text component</div>
    </Position>
  );
}

export default Text;
