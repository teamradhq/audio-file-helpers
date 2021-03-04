import { readdirSync } from 'fs';

import { isAudioFile }from '@lib/index';

const extensions = /\.(mp3|aif|aiff|wav|flac|m4a)$/;

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
      if (filepath.match(extensions)) {
        data.push(filepath);
      }

      return data;
    }, []);

  return ([
    ...files,
    ...contents,
  ]);
}
