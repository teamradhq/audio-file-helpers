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
const cwd = process.cwd();

import { log } from '@lib/log';
import { listAudioFiles } from '@lib/listAudioFiles';
import { listSubDirectories } from '@lib/listSubDirectories';
import { AudioTagMeta, matchMetaDataFromFileName } from '@lib/matchMetaDataFromFileName';

const directories = listSubDirectories(cwd);
const audiofiles = listAudioFiles(directories);


type DupeFileResult = [AudioTagMeta, ...string[]];

type AudioTagMetaEntry = {
  [key: string]: DupeFileResult;
};

type DupeCollection = {
  noMatch: string[],
  tracks: AudioTagMetaEntry,
  dupes: DupeFileResult[]
}

const result: DupeCollection = {
  noMatch: [],
  tracks: {},
  dupes: [],
}

audiofiles.forEach((file) => {
  const match = matchMetaDataFromFileName(file);

  if (Object.keys(match).length === 0) {
    result.noMatch.push(file);
    return;
  }

  const key = `${match.artist}::${match.title}`;
  result.tracks[key] = result.tracks[key] || [match];
  result.tracks[key].push(file);
});

log(Object.values(result.tracks).filter((arr) => arr[0].artist && arr[0].title && arr.length > 2));
