export function generateUUID(): string {
  return Math.random().toString(36).substr(2, 16)
}