import {
  reduceDirectoriesToFiles
} from '@lib';
/**
* List all audio files found in a collection of directories.
*
* @param   {string[]}  dirs
*
* @return  {string[]}
*/
export const listAudioFiles = (dirs: string[]): string[] => dirs
  .reduce(reduceDirectoriesToFiles, []);
