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
  quartOut,
  quartInOut,
  quintIn,
  quintOut,
  quintInOut,
} from './animation';

export { array2dTranspose, clearArray, hasSameElements, unique } from './array';

export { camelToConst, capitalize } from './casing';

export {
  decToRgb,
  hexToDec,
  hexToRgbArray,
  hexToRgbaArray,
  rgbStrToRgbArray,
  rgbaStrToRgbaArray,
  rgbStrToDec,
  rgbToHex,
  toRgbaArray,
} from './color';

export { iteratorToArray } from './conversion';

export {
  addClass,
  createHtmlByTemplate,
  hasClass,
  isParentOf,
  removeAllChildren,
  removeLastChild,
  removeClass,
} from './dom';

export { cloneEvent, forwardEvent } from './event';

export { getD3FormatSpecifier } from './format';

export {
  map,
  mapFilter,
  forEach,
  pipe,
  some,
  withConstructor,
  withForwardedMethod,
  withProperty,
  withReadOnlyProperty,
  withStaticProperty,
} from './functional-programming';

export {
  lPointDist,
  l1PointDist,
  l2PointDist,
  lRectDist,
  isPointInPolygon,
  isPointInRect,
  isPointHalfwayInRect,
} from './geometry';

export { mergeMaps } from './map';

export { clamp, identity, isClose } from './math';

export { assign, deepClone, extend, update } from './object';

export { createWorker, toVoid, noop } from './other';

export { sortAsc, sortDesc, argSort, sortPos } from './sorting';

export { nthIndexOf, randomString } from './string';

export {
  debounce,
  nextAnimationFrame,
  throttle,
  throttleAndDebounce,
  wait,
  timeout,
} from './timing';

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
  isRgbStr,
  isRgbaStr,
  isString,
  isUint8,
  isUint8Array,
} from './type-checking';

export {
  aggregate,
  diff,
  lDist,
  l1Dist,
  l1DistByDim,
  l2Dist,
  l2DistByDim,
  l2Norm,
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
  rangeMap,
  range,
  sum,
  sumNan,
  sumVector,
  unionIntegers,
} from './vector';

export { version } from '../package.json';
