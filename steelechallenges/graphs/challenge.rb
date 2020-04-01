class Graph

    attr_accessor :adjacency_list
    def initialize()
      @adjacency_list = {}
    end

    def add_vertex(vertex_name)
        if(!self.adjacency_list[vertex_name])
            self.adjacency_list[vertex_name] = []
        end
    end

    def add_edge(vertex_1, vertex_2)
        if(!self.adjacency_list[vertex_1])
            self.add_vertex(vertex_1)
        end
        if(!self.adjacency_list[vertex_2])
            self.add_vertex(vertex_2)
        end
        self.adjacency_list[vertex_1].push(vertex_2)
        self.adjacency_list[vertex_2].push(vertex_1)
    end

    def remove_edge(vertex_1, vertex_2)
        new_edges = self.adjacency_list[vertex_1].select {|ele| ele != vertex_2}
        self.adjacency_list[vertex_1] = new_edges
        new_edges = self.adjacency_list[vertex_2].select {|ele| ele != vertex_1}
        self.adjacency_list[vertex_2] = new_edges
    end

    def remove_vertex(vertex_name)
        self.adjacency_list[vertex_name].each {|edge| self.remove_edge(vertex_name, edge)}
        self.adjacency_list.delete(vertex_name)
    end
end

test_graph = Graph.new()
test_graph.add_vertex("Jack")
test_graph.add_edge("Jack", "Jill")
#test_graph.remove_edge("Jack", "Jill")
test_graph.remove_vertex("Jack")


puts test_graph.adjacency_list
