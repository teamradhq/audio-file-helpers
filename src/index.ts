/**
 * Find Duplicate Tracks
 *
 * This script will check each sub-directory in the
 * current working directory to see if there are audio
 * files with similar names.
 *
 * It extracts any key, bpm and file extensions from
 * file names.
 *
 * Any possible duplicates are logged to stdout.
 *
 */
import { inspect } from 'util';
const cwd = process.cwd();

/* eslint-disable no-console */
/**
 * Log an {item} to console.
 * @param  {any} item
 * @return {stdout}
 */
const log = (item: unknown): void => console.log(inspect(item, {
  colors: true,
  depth: Infinity,
}));
/* eslint-enable no-console */


import { listAudioFiles } from '@lib/listAudioFiles';
import { listSubDirectories } from '@lib/listSubDirectories';
import { matchMetaDataFromFileName } from '@lib/matchMetaDataFromFileName';


const directories = listSubDirectories(cwd);
const audiofiles = listAudioFiles(directories);

audiofiles.slice(-100).forEach((file) => {
  log(file);
  log(matchMetaDataFromFileName(file));
});
