//undirected, unweighted
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertexName){
        if(!this.adjacencyList[vertexName]){
            this.adjacencyList[vertexName] = [];
        }
    }
    addEdge(vertex1, vertex2){
        //make sure vertexes exist
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)  
    }
}

let testGraph = new Graph();

testGraph.addVertex("Jack");
testGraph.addVertex("Jill");
testGraph.addEdge("Jack", "Jill")
testGraph.addEdge("Jack", "Ryan")

console.log(testGraph.adjacencyList)

