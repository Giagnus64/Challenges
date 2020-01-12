class DoublyLinkedList
    class Node 
        attr_accessor :value, :prev, :next
        def initialize(value)
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
            puts currentNode

            while(currentNode = currentNode.next)
                puts currentNode
            end
        end
    end

    def pretty_print_node
    
    end

    def push(val)
       newNode = Node.new(val)
       if(self.length == 0)
       self.head = newNode
       self.tail = newNode
       self.length += 1
       end
       return self
    end
    
end

list = DoublyLinkedList.new()
list.push(0);
list.printList



