export function useRef<T>(initialValue: T | null) {
  let current = initialValue;

  return {
    get current() {
      return current as T;
    },
    set current(value: T) {
      current = value;
    },
  };
}
