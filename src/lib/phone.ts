/** Strip to at most 10 US phone digits. */
export function phoneDigitsOnly(value: string): string {
  return value.replace(/\D/g, '').slice(0, 10);
}

/** Display as (area) prefix-XXXX — area code always in parentheses. */
export function formatPhoneDisplay(digits: string): string {
  const d = phoneDigitsOnly(digits);
  if (d.length === 0) return '';
  if (d.length <= 3) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function isCompletePhone(digits: string): boolean {
  return phoneDigitsOnly(digits).length === 10;
}

/** Canonical formatted string for API storage, e.g. (423) 523-9167 */
export function formatPhoneForSubmit(digits: string): string {
  const d = phoneDigitsOnly(digits);
  if (d.length !== 10) return d;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
