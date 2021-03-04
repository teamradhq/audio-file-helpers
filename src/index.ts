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
const { inspect } = require('util');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const homedir = require('os').homedir();

const logDir = path.resolve(homedir, '.logs');

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
import { getMimeType } from '@lib/getMimeType';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const patterns = {
  trackNumber: '\\d{1,2}',
  artist: '[A-Za-z0-9, ]*',
  title: '[A-Za-z0-9,()"\' ]*',
  key:'\\d{1,2}[AB]',
  bpm:'\\d{2,3}',
  separator: '\\s?-\\s?',
};

const mapped = Object.entries(patterns).reduce((parts: string[], [key, pattern]) => ([
  ...parts,
  key !== 'separator' ? `(?<${key}>${pattern})?` : `(${pattern})?`
]), []);

const separator = String(mapped.pop());

const regExStr = mapped.join(separator).trim().slice(0, -1);

const trackTagMatch = new RegExp(`^${regExStr}`);

type AudioTagMeta = {
  trackNumber?: string | number;
  artist?: string;
  title?: string;
  key?: string;
  bpm?: string;
  separator?: string;
}

type MapperFunction = (key: string, value: string) => (string|number)[];

type TagMapType = {
  [key: string]: MapperFunction;
}

const tagMappers: TagMapType = {
  DEFAULT: (key, value) => [key, (value || '').trim()],
  artist: (key, value) => [
    key,
    value.split(',').map(artist => artist.trim())
      .sort().join(', ')
  ],
  trackNumber: (key, value) => [key, Number.parseInt(value || '0', 10)],
};

/**
 * Checks a file name for any metadata matching this pattern:
 *
 *    "{trackNumber} - {artist} - {title} - {key} - {bpm}"
 *
 * Any matches are parsed to a new AudioTagMeta object.
 *
 * @param   {string}        filepath
 *
 * @return  {AudioTagMeta}
 */
const matchMetaDataFromFileName = (filepath: string): AudioTagMeta => {
  const match = filepath.match(trackTagMatch)?.groups || {}
  const entries = Object.entries(match).map(([key, value]) => {
      const map = tagMappers[key] || tagMappers.DEFAULT;
      return map(key, value);
    });

  return Object.fromEntries(entries);
}

const directories = listSubDirectories(cwd);
const audiofiles = listAudioFiles(directories);



audiofiles.slice(0, 100).forEach((file) => {
  log(file);
  log(matchMetaDataFromFileName(file));
});

// const test = "Vanessa Daou - Once in a While (Charles Webster's Midnight Mix) - 2A - 125.aiff";
// log(test);
// log(matchMetaDataFromFileName(test));

