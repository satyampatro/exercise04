

exports.checkForCircularDependecyInTasks = function (dependencyGraph, currentState, task) {
    let taskList = dependencyGraph.tasks;

    if (detectCycle(taskList)) {
        throw new Error('Invalid dependency graph.');
    }

    if (currentState.tasks[task].status === 'completed') {
        return false;
    } else if (taskList[task].dependency.length > 0) {
        let dependency = taskList[task].dependency;
        for (let i = 0; i < dependency.length; i++) {
            if (currentState.tasks[dependency[i]].status === 'pending') {
                return false;
            }
        }
    }
    return true;
}

let detectCycle = function (taskList) {
    // build adjaceancy list 
    let adjList = {};
    for (let i = 0; i < taskList.length; i++) {
        adjList[i] = taskList[i].dependency;
    }

    const graphNodes = Object.keys(adjList);
    const visited = {};
    const recStack = {};

    for (let i = 0; i < graphNodes.length; i++) {
        const node = graphNodes[i];
        if (detectCycleUtil(node, visited, recStack, adjList)) {
            return true;
        }
    }
    return false;
}

let detectCycleUtil = function (vertex, visited, recStack, adjList) {
    if (!visited[vertex]) {
        visited[vertex] = true;
        recStack[vertex] = true;
        const nodeNeighbours = adjList[vertex];
        for (let i = 0; i < nodeNeighbours.length; i++) {
            const currentNode = nodeNeighbours[i];
            console.log(vertex, currentNode)
            if (!visited[currentNode] && detectCycleUtil(currentNode, visited, recStack, adjList)) {
                return true;
            } else if (recStack[currentNode]) {
                return true;
            }
        }
    }
    recStack[vertex] = false;
    return false;
}