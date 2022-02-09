const path = require('path')
const gridsomeConfig = require('./gridsome.config')
const { estimateTimeToRead } = require('@gridsome/transformer-remark/lib/timeToRead')

const RemarkTransformer = require('@gridsome/transformer-remark')

function resolveAlias(filepath) {
  if (filepath.startsWith('@assets/')) {
    return filepath.replace('@assets', path.join(__dirname, 'src', 'assets'))
  }
  return filepath
}

const remark = new RemarkTransformer({},{});

function generateExcerpt(excerpt, length) {
  let regex = /^#+\s+(.*)/g

  excerpt = excerpt.replace(regex, "").slice(0, length);

  if (length && excerpt.length > length) {
    excerpt = excerpt.substr(0, excerpt.lastIndexOf(' ', length - 1))
  }

  return excerpt
}

module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('settings', gridsomeConfig.settings);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.onCreateNode(options => {
    console.log('extendNodeType', remark.extendNodeType);
    console.log('options', options);

    if (options.internal.typeName !== 'MarkdownPage') {
      return null;
    }
    // Set content type and timestamp for markdown pages
    options.contentType = options.fileInfo.directory.split('/')[0];
    options.createdAt = options.created ? new Date(options.created).getTime() : false;
    // Set optional header/teaser images
    options.header = options.header ? resolveAlias(options.header) : null;
    options.teaser = options.teaser ? resolveAlias(options.teaser) : null;
    // Set timeToRead and excerpt for markdown pages
    options.timeToRead = estimateTimeToRead(options.content, 230);
    options.excerpt = generateExcerpt(options.content, 200); // remark.extendNodeType(options).excerpt // .parse(options).excerpt

    console.log('excerpt', options.excerpt);

    return options;
  });
};
