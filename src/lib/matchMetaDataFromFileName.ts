import { basename } from 'path';
/**
 * Audio file metadata, which may be present in its name.
 */
export type AudioTagMeta = {
  trackNumber?: string | number;
  artist?: string;
  title?: string;
  key?: string;
  bpm?: string;
  separator?: string;
}

/**
 * A function that maps an object entry's value.
 */
export type EntryMapperFunction = (key: string, value: string) => (string|number)[];

/**
 * A collection of entry mappers, including
 * a default mapper.
 */
export type EntryMapperCollection = {
  DEFAULT: EntryMapperFunction;
  [key: string]: EntryMapperFunction;
}

/**
 * RegExp patterns for identifying certain
 * metadata from a string value.
 *
 * @var {AudioTagMeta}
 */
const patterns: Required<AudioTagMeta> = {
  trackNumber: '\\d{1,2}',
  artist: '[A-Za-z0-9, ]*',
  title: '[A-Za-z0-9,()"\' ]*',
  key:'\\d{1,2}[AB]',
  bpm:'\\d{2,3}',
  separator: '\\s?-\\s?',
};

/**
 * Named, optional groups for each RegExp pattern.
 */
const patternRegExpGroups: string[] = Object.entries(patterns)
  .reduce((parts: string[], [key, pattern]) => ([
    ...parts,
    key !== 'separator' ? `(?<${key}>${pattern})?` : `(${pattern})?`
  ]), []);

/**
 * Pattern for matching string separators.
 */
const separator = String(patternRegExpGroups.pop());

/**
 * Regex should match types of metadata in order:
 * {trackNumber} - {artist} - {title} - {key} - {bpm}
 */
const trackTagMatch = new RegExp(`^${patternRegExpGroups.join(separator).trim().slice(0, -1)}`);

const tagMatchMappers: EntryMapperCollection = {
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
export const matchMetaDataFromFileName = (filepath: string): AudioTagMeta => {
  const match = basename(filepath).match(trackTagMatch)?.groups || {}
  const entries = Object.entries(match).map(
    ([key, value]) => (tagMatchMappers[key] || tagMatchMappers.DEFAULT)(key, value)
  );

  return Object.fromEntries(entries);
}
