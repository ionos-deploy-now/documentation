export function formatDate(timestamp, lang) {
  const date = new Date(timestamp);
  if (lang === 'de') {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');
  }
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

export function capitalize(string) {
  const str = `${string}`;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function stripProtocol(url) {
  return `${url}`.replace(/https?:\/\//, '');
}
