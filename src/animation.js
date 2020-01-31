export const cubicInOut = t => {
  // eslint-disable-next-line no-param-reassign
  t *= 2;
  // eslint-disable-next-line
  return (t <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
};

export const interpolateNumber = (a, b) => p => a * (1 - p) + b * p;

export const interpolateVector = (a, b) => p =>
  a.map((x, i) => interpolateNumber(x, b[i])(p));
