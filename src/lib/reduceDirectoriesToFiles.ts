import { readdirSync } from 'fs';
import { resolve } from 'path';

import { isAudioFile }from '@lib/index';

import { REGEX_AUDIO_FILE_EXTENSION } from '@CONSTANTS';

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
      if (filepath.match(REGEX_AUDIO_FILE_EXTENSION)) {
        data.push(resolve(current, filepath));
      }

      return data;
    }, []);

  return ([
    ...files,
    ...contents,
  ]);
}
