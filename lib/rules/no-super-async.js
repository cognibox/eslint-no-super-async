function hasAsyncParent(node) {
  while (node) {
    if (node.async === true) return true;
    node = node.parent;
  }
  return false;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: '',
      category: '',
      recommended: true,
      url: 'https://github.com/cognibox/eslint-no-super-async',
    },
  },
  create: function(context) {
    return {
      Super: function(node) {
        if (hasAsyncParent(node)) {
          context.report({
            node: node,
            message: 'Unexpected use of "super" in an async function',
          });
        }
      },
    };
  },
};
