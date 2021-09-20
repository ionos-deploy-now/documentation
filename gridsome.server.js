module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('settings', require('./gridsome.config').settings);
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
    return options;
  });
};
