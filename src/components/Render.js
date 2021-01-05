import React from "react";
import { connect } from "react-redux";
import templates from "./templates";

function Render({ model }) {
  const { pointData } = model;

  return (
    <div>
      {pointData.map((point) => {
        const Component = templates[point.type];
        return <Component key={point.id} {...point} />;
      })}
    </div>
  );
}

const mapState = (state) => ({
  model: state.model,
});

export default connect(mapState)(Render);
