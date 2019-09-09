function jsonClone(source = {}) {
  return JSON.parse(JSON.stringify(source));
}

export default jsonClone;
