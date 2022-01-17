const path = require('path')
const gridsomeConfig = require('./gridsome.config')

function resolveAlias(filepath) {
  if (filepath.startsWith('@assets/')) {
    return filepath.replace('@assets', path.join(__dirname, 'src', 'assets'))
  }
  return filepath
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
    if (options.internal.typeName !== 'MarkdownPage') {
      return null;
    }
    // Set content type and timestamp for markdown pages
    options.contentType = options.fileInfo.directory.split('/')[0];
    options.createdAt = options.created ? new Date(options.created).getTime() : false;
    // Set optional header/teaser images
    options.header = options.header ? resolveAlias(options.header) : null;
    options.teaser = options.teaser ? resolveAlias(options.teaser) : null;
    return options;
  });
};
