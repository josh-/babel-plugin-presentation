module.exports = function({ types: t }) {
  return {
    name: 'transform-fun-chaos',
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !=='+') return

        const afterFivePM = (new Date()).getHours() >= 17
        if (afterFivePM) {
          path.replaceWith(
            t.binaryExpression('-', path.node.left, path.node.right)
          );
        }
      }
    }
  };
};