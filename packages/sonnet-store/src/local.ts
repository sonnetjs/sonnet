type Listener = () => void;

type Ref<T> = {
  value: T;
  _addListener: (listener: Listener) => void;
  _removeListener: (listener: Listener) => void;
};

export function ref<T>(initialState: T): Ref<T> {
  let value = initialState;
  let listeners = new Set<Listener>();

  function notifyListeners() {
    listeners.forEach((listener) => listener());
  }

  return {
    get value() {
      return value;
    },
    set value(newValue: T) {
      value = newValue;
      notifyListeners();
    },
    _addListener: (listener: Listener) => listeners.add(listener),
    _removeListener: (listener: Listener) => listeners.delete(listener),
  };
}

export function watch<T>(
  refs: Array<Ref<T>>,
  callback: Listener,
) {
  const run = () => {
    activeEffect = callback;
    callback();
    activeEffect = null;
  };

  run(); // run the effect immediately

  refs.forEach((ref) => {
    ref._addListener(run);
  });

  return () => {
    refs.forEach((ref) => {
      ref._removeListener(run);
    });
  };
}

// @ts-ignore
let activeEffect: Listener | null = null;
