export const objectToQueryParams = (queryParams: object): string => {
  return queryParams ?
    Object.entries(queryParams).reduce((acc, [key, val], index) => {
      const sign = index === 0 ? '?' : '&';
      acc += `${sign}${key}=${val}`;
      return acc;
    }, '')
    : '';
}
