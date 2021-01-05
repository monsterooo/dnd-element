import React from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

function Drag({ config, children, addPointData }) {
  const [receiveProps, drag] = useDrag({
    item: config,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (!dropResult) return;
      console.log("end result:", dropResult);
      console.log("end item:", item);
      addPointData({ ...dropResult, id: uuidv4() });
      // console.log("getDropResult:", monitor.getDropResult());
      // console.log("结束拖动", "item:", item, "monitor:", monitor);
    },
  });
  return <div ref={drag}>{children}</div>;
}

const mapState = (state) => ({ model: state.model });
const mapDispatch = (dispatch) => ({
  addPointData: (point) => dispatch.model.addPointData(point),
});
export default connect(mapState, mapDispatch)(Drag);
