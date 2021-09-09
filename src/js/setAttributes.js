/* eslint-disable no-restricted-syntax */
const setAttributes = (el, attrs) => {
  for (const key in attrs) {
    if (attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
};

export default setAttributes;