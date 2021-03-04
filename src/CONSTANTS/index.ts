import path from 'path';
import { homedir } from 'os'


/**
 * A namespace to use in output/data files.
 *
 * @var {[type]}
 */
export const NAMESPACE = "AudioFileHelpers";

/**
 * A directory in the user's home folder to log to.
 *
 * @var {string}
 */
export const HOME_LOG_DIRECTORY = path.resolve(homedir(), '.logs');

/**
 * A RegExp that checks for common audio file extensions.
 *
 * @var {RegExp}
 */
export const REGEX_AUDIO_FILE_EXTENSION = /\.(mp3|aiff?|wav|flac|m4a)$/;
