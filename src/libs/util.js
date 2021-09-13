export function formatDate(timestamp) {
  const date = new Date(timestamp)
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.')
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
