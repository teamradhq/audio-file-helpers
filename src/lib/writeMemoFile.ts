import {
  MemoData,
} from '#types/MemoTypes';

import {
  writeFileSync,
} from 'fs';

const {
  stringify,
} = JSON;

/**
 * Writes memo {data} to {file}.
 *
 * @param   {string}    file
 * @param   {MemoData}  data
 *
 * @return  {void}
 */
export function writeMemoFile(file: string, data: MemoData): void {
  writeFileSync(file, stringify(data), 'utf-8');
}
