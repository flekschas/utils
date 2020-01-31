export const isHexStr = str => str[0] === '#';

export const isRgbStr = str => str.substring(0, 4) === 'rgb(';

export const isRgbaStr = str => str.substring(0, 4) === 'rgba';

export const hexStrToDec = hexStr => parseInt(hexStr.substr(1), 16);

export const rgbStrToDec = hexStr =>
  hexStr
    .match(/(\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?/)
    .slice(1, 4)
    // eslint-disable-next-line no-bitwise
    .map((x, i) => +x << (8 * (2 - i)))
    .reduce((x, sum) => sum + x, 0);

export const rgbToHex = (r, g, b) => {
  const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};
