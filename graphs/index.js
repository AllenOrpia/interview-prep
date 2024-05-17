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


const largestComponent = (graph) => {
    let largest = 0;
    for (let node in graph) {
       largest = Math.max(largest,explore2(graph, node, new Set() ) )
    }

    return largest;
}


const explore2 = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;
    visited.add(String(current))
    let count = 1;

    for ( let neighbor of graph[current]) {
        count += explore(graph, neighbor, visited)
    };

    return count;
}


const shortestPath = (source, target, graph) => {
    const queue = [ source ];
    const visited = new Set();
    let count = 0;

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (visited.has(String(currentNode))) continue;
        visited.add(String(currentNode));

        for (let neighbor of graph[currentNode]) {
            if (neighbor === target) return count;
        }

        count++
    }

    return null
}


const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r ++) {
        for ( let c = 0; c < grid[0].length; c ++) {
            if (explore(grid, r, c, visited) === true) count++
        }
    }

    return count;
}

const exploreIsland = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if (!rowInbounds && !colInbounds) return false;

    if (grid[r,c] === 'W') return false;
    
    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    exploreIsland(grid, r - 1, c, visited)
    exploreIsland(grid, r + 1, c, visited)
    exploreIsland(grid, r, c - 1, visited)
    exploreIsland(grid, r, c + 1, visited)


    return true;

};


const minIsland = (graph) => {
    let min = Infinity;
    const visited = new Set();
    for(let r = 0; r < graph.length; r++) {
        for (let c = 0; c < graph[0].length; c++) {
            min = Math.min(min,exploreIsland2(graph, r, c, visited));
        }
    }

    return min;
};

const exploreIsland2 = (graph, r , c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if (!rowInbounds && !colInbounds) return 0;
    if (grid[r,c] === 'W') return 0;
    
    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    size += exploreIsland2(graph, r - 1, c, visited)
    size += exploreIsland2(graph, r + 1, c, visited)
    size += exploreIsland2(graph, r, c - 1, visited)
    size += exploreIsland2(graph, r, c + 1, visited)

    return size;


}