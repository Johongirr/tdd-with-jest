const arrayAnalysis = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const obj = {};
  obj["length"] = arr.length;
  obj["min"] = sorted[0];
  obj["max"] = sorted[sorted.length - 1];
  obj["average"] = sorted[Math.floor(sorted.length / 2)];
  return obj;
};

export { arrayAnalysis };
