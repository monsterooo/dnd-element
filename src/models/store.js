import { init } from "@rematch/core";
import models from "./";

const store = init({
  models,
});

export default store;
