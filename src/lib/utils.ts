export const partial = (fn: any, ...args: any) => fn.bind(null, ...args);
