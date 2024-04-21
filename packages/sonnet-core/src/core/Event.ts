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

  on(eventName: string, listener: (...args: unknown[]) => void) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  once(eventName: string, listener: (...args: unknown[]) => void) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    if (!this.events[eventName].includes(listener)) {
      this.events[eventName].push(listener);
    }
  }

  off(eventName: string, listener?: (...args: unknown[]) => void) {
    const listeners = this.events[eventName];
    if (listeners && !listener) {
      delete this.events[eventName];
    } else if (listeners && listener) {
      this.events[eventName] = listeners.filter((l) => l !== listener);
    }
  }

  emit(eventName: string, ...args: unknown[]) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach((listener) => listener(...args));
    }
  }

  get length() {
    return Object.keys(this.events).length;
  }
}
