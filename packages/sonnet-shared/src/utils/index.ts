export function isServer() {
  return typeof window === 'undefined' || typeof document === 'undefined';
}

export function isBrowser() {
  return !isServer();
}
