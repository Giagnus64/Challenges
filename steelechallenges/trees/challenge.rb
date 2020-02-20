class Node
    attr_accessor :value, :left, :right
    def initialize(value)
        self.value = value 
        self.left = nil
        self.right = nil
    end
end

class Binary_Search_Tree
    attr_accessor :root
    def initialize
        self.root = nil
    end

    def compare_and_insert(current_node, new_node)
        if(current_node.value == new_node.value)
          puts "Node already exists!", current_node
          return false;
        end
        if(new_node.value > current_node.value)
            if(!current_node.right)
              current_node.right = new_node
              return true
            end
            self.compare_and_insert(current_node.right, new_node)
        elsif(new_node.value < current_node.value)
            if(!current_node.left)
                current_node.left = new_node
                return true
            end
            self.compare_and_insert(current_node.left, new_node)
        end
        return true
    end

    def insert(value)
        new_node = Node.new(value)
        if(!self.root)
            self.root = new_node
        else 
            self.compare_and_insert(self.root, new_node)
        end
        return self
    end

    def compare_and_find(current_node, queried_value)
        if(current_node.value == queried_value)
            return current_node
        end

        if(queried_value > current_node.value)

            if(current_node.right)
                return self.compare_and_find(current_node.right, queried_value)
            end

            return false

        elsif(queried_value < current_node.value)
            
            if(current_node.left)
                return self.compare_and_find(current_node.left, queried_value)
            end

            return false
        end
    end

    def find(value)
        if(!self.root)
            return false
        end

        return self.compare_and_find(self.root, value)
    end

    def print_tree
        current_node = self.root
        self.print_node(current_node)
        while current_node
            self.print_node(current_node)
            current_node = current_node.left
        end
        current_node = self.root
        while current_node
            self.print_node(current_node)
            current_node = current_node.right
        end
    end

    def print_node(node)
        puts "Node Value:#{node.value}, Left:#{node.left}, Right:#{node.right}"
    end
end

test_tree = Binary_Search_Tree.new()
test_tree.root = Node.new(10)
test_tree.root.left = Node.new(6)
test_tree.root.right = Node.new(15)

puts test_tree.insert(2)
puts test_tree.insert(12)
# test_tree.print_tree
test_tree.print_node(test_tree.find(12))