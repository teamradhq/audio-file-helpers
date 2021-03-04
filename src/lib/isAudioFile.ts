const extensions = /\.(mp3|aif|aiff|wav|flac|m4a)$/;

/**
 * The file at {filepath} has an audio mime type.
 *
 * @param   {string}  filepath
 *
 * @return  {boolean}
 */
export const isAudioFile = (
  filepath: string
): boolean => !!filepath.match(extensions);
