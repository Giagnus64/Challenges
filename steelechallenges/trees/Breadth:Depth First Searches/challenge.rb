
class QueueNode
    attr_accessor :value, :next
    def initialize(value)
        @value = value
        @next = nil
    end
end

class Tree
    attr_accessor :root
    def initialize()
        @root = nil 
    end
end

class TreeNode
    attr_accessor :value, :children
    def initialize(value)
        @value = value
        @children = []
    end
end 

class Queue 
    attr_accessor :size, :first, :last
    def initialize()
      @first = nil
      @last = nil 
      @size = nil  
    end
end