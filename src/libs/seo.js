export function metaInfo({ title, description }) {
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
        key: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
    ],
    script: [],
  };
}

export class JsonLd {
  static wrapper(data) {
    return {
      type: 'application/ld+json',
      json: Object.assign(JsonLd.defaults(), data),
    }
  }

  static defaults() {
    return {
      '@context': 'https://schema.org',
    };
  }

  static blogPost(data = {}) {
    return JsonLd.wrapper({
      '@type': 'BlogPosting',
      headline: data.headline || data.title,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': data.url,
      },
      datePublished: data.createdAt,
      publisher: {
        '@type': 'Organization',
        name: 'IONOS SE',
      },
      articleBody: data.content,
    });
  }
}
