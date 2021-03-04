import { readFileSync } from 'fs';

import { MemoData } from '#types';

const { parse } = JSON;

/**
 * Gets the memo data from {file}.
 *
 * @param   {string}    file
 *
 * @return  {MemoData}
 */
export function readMemoFile(file: string): MemoData {
  return parse(readFileSync(file, 'utf-8'));
}
