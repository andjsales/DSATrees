/** TreeNode: node for a general tree. */

class TreeNode {
  constructor (val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor (root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let totalSum = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      totalSum += current.val;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return totalSum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let evenCount = 0;
    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (current.val % 2 === 0) evenCount++;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }

    return evenCount;
  }


  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (current.val > lowerBound) count++;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
