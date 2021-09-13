export function formatDate(timestamp) {
  const date = new Date(timestamp)
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.')
}

export function capitalize(string) {
  const str = string.toString();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function stripProtocol(url) {
  return url.replace(/https?:\/\//, '');
}
