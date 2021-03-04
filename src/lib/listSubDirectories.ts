import {
  existsSync,
  readdirSync,
} from 'fs';

import { resolve } from 'path';

const cwd = process.cwd();

import { isDirectory } from '@lib/isDirectory';

/**
 * Get a list of every sub-directory contained
 * within a {root} directory.
 *
 * @param   {string}  root
 *
 * @return  {string[]}
 */
export const listSubDirectories = (root: string = cwd): string[] => {
  if (!existsSync(root)) {
    return [];
  }

  return readdirSync(root).reduce((
    directories: string[],
    dir: string
  ): string[] => {
    const current = resolve(root, dir);

    if (!isDirectory(current)) {
      return directories;
    }

    return [
      ...directories,
      current,
      ...listSubDirectories(current)
    ];
  }, []);
};
