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
        
    end
end

test_graph = Graph.new()
test_graph.add_vertex("Jack");
puts test_graph.adjacency_list
