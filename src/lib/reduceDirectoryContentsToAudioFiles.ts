import { resolve }from 'path';

import { isAudioFile }from '@lib';

/**
 * Map a {file} in {dir} to its absolute path.
 *
 * @param   {string}  dir
 * @param   {string}  file
 *
 * @return  {string}
 */
export const mapFileToPath = (dir: string, file: string): string => (
  resolve(dir, file)
);

/**
 * Reduce contents of {dir} to a list of audio files it contains.
 *
 * @param   {string}    dir
 * @param   {string[]}  files
 * @param   {string}    file
 *
 * @return  {string[]}
 */
export const reduceDirectoryContentsToAudioFiles = (dir: string) => (
  files: string[],
  file: string
): string[] => {
  const filepath = resolve(dir, file);

  if (!files.includes(filepath) && isAudioFile(filepath)) {
    console.log(filepath);
    files.push(filepath);
    console.log(files.length);
  }

  return files;
};
