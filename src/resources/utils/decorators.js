
export function enhance(dataObject) {
  return target => {
    Object.assign(target.prototype, dataObject);
  };
}
