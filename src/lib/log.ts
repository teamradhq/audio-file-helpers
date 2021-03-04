import { inspect } from 'util';

/* eslint-disable no-console */
/**
 * Log an {item} to console.
 * @param  {any} item
 * @return {stdout}
 */
export const log = (item: unknown): void => console.log(inspect(item, {
  colors: true,
  depth: Infinity,
}));
