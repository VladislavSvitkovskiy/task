export function recall<T>(fieldName: string): T | undefined {
  const data = localStorage.getItem(fieldName);
  return data && JSON.parse(data);
}

export function remember(fieldName: string, data: string): void {
  localStorage.setItem(fieldName, data);
}

export function check(fieldName: string): boolean {
  return Boolean(localStorage.getItem(fieldName));
}

export function forget(fieldName: string): void {
  localStorage.removeItem(fieldName);
}
