/**
 * Returns a string of concatenated class names.
 * The input array of class names can contain falsy values (false, null, undefined),
 * which will be filtered out before joining.
 * @param {...classes} classes an array of class names
 * @returns A string of concatenated class names
 */
export function joinClass(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}
