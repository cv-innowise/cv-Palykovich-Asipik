export const toRem = (px: number, current: number = 16): string => {
  return `${px / current}rem`;
};
