/**
 * L distance between a pair of vectors
 *
 * @description
 * Identical but much faster than `lDist(l)([fromX, fromY], [toX, toY])`
 *
 * @param {array} l - Defines the Lp space
 */
export const lPointDist = l =>
  /**
   * L distance function
   * @param {number} fromX - X coordinate of the first point
   * @param {number} fromY - Y coordinate of the first point
   * @param {number} toX - X coordinate of the second point
   * @param {number} toY - Y coordinate of the first point
   * @return {array} L distance
   */
  (fromX, fromY, toX, toY) =>
    (Math.abs(fromX - toX) ** l + Math.abs(fromY - toY) ** l) ** (1 / l);

/**
 * L1 distance between a pair of points
 *
 * @description
 * Identical but much faster than `l1Dist([fromX, fromY], [toX, toY])`
 *
 * @param {number} fromX - X coordinate of the first point
 * @param {number} fromY - Y coordinate of the first point
 * @param {number} toX - X coordinate of the second point
 * @param {number} toY - Y coordinate of the first point
 * @return {number} L1 distance
 */
export const l1PointDist = (fromX, fromY, toX, toY) =>
  Math.abs(fromX - toX) + Math.abs(fromY - toY);

/**
 * L2 distance between a pair of points
 *
 * @description
 * Identical but much faster than `l2Dist([fromX, fromY], [toX, toY])`
 *
 * @param {number} fromX - X coordinate of the first point
 * @param {number} fromY - Y coordinate of the first point
 * @param {number} toX - X coordinate of the second point
 * @param {number} toY - Y coordinate of the first point
 * @return {number} L2 distance
 */
export const l2PointDist = (fromX, fromY, toX, toY) =>
  Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);

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

/**
 * Check if a 2D or 1D point is within a rectangle or range
 * @param   {number}  x  The point's X coordinate.
 * @param   {number}  y  The point's Y coordinate.
 * @param   {number}  minX  The rectangle's start X coordinate.
 * @param   {number}  maxX  The rectangle's start X coordinate.
 * @param   {number}  minY  The rectangle's start X coordinate.
 * @param   {number}  maxY  The rectangle's start X coordinate.
 * @return  {boolean}  If `true` the [x,y] point is in the rectangle.
 */
export const isPointInRect = ([x, y], [minX, maxX, minY, maxY]) =>
  x >= minX && x <= maxX && y >= minY && y <= maxY;

/**
 * Check if a 2D or 1D point is within a rectangle or range
 * @param   {number}  x  The point's X coordinate.
 * @param   {number}  y  The point's Y coordinate.
 * @param   {number}  minX  The rectangle's start X coordinate.
 * @param   {number}  maxX  The rectangle's start X coordinate.
 * @param   {number}  minY  The rectangle's start X coordinate.
 * @param   {number}  maxY  The rectangle's start X coordinate.
 * @return  {boolean}  If `true` the [x,y] point is in the rectangle.
 */
export const isPointHalfwayInRect = ([x, y], [minX, maxX, minY, maxY]) =>
  (x >= minX && x <= maxX) || (y >= minY && y <= maxY);
