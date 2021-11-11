export function formatDate(timestamp, lang) {
  const date = new Date(timestamp);
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  if (lang === 'de') {
    return [day, month, year].join('.');
  }
  return [month, day, year].join('/');
}

export function capitalize(string) {
  const str = `${string}`;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function stripProtocol(url) {
  return `${url}`.replace(/https?:\/\//, '');
}
