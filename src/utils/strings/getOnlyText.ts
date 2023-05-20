export const getOnlyText = (
  _string: string,
  limit: null | number = null
): string => {
  let result = _string
    .replace(/<[^>]+>|&[^;]+./g, '')
    .replace(/\p{Extended_Pictographic}/gu, '');

  if (limit && result.length > limit) {
    result = result.slice(0, limit) + '...';
  }

  return result;
};
