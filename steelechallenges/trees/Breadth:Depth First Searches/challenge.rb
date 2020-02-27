
class QueueNode
    attr_accessor :value, :next
    def initialize(value)
        @value = value
        @next = nil
    end
end

class Queue 
    attr_accessor :size, :first, :last

    def initialize()
      @first = nil
      @last = nil 
      @size = 0 
    end

    def enqueue(val)
        new_node = QueueNode.new(val)

        if(self.size == 0)
            self.first = new_node
            self.last = new_node
        else
            self.last.next = new_node
            self.last = new_node
        end

        self.size +=1

        return self
    end

    # take off first node of list
    def dequeue
        if(self.size == 0)
            return false
        end
        dequeued_node = self.first
        new_first = dequeued_node.next
        if(!new_first)
            self.last = new_first
        end
        dequeued_node.next = nil
        self.first = new_first
        self.size -= 1

        return dequeued_node
    end
end

class TreeNode
    attr_accessor :value, :children
    def initialize(value)
        @value = value
        @children = []
    end
end 

class Tree
    attr_accessor :root

    def initialize()
        @root = nil 
    end

    def traverseBFS()
        if(!self.root)
            return false
        end
        line = Queue.new()
        tree_values = []
        line.enqueue(self.root)
        while(line.size != 0)
          node_children = line.first.value.children
          if(node_children.length != 0)
            node_children.each do |child|
            line.enqueue(child)
            end
          end
          tree_values.push(line.first.value.value)
          line.dequeue
        end
        return tree_values
    end

    def traverseDFS(type)
        if(!self.root)
            return false
        end
        @tree_values = []
        current = self.root

        def pre_order_helper(node)
            @tree_values.push(node.value)

            if(node.children.length != 0)
              node.children.each do |child|
                pre_order_helper(child)
              end
            end
            return true
        end
        
        def post_order_helper(node)
            if(node.children.length != 0)
              node.children.each do |child|
                post_order_helper(child)
              end
            end
            @tree_values.push(node.value)
            return true
        end

        def in_order_helper(node)
            if(node.children.length != 0)
              halfway = (node.children.length / 2).floor
              for i in (0...halfway) do 
                in_order_helper(node.children[i])
              end

              @tree_values.push(node.value)

              for i in (halfway...node.children.length) do 
                in_order_helper(node.children[i])
              end
            else
              @tree_values.push(node.value)
            end
            return true
        end

        case type 
        when "pre"
            pre_order_helper(current)
        when "post"
            post_order_helper(current)
        else
            in_order_helper(current)
        end

        @tree_values
    end
end





test_tree = Tree.new()
test_tree.root = TreeNode.new("H")
test_tree.root.children.push(TreeNode.new("e"))
test_tree.root.children.push(TreeNode.new("l"))
test_tree.root.children[0].children.push(TreeNode.new("l"))
test_tree.root.children[0].children.push(TreeNode.new("o"))
test_tree.root.children[0].children.push(TreeNode.new("W"))
test_tree.root.children[1].children.push(TreeNode.new("o"))
test_tree.root.children[1].children.push(TreeNode.new("r"))
test_tree.root.children[1].children.push(TreeNode.new("l"))
test_tree.root.children[1].children.push(TreeNode.new("d"))

#puts test_tree.traverseBFS()

test_tree2 = Tree.new()
test_tree2.root = TreeNode.new(10)
test_tree2.root.children.push(TreeNode.new(6))
test_tree2.root.children.push(TreeNode.new(15))
test_tree2.root.children[0].children.push(TreeNode.new(3))
test_tree2.root.children[0].children.push(TreeNode.new(8))
test_tree2.root.children[0].children.push(TreeNode.new(7))
test_tree2.root.children[1].children.push(TreeNode.new(20))

puts test_tree2.traverseDFS("in")

