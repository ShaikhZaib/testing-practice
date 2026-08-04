export default function analyzeArray(data) {
  // Calculate length
  const length = data.length;

  // Calculate min
  const min = Math.min(...data);

  // Calculate max
  const max = Math.max(...data);

  // Calculate average
  const sum = data.reduce((acc, curr) => (acc += curr), 0);

  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}
