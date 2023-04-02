/* eslint-disable func-names */
/* eslint-disable no-plusplus */

const Queue = function () {
  this.items = [];
};
Queue.prototype.enqueue = function (obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function () {
  return this.items.shift();
};
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

const makeBFS = function (graph, root) {
  const bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      steps: null,
      parent: null,
    };
  }
  // SOURCE GIVEN DIST=0 AND PARENT = Null
  const queue = new Queue();
  queue.enqueue(root);
  bfsInfo[root].steps = 0;

  // SOURCE SCANNED FOR CHILDREN
  while (!queue.isEmpty()) {
    const u = queue.dequeue();

    // get all children of u/SOURCE & give them properties; U is already done
    for (let i = 0; i < graph[u].length; i++) {
      // name each CHILD v, ONE BY ONE
      const v = graph[u][i];
      if (bfsInfo[v].steps === null) {
        // give each a 'distance'
        bfsInfo[v].steps = bfsInfo[u].steps + 1;
        // give each a predecessor/parent
        bfsInfo[v].parent = u;
        // put EACH CHILD OF SOURCE/V IN q: to become u in next iteration
        queue.enqueue(v);
      }
    }
  }
  return bfsInfo;
};
export default makeBFS;
