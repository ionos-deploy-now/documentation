const { Select, Input, List, Toggle } = require('enquirer');
const { actionsToChoices, contentSlugs, documentationLinkChoices } = require('./lib');


const mainActions = {
  createBlog: 'Create blog',
  createDocumentation: 'Create documentation',
};

async function mainPrompt() {
  const prompt = new Select({
    name: 'main',
    message: 'Choose action',
    choices: actionsToChoices(mainActions),
  });
  return await prompt.run();
}

async function titlePrompt(validate) {
  const prompt = new Input({
    name: 'title',
    message: 'Enter title',
    validate,
  });
  return await prompt.run();
}

async function descriptionPrompt() {
  const prompt = new Input({
    name: 'title',
    message: 'Enter description',
  });
  return await prompt.run();
}

async function tagsPrompt() {
  const prompt = new List({
    name: 'tags',
    message: 'Enter comma-separated list of tags',
  });
  return await prompt.run();
}

async function authorPrompt() {
  const authors = contentSlugs('team');
  const prompt = new Select({
    name: 'author',
    message: 'Which author?',
    choices: authors,
  });
  return await prompt.run();
}

async function editablePrompt() {
  const prompt = new Toggle({
    message: 'Is this page editable on github?',
    enabled: 'Yes',
    disabled: 'No',
    initial: true,
  });
  return await prompt.run();
}

async function adjacentLinkPrompt(message = 'Choose link') {
  const prompt = new Select({
    message,
    choices: [{ name: 'None' }, ...documentationLinkChoices()],
  });
  return await prompt.run();
}

module.exports = {
  mainPrompt,
  titlePrompt,
  descriptionPrompt,
  authorPrompt,
  tagsPrompt,
  editablePrompt,
  adjacentLinkPrompt,
};
