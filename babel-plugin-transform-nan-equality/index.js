module.exports = function({ types: t }) {
  return {
    name: 'transform-nan-equality',
    visitor: {
      BinaryExpression(path) {
        if (
          (path.node.operator !== '==' && path.node.operator !== '===') &&
          (path.node.left.name !== t.identifier('NaN').name) &&
          (path.node.right.name !== t.identifier('NaN').name)) {
          return
        }

        if (path.node.left.name === t.identifier('NaN').name) {
            path.replaceWithSourceString(`isNan(${path.node.right.name})`)
        } else if (path.node.right.name === t.identifier('NaN').name) {
            path.replaceWithSourceString(`isNan(${path.node.left.name})`)
        }
      }
    }
  };
};
