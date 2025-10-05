export { version } from "../package.json";
export {
	cubicIn,
	cubicInOut,
	cubicOut,
	interpolateNumber,
	interpolateVector,
	linear,
	quadIn,
	quadInOut,
	quadOut,
	quartIn,
	quartInOut,
	quartOut,
	quintIn,
	quintInOut,
	quintOut,
} from "./animation";
export { array2dTranspose, clearArray, hasSameElements, unique } from "./array";
export { camelToConst, capitalize } from "./casing";
export {
	decToRgb,
	hexToDec,
	hexToRgbArray,
	hexToRgbaArray,
	rgbaStrToRgbaArray,
	rgbStrToDec,
	rgbStrToRgbArray,
	rgbToHex,
	toRgbaArray,
} from "./color";
export { iteratorToArray } from "./conversion";
export {
	addClass,
	createHtmlByTemplate,
	hasClass,
	isParentOf,
	removeAllChildren,
	removeClass,
	removeLastChild,
} from "./dom";
export { cloneEvent, forwardEvent } from "./event";
export { getD3FormatSpecifier } from "./format";
export {
	forEach,
	map,
	mapFilter,
	pipe,
	some,
	withConstructor,
	withForwardedMethod,
	withProperty,
	withReadOnlyProperty,
	withStaticProperty,
} from "./functional-programming";
export {
	isPointHalfwayInRect,
	isPointInPolygon,
	isPointInRect,
	l1PointDist,
	l2PointDist,
	lPointDist,
	lRectDist,
} from "./geometry";
export { mergeMaps } from "./map";
export { clamp, identity, isClose } from "./math";
export { assign, deepClone, extend, update } from "./object";
export { createWorker, noop, toVoid } from "./other";
export { argSort, sortAsc, sortDesc, sortPos } from "./sorting";
export { nthIndexOf, randomString } from "./string";
export {
	debounce,
	nextAnimationFrame,
	throttle,
	throttleAndDebounce,
	timeout,
	wait,
} from "./timing";
export {
	isArray,
	isFunction,
	isHex,
	isNormFloat,
	isNormFloatArray,
	isNumber,
	isObject,
	isRgbArray,
	isRgbaArray,
	isRgbaStr,
	isRgbStr,
	isString,
	isUint8,
	isUint8Array,
} from "./type-checking";
export {
	aggregate,
	diff,
	l1Dist,
	l1DistByDim,
	l2Dist,
	l2DistByDim,
	l2Norm,
	lDist,
	max,
	maxNan,
	maxVector,
	mean,
	meanNan,
	meanVector,
	median,
	medianVector,
	min,
	minNan,
	minVector,
	mod,
	normalize,
	range,
	rangeMap,
	sum,
	sumNan,
	sumVector,
	unionIntegers,
} from "./vector";
