/** @format */

export const camelCase = (str: string, prefix = '-') => {
  return str.replace(new RegExp(`[${prefix}]` + '(.)', 'gi'), (_, letter) =>
    letter.toUpperCase(),
  );
};

export const pascalCase = (str: string, prefix = '-') => {
  str = camelCase(str, prefix);
  return ''.concat(str[0].toUpperCase()).concat(str.slice(1));
};

export const getKeys = <T>(obj: T): string[] => {
  return Object.keys(obj);
};
