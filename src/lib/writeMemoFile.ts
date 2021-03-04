import { writeFileSync } from 'fs';

import { MemoData } from '#types';

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
