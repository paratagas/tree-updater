/**
 * Function to recursively update a given node and its children inside a tree structure
 * Works for frozen objects
 * To run tests use `npm test` or `yarn test`.
 *
 * @param {object} tree - Tree to update
 * @param {string} id - Node id
 * @param {object} values - Data to update from
 * @param {boolean} isTreeCopyCreated - Flag to prevent rewriting tree copy
 * 
 * @return {object} Unfrozen tree copy with updated data
 */
function updateTree(tree, id, values, isTreeCopyCreated = false) {
  let unfrozenTreeCopy = isTreeCopyCreated ? tree : {};

  if (!isTreeCopyCreated) {
    Object.keys(tree).forEach(key => {
      const frozenTreeNode = tree[key];
      const nodeCopy = {};
      
      Object.defineProperties(nodeCopy, {
        id: {
          value: frozenTreeNode.id,
          writable: true,
          enumerable: true,
          configurable: true,
        },
        value: {
          value: frozenTreeNode.value,
          writable: true,
          enumerable: true,
          configurable: true,
        },
        children: {
          value: frozenTreeNode.children,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      });

      unfrozenTreeCopy[frozenTreeNode.id] = nodeCopy;
    });
  }


  const unfrozenNode = unfrozenTreeCopy[id];
  unfrozenNode.value = values.value;

  if (unfrozenTreeCopy[id].children.length) {
    unfrozenTreeCopy[id].children.forEach(childId => {
      updateTree(unfrozenTreeCopy, childId, values, true);
    });
  }

  return unfrozenTreeCopy;
}

module.exports = updateTree;
