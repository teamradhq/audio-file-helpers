import { REGEX_AUDIO_FILE_EXTENSION } from '@CONSTANTS';

console.log('Hello');

/**
 * The file at {filepath} has an audio mime type.
 *
 * @param   {string}  filepath
 *
 * @return  {boolean}
 */
export const isAudioFile = (
  filepath: string
): boolean => !!filepath.match(REGEX_AUDIO_FILE_EXTENSION)
