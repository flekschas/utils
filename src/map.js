export const mergeMaps = (map1, map2) =>
  new Map(
    (function* merge() {
      yield* map1;
      yield* map2;
    })()
  );
