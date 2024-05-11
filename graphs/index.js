/*
    * Graph Basics
    ? graph = nodes + edges

    graph is good at describing the relationship between things

    ? directed graph - Contain arrowhead on edges that points in one direction
    ? undirected graph - bidirectional graphs that can go either direction

    * graph anatomy
        - current node - the node you are currently at
        - neighbor  nodes - nodes that are accessible at the current node

    ! Always transfer a graph into an adjancy list
        keys of an adjancency lists are the nodes
        values are a list/array of neighboring nodes

    * Traversals
        ? DFS -> Stack
        ? BFS -> Queue

    * Time Complexity 
        ? n = # of nodes
        ? e = # of edges
*/
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
const dfs = (graph, source) => {
    const stack = [ source ];
    
    while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode);
        if (graph[currentNode].length > 0) {
            for (let neighbor of graph[currentNode]) {;
                stack.push(neighbor)
            };
        };
    };
};

const dfsRecursive = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        dfsRecursive(graph, neighbor);
    };
}

const bfs = (graph, source) => {
    const queue = [ source ];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        if (graph[current].length > 0) {
            for (let neighbor of graph[current]) {
                queue.push(neighbor);
            };
        }
    }
};

const hasPathDFS = (graph, source, target) => {
    if (source === target) return true;

    for (let neighbor of graph[source]) {
        if (hasPathDFS(graph, neighbor, target) === true) return true;
    }

    return false;
}

const hasPathBFS = (graph, source, target) => {
    const queue = [ source ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === target) return true;
        if (graph[current].length > 0) {
            for (let neighbor of graph[current]) {
                queue.push(neighbor)
            }
        }
    }
    return false;
}

const convert = (edges) => {
    const list = {};
    for (let edge of edges) {
        const [ x, y ] = edge;
        if (!list[x]) list[x] = [];
        if (!list[y]) list[y] = [];
        list[x].push(y);
        list[y].push(x);
    }
    return list
}
const undirectedPathDFS = (edges, source, target) => {
    const graph = convert(edges);
    return hasPath(graph, source, target, new Set());
}

const hasPath = (graph, source, target, visited) => {
    if (source === target) return true;
    if (visited.has(source)) return false;
    visited.add(source);

    for (let neighbor of graph[source]) {
        if (hasPath(graph, neighbor, target, visited) === true) return true;
    }

    return false
};


const connectComponentsCount = (graph, source, count = 0) => {
    const visited = new Set();
    for ( let node in graph) {
        if (explore(graph, node, visited) === true) count++ 
    }

    return count
}

const explore = (graph, source, visited) => {
    if (visited.has(String(source))) return false;

    visited.add(String(source));

    for (let neighbor of graph[source]) {
        explore(graph, neighbor, visited)
    }

    return true
}