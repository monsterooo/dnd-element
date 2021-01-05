const ELEMENT = {
  Text: {
    type: "Text",
  },
};
const acceptType = Object.keys(ELEMENT).map((key) => ELEMENT[key].type);
export { acceptType };
export default ELEMENT;
