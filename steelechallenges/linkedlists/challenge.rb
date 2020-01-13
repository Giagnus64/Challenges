class DoublyLinkedList
    class Node 
        attr_accessor :value, :prev, :next
        def initialize(value = nil)
            @value = value
            @prev = nil
            @next = nil
        end
    end

    attr_accessor :length, :head, :tail

    def initialize
      @head = nil
      @tail = nil
      @length = 0
    end

    def print_list
        if self.length == 0
            puts "empty"
        else 
            currentNode = self.head
            pretty_print_node(currentNode)
            while(currentNode.next)
                currentNode = currentNode.next
                pretty_print_node(currentNode)
            end
        end
    end
    
    def pretty_print_list
        puts "List {
            length: #{self.length}
            head: #{self.head ? self.head.value : "none"}
            tail: #{self.tail ? self.tail.value : "none"}
        }"
    end
    
    def pretty_print_node(node)
        puts "Node {
            value: #{node.value}
            prev: #{node.prev ? node.prev.value : "none"}
            next: #{node.next ? node.next.value : "none"}
        }"
    end

    def push(val)
       newNode = Node.new(val)
       if(self.length == 0)
        self.head = newNode
        self.tail = newNode
       else
        self.tail.next = newNode
        newNode.prev = self.tail
        self.tail = newNode
       end
       self.length +=1
       return self
    end
    
end

list = DoublyLinkedList.new()
list.push(0)
list.push(1)
list.push(2)
list.pretty_print_list



