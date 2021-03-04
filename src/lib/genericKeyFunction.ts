import {
  MemoKeyFunction,
} from '#types/MemoTypes';

const { stringify } = JSON;

/**
 * Just parse arguments to JSON string by default.
 *
 * @param   {MemoArguments}  args
 *
 * @return  {string}
 */
export const genericKeyFunction: MemoKeyFunction = (
  args => args.length === 1  ? String(args[0]) : stringify(args)
);
