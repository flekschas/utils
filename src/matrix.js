import { mean } from './vector';

export const matrixMeanRow = m => m.map(mean);

export const matrixMeanCol = m =>
  m.length
    ? m
        .reduce(
          (v, row) => row.map((x, i) => v[i] + x),
          new Array(m[0].length).fill(0)
        )
        .map(x => x / m.length)
    : [];
