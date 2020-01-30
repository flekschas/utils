export const camelToConst = str =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

export const capitalize = str => `${str[0].toUpperCase()}${str.substr(1)}`;
