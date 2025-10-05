/**
 * L distance between a pair of vectors
 *
 * @description
 * Identical but much faster than `lDist(l)([fromX, fromY], [toX, toY])`
 *
 * @param l - Defines the Lp space
 */
export const lPointDist =
	(l: number) =>
	/**
	 * L distance function
	 * @param fromX - X coordinate of the first point
	 * @param fromY - Y coordinate of the first point
	 * @param toX - X coordinate of the second point
	 * @param toY - Y coordinate of the first point
	 * @return L distance
	 */
	(fromX: number, fromY: number, toX: number, toY: number): number =>
		(Math.abs(fromX - toX) ** l + Math.abs(fromY - toY) ** l) ** (1 / l);

/**
 * L1 distance between a pair of points
 *
 * @description
 * Identical but much faster than `l1Dist([fromX, fromY], [toX, toY])`
 *
 * @param fromX - X coordinate of the first point
 * @param fromY - Y coordinate of the first point
 * @param toX - X coordinate of the second point
 * @param toY - Y coordinate of the first point
 * @return L1 distance
 */
export const l1PointDist = (
	fromX: number,
	fromY: number,
	toX: number,
	toY: number,
): number => Math.abs(fromX - toX) + Math.abs(fromY - toY);

/**
 * L2 distance between a pair of points
 *
 * @description
 * Identical but much faster than `l2Dist([fromX, fromY], [toX, toY])`
 *
 * @paramfromX - X coordinate of the first point
 * @paramfromY - Y coordinate of the first point
 * @paramtoX - X coordinate of the second point
 * @paramtoY - Y coordinate of the first point
 * @returnL2 distance
 */
export const l2PointDist = (
	fromX: number,
	fromY: number,
	toX: number,
	toY: number,
): number => Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);

interface BBox {
	minX: number; // Start x coordinate
	maxX: number; // End x coordinate
	minY: number; // Start y coordinate
	maxY: number; // End y coordinate
}

/**
 * L distance between a pair of rectangles
 *
 * @param l - Defines the Lp space
 */
export const lRectDist =
	(l: number) =>
	/**
	 * L distance function between a pair of rectangles
	 *
	 * @param bBox1 - Bounding box of the first rectangle
	 * @param bBox2 - Bounding box of the second rectangle
	 * @return L distance of the closest boundary points
	 */
	(bBox1: BBox, bBox2: BBox): number => {
		const xd1 = bBox2.minX - bBox1.minX;
		const xd2 = bBox2.minX - bBox1.maxX;
		const xd3 = bBox2.maxX - bBox1.minX;
		const xd4 = bBox2.maxX - bBox1.maxX;

		const isXInside =
			// bBox1 is x-wise inside of bBox2
			(xd1 < 0 && xd3 > 0) ||
			(xd2 < 0 && xd4 > 0) ||
			// bBox2 is x-wise inside of bBox1
			(xd1 > 0 && xd2 < 0) ||
			(xd3 > 0 && xd4 < 0);

		const yd1 = bBox2.minY - bBox1.minY;
		const yd2 = bBox2.minY - bBox1.maxY;
		const yd3 = bBox2.maxY - bBox1.minY;
		const yd4 = bBox2.maxY - bBox1.maxY;

		const isYInside =
			// bBox1 is y-wise inside of bBox2
			(yd1 < 0 && yd3 > 0) ||
			(yd2 < 0 && yd4 > 0) ||
			// bBox2 is y-wise inside of bBox1
			(yd1 > 0 && yd2 < 0) ||
			(yd3 > 0 && yd4 < 0);

		if (isXInside && isYInside) return 0;

		const minYDist = Math.min(
			Math.abs(yd1),
			Math.abs(yd2),
			Math.abs(yd3),
			Math.abs(yd4),
		);

		if (isXInside) return minYDist;

		const minXDist = Math.min(
			Math.abs(xd1),
			Math.abs(xd2),
			Math.abs(xd3),
			Math.abs(xd4),
		);

		if (isYInside) return minXDist;

		return (minXDist ** l + minYDist ** l) ** (1 / l);
	};

/**
 * From: https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
 * @param point - The point defined as a tuple of [x, y]
 *   coordinates.
 * @param polygon - 1D list of vertices defining the polygon.
 * @return If `true` point lies within the polygon.
 */
export const isPointInPolygon = (
	[px, py]: [number, number],
	polygon: number[],
): boolean => {
	let x1: number;
	let y1: number;
	let x2: number;
	let y2: number;
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
 * @param point - The point defined as a tuple of [x, y]
 *   coordinates.
 * @param rectangle - The rectangle defined
 *   as a quadruple of [minX, maxX, minY, maxY] coordinates.
 * @return If `true` the [x,y] point is in the rectangle.
 */
export const isPointInRect = (
	[x, y]: [number, number],
	[minX, maxX, minY, maxY]: [number, number, number, number],
): boolean => x >= minX && x <= maxX && y >= minY && y <= maxY;

/**
 * Check if a 2D or 1D point is within a rectangle or range
 * @param point - The point defined as a tuple of [x, y]
 *   coordinates.
 * @param rectangle - The rectangle defined
 *   as a quadruple of [minX, maxX, minY, maxY] coordinates.
 * @return If `true` the [x,y] point is in the rectangle.
 */
export const isPointHalfwayInRect = (
	[x, y]: [number, number],
	[minX, maxX, minY, maxY]: [number, number, number, number],
): boolean => (x >= minX && x <= maxX) || (y >= minY && y <= maxY);
