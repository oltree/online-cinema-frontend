export const getObjectKeys = <T extends object>(obj: T): Array<keyof T> =>
  Object.keys(obj) as Array<keyof T>;
