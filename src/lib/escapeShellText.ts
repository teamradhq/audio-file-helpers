/**
 * Escape characters {text} which might break shell syntax.
 *
 * @param   {string}  text
 *
 * @return  {string}
 */
export const escapeShellText = (text: string): string => (
  text?.replace(/["`]/g, '\\$&') || ''
);
