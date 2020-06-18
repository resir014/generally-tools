/**
 * A type-safe querySelector function, which throws if the given element was not found
 */
export function querySelector<E extends Element>(selector: string, parent: Element = document.body) {
  const element = parent.querySelector(selector);
  if (!element) {
    throw `Could not find element with selector "${selector}"`;
  }
  return element as E;
}
