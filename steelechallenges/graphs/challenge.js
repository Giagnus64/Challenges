class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertexName){
        this.adjacencyList[vertexName] = [];
    }
}

let testGraph = new Graph();

testGraph.addVertex("smoothie")

console.log(testGraph.adjacencyList)

