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
end

test_graph = Graph.new()
test_graph.add_vertex("Jack");
test_graph.add_edge("Jack", "Jill");


puts test_graph.adjacency_list
