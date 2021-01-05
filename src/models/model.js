const model = {
  state: {
    pointData: [],
    selected: null,
  },
  reducers: {
    addPointData(state, payload) {
      const pointData = [...state.pointData, payload];
      return {
        ...state,
        pointData,
        selected: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.model.increment(payload);
    },
  }),
};

export default model;
