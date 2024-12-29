import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function getHTMLElement(parent: Element, selector: string): HTMLElement {
  const elem = parent.querySelector(selector);
  if (!(elem instanceof HTMLElement)) {
    throw new Error(`Undefined ${selector}`);
  }

  return elem;
}

export function useToggle(on: () => void, off: () => void, setDefault = false) {
  let isOn = !setDefault;
  return function toggle(condition: boolean) {
    if (condition && !isOn) {
      isOn = true;
      on();
    } else if (!condition && isOn) {
      isOn = false;
      off();
    }
  };
}

export function onState<T extends string>(start: T, fn: (previous: string | null, next: string | null) => void) {
  let currentState: T = start;
  fn(null, start);
  return function changeState(nextState: T) {
    if (nextState === currentState) return;
    const previous = currentState;
    currentState = nextState;
    fn(previous, nextState);
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
