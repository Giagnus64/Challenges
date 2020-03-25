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
    removeEdge(vertex1, vertex2){
        let newEdges = this.adjacencyList[vertex1].filter((ele => ele !== vertex2))
        this.adjacencyList[vertex1] = newEdges;
        newEdges = this.adjacencyList[vertex2].filter((ele => ele !== vertex1))
        this.adjacencyList[vertex2] = newEdges;
    }

    removeVertex(vertexName){
        this.adjacencyList[vertexName].forEach((edge) => {
            this.removeEdge(vertexName, edge)
        })
        delete this.adjacencyList[vertexName]
    }
}

let testGraph = new Graph();

testGraph.addVertex("Jack");
testGraph.addVertex("Jill");
testGraph.addEdge("Jack", "Jill")
testGraph.addEdge("Jack", "Ryan")
testGraph.addEdge("Jack", "Sally")
testGraph.addEdge("Jill", "Sally")
testGraph.addEdge("Ben", "Bob")
testGraph.addEdge("Ben", "Jill")
testGraph.addEdge("Ben", "Sally")
testGraph.addEdge("Bob", "Sally")

testGraph.removeVertex("Sally")

console.log(testGraph.adjacencyList)

