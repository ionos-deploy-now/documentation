const map = require('unist-util-map');

const addClasses = (node, classes) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];
  node.data.hProperties.className.push(classes);
  return node;
};

function wrapNode(node) {
  const wrapper = Object.assign({}, node, {
    type: 'paragraph',
    children: [node],
    data: {
      //hName: 'div',
    },
  })
  delete node.position;
  return addClasses(wrapper,`${node.type}-wrapper`);
}

module.exports = function () {
  return async function transform(tree) {
    return map(tree, (node) => {
      if (node.type === 'table') console.log('----------\nNode: ', node);
      const newNode = node.type === 'table' ? wrapNode(node) : node;
      if (node.type === 'table') {
        console.log('new node:', newNode, newNode.children[0]);
      }
      return newNode
    });
  };
};
