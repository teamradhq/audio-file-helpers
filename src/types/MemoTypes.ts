/**
 * The return value of a memoized function call.
 */
export type MemoRecord = Record<string, unknown>;

export type ArgumentValue = string | number | unknown;

export type ReturnValue = ReturnType<() => string | number | unknown>

/**
 * An object containing the memo cache of previous calls.
 */
export type MemoData = {
  [key: string]: MemoRecord;
};

/**
 * List of arguments that are passed to memo function.
 */
export type MemoArguments = ReturnValue[];

/**
 * Any function that can be memoized can accept any
 * arguments and return any value.
 *
 * @param   {A}  args
 *
 * @return  {ReturnValue}
 */
export type AnyFunction = <A = unknown>(args?: A) => ReturnValue;

/**
 * A function that can be called with {args} to
 * generate a memo key value.
 *
 * @param   {MemoArguments[]}  args
 *
 * @return  {string}
 */
export type MemoKeyFunction = (args: MemoArguments) => string;

/**
 * A memoized function will be called and added to cache
 * if it's not already contained within.
 *
 * @param   {MemoArguments}  args
 *
 * @return  {MemoRecord}
 */
export type MemoizedFunction = (...args: MemoArguments) => ReturnValue;
