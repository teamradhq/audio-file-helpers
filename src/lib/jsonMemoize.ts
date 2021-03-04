import { existsSync } from 'fs';
import { resolve } from 'path';

import {
  AnyFunction,
  MemoKeyFunction,
  MemoizedFunction,
  MemoRecord,
} from '#types';

import {
  genericKeyFunction,
  readMemoFile,
  writeMemoFile
} from '@lib';

/**
 * Creates a memoised function which chaches results
 * to a json file on disk.
 *
 * @param   {AnyFunction}     fn        The function to memoize.
 * @param   {string}          memoFile  The filepath to use for json memo cache.
 * @param   {MemoKeyFunction} keyFn     Optional function to define a memo key.
 *
 * @return  {MemoizedFunction}
 */
export function jsonMemoize(
  fn: AnyFunction,
  memoFile: string,
  keyFn?: MemoKeyFunction,
): MemoizedFunction {
  const memoPath = resolve(memoFile);
  if (!existsSync(memoPath)) {
    writeMemoFile(memoPath, {});
  }

  const memo = readMemoFile(memoPath);
  const getKey = keyFn || genericKeyFunction;

  let memoCacheTimer: ReturnType<typeof setTimeout>;
  let lastLength = Object.keys(memo).length;

  const writeMemo = () => {
    writeMemoFile(memoPath, memo);
    console.clear()
    console.log(`Writing to ${memoPath}`);
  };

  return (...args) => {
    const key = getKey(args);
    if (!memo[key]) {
      memo[key] = fn(...args) as MemoRecord;

      clearTimeout(memoCacheTimer);

      const memoLength = Object.keys(memo).length;
      if (memoLength - lastLength > 100) {
        lastLength = memoLength;
        writeMemo();
      }  else {
        memoCacheTimer = setTimeout(writeMemo, 1000);
      }
    }

    return memo[key];
  }
}
