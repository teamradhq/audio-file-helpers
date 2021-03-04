import { execSync } from 'child_process';

import {
  AnyFunction,
  MemoizedFunction
} from '#types';

import {
  HOME_LOG_DIRECTORY,
  NAMESPACE
} from '../CONSTANTS/index';

import {
  escapeShellText,
  jsonMemoize
} from '@lib';

export const getMimeTypeFunction = (filepath: string): string => (
  execSync(`file --mime-type -b "${escapeShellText(filepath)}"`, {
    encoding: 'utf-8',
    stdio: 'pipe',
  }).trim()
);

/**
 * Get the mime type of file at {filepath}.
 *
 * @param   {string}  filepath
 *
 * @return  {string}
 */
export const getMimeType: MemoizedFunction = jsonMemoize(
  getMimeTypeFunction as AnyFunction,
  `${HOME_LOG_DIRECTORY}/${NAMESPACE}Memo-getMimeType.json`,
  // ([key]):string  => String(key),
);

