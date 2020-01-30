export const lDist = l => (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]) ** l, 0) ** (1 / l)
    : undefined;

export const l1Dist = (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]), 0)
    : undefined;

export const l2Dist = (fromX, fromY, toX, toY) =>
  Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);

export const l2Norm = vector =>
  Math.sqrt(vector.reduce((s, v) => s + v ** 2, 0));

/**
 * L2 distance between a pair of 2D points
 * @param   {number}  x1  X coordinate of the first point
 * @param   {number}  y1  Y coordinate of the first point
 * @param   {number}  x2  X coordinate of the second point
 * @param   {number}  y2  Y coordinate of the first point
 * @return  {number}  L2 distance
 */
export const dist = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

/**
 * From: https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
 * @param   {Array}  point  Tuple of the form `[x,y]` to be tested.
 * @param   {Array}  polygon  1D list of vertices defining the polygon.
 * @return  {boolean}  If `true` point lies within the polygon.
 */
export const isPointInPolygon = ([px, py] = [], polygon = []) => {
  let x1;
  let y1;
  let x2;
  let y2;
  let isWithin = false;
  for (let i = 0, j = polygon.length - 2; i < polygon.length; i += 2) {
    x1 = polygon[i];
    y1 = polygon[i + 1];
    x2 = polygon[j];
    y2 = polygon[j + 1];
    if (y1 > py !== y2 > py && px < ((x2 - x1) * (py - y1)) / (y2 - y1) + x1)
      isWithin = !isWithin;
    j = i;
  }
  return isWithin;
};
