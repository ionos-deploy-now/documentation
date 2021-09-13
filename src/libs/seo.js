export function metaInfo(title, description) {
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
    ],
  };
}
