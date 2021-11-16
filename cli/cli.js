const slugify = require('slugify');
const { buildTemplate, contentSlugs } = require('./lib');
const {
  mainPrompt,
  titlePrompt,
  slugPrompt,
  descriptionPrompt,
  authorPrompt,
  tagsPrompt,
  editablePrompt,
  adjacentLinkPrompt,
} = require('./prompts');


async function main() {
  const action = await mainPrompt();
  switch (action) {
    case 'createBlog':
      return await createBlog();
    case 'createDocumentation':
      return await createDocumentation();
    default:
      console.log('Missing action', action);
  }
}

async function createBlog() {
  let slug;
  const slugs = contentSlugs('blog');
  const title = await titlePrompt((title) => {
    slug = slugify(title, { lower: true });
    return slugs.includes(slug) ? `File with slug "${slug}" already exists` : true;
  });
  slug = await slugPrompt(slug);
  const description = await descriptionPrompt();
  const author = await authorPrompt();
  const tags = await tagsPrompt();
  const tagList = tags.map((tag) => `\n - ${tag}`).join('');
  buildTemplate('blog', {
    slug,
    title,
    description,
    author,
    tags: tagList,
    created: new Date().toISOString(),
  });
}

async function createDocumentation() {
  let slug;
  const slugs = contentSlugs('docs');
  const title = await titlePrompt((title) => {
    slug = slugify(title, { lower: true });
    return slugs.includes(slug) ? `File with slug "${slug}" already exists` : true;
  });
  slug = await slugPrompt(slug);
  const description = await descriptionPrompt();
  const editable = await editablePrompt();
  const prev = await adjacentLinkPrompt('Select previous link');
  const next = await adjacentLinkPrompt('Select next link');
  const context = {
    slug,
    title,
    description,
    editable,
  };
  if (prev !== 'None') {
    context.prev = prev;
  }
  if (next !== 'None') {
    context.next = next;
  }
  buildTemplate('docs', context);
}

module.exports = {
  main,
};
