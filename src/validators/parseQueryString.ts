/* eslint-disable @typescript-eslint/no-explicit-any */
const parseQueryString = (query: string): object => {
  const vars: string[] = query.split('&');
  const result: any = {};

  for (let i = 0; i < vars.length; i++) {
    const pair: string[] = vars[i].split('=');
    const key: string = decodeURIComponent(pair[0]);
    const value: string = decodeURIComponent(pair[1]);

    if (typeof result[key] === 'undefined') {
      result[key] = decodeURIComponent(value);
    } else if (typeof result[key] === 'string') {
      const arr: any[] = [result[key], decodeURIComponent(value)];
      result[key] = arr;
    } else {
      result[key].push(decodeURIComponent(value));
    }
  }

  return result;
};

export default parseQueryString;
