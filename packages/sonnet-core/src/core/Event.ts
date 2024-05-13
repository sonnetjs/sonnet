export class EventEmitter {
  private static instance: EventEmitter;
  private events: { [eventName: string]: ((...args: unknown[]) => void)[] };

  private constructor() {
    this.events = {};
  }

  static getInstance(): EventEmitter {
    if (!EventEmitter.instance) {
      EventEmitter.instance = new EventEmitter();
    }
    return EventEmitter.instance;
  }

  on<T>(
    eventName: string,
    listener: (...args: unknown[]) => T extends void ? void : T,
  ) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  once<T>(
    eventName: string,
    listener: (...args: unknown[]) => T extends void ? void : T,
  ) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    if (!this.events[eventName].includes(listener)) {
      this.events[eventName].push(listener);
    }
  }

  off<T>(
    eventName: string,
    listener?: (...args: unknown[]) => T extends void ? void : T,
  ) {
    const listeners = this.events[eventName];
    if (listeners && !listener) {
      delete this.events[eventName];
    } else if (listeners && listener) {
      this.events[eventName] = listeners.filter((l) => l !== listener);
    }
  }

  emit<T>(eventName: string, ...args: unknown[]): T[] | void {
    const listeners = this.events[eventName];
    if (listeners) {
      return listeners.map((listener) => listener(...args) as T);
    }
  }

  get length() {
    return Object.keys(this.events).length;
  }
}
