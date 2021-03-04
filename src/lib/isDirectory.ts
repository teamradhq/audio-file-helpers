import {
  existsSync,
  lstatSync,
} from 'fs';

/**
 * The {filepath} refers to a directory.
 *
 * @param   {string}   filepath
 *
 * @return  {boolean}
 */
export const isDirectory = (filepath: string): boolean => (
  existsSync(filepath) && lstatSync(filepath).isDirectory()
);
