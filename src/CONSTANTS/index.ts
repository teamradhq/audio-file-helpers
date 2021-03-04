import path from 'path';
import { homedir } from 'os'

/**
 * A directory in the user's home folder to log to.
 *
 * @var {string}
 */
export const HOME_LOG_DIRECTORY = path.resolve(homedir(), '.logs');

export const NAMESPACE = "AudioFileHelpers";
