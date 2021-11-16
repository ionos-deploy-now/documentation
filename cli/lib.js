const fs = require('fs');
const path = require('path');

const contentTitleRegex = /^#\s?(.*)$/m;
const envFilepath = path.join(__dirname, '..', '.cli');

function checkEnv() {
  if (!fs.existsSync(envFilepath)) {
    fs.writeFileSync(envFilepath, 'AUTHOR=');
  }
}

function writeEnv(key, value) {
  checkEnv();
  const data = fs.readFileSync(envFilepath, { encoding: 'utf8' });
  console.log(data);
}

function contentPath(type, slug) {
  if (slug) {
    return path.join(__dirname, '..', 'content', type, `${slug}.md`);
  }
  return path.join(__dirname, '..', 'content', type);
}

function contentSlugs(type) {
  return fs.readdirSync(contentPath(type))
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -3));
}

function slugExists(type, slug) {
  return contentSlugs(type).some((s) => s === slug);
}

function actionsToChoices(actions) {
  return Object.keys(actions).map((key) => ({
    name: key,
    message: actions[key],
    value: key,
  }));
}

function documentationLinkChoices() {
  return contentSlugs('docs').map((doc) => {
    const content = fs.readFileSync(contentPath('docs', doc), { encoding: 'utf8' });
    const matches = content.match(contentTitleRegex);
    return {
      name: doc,
      message: `${doc} > ${matches[1]}`,
      value: doc,
    };
  });
}

function buildTemplate(type, context) {
  if (context.slug) {
    const filepath = contentPath(type, context.slug);
    fs.writeFileSync(filepath, renderTemplate(type, context));
    console.log(`[${type}] Created ${filepath}`);
  }
}

function renderTemplate(type, context) {
  const filepath = path.join(__dirname, 'templates', `${type}.md`);
  if (!fs.existsSync(filepath)) {
    return JSON.stringify(context);
  }
  const file = fs.readFileSync(filepath, { encoding: 'utf8' });
  return Object.entries(context)
    .reduce((parsed, [key, value]) => parsed.replace(`$${key}`, `${value}`), file);
}

module.exports = {
  contentPath,
  contentSlugs,
  slugExists,
  actionsToChoices,
  documentationLinkChoices,
  buildTemplate,
};
