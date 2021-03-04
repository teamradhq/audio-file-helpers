import { readdirSync } from 'fs';

import { isAudioFile }from '@lib/isAudioFile';
// import {
//   reduceDirectoryContentsToAudioFiles as toAudioFiles,
// } from '@lib/reduceDirectoryContentsToAudioFiles';

/**
 * Add {current} directory's audio files to a list.
 *
 * @return  {string[]}
 */
export const reduceDirectoriesToFiles = (
  files:string[],
  current: string
): string[] => {
  const contents: string[] = readdirSync(current)
    .reduce((data:string[], filepath:string): string[] => {
      if (isAudioFile(filepath)) {
        data.push(filepath);
      }

      return data;
    }, []);

  return ([
    ...files,
    ...contents,
  ]);
}
