export type AudioTagMeta = {
  trackNumber?: string | number;
  artist?: string;
  title?: string;
  key?: string;
  bpm?: string;
  separator?: string;
};

/**
 * A function that maps an object entry's value.
 */
export type EntryMapperFunction = (
  key: string,
  value: string
) => (string|number)[];

/**
 * A collection of entry mappers, including
 * a default mapper.
 */
export type EntryMapperCollection = {
  DEFAULT: EntryMapperFunction;
  [key: string]: EntryMapperFunction;
};
