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

    def pretty_print_list
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
    
    def pretty_print_list_details
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

    # push onto end of list
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

    # remove last node in list
    def pop
        if(self.length == 0)
            return false
        end
        popped_node = self.tail
        new_tail = self.tail.prev
        if(new_tail)
            new_tail.next = nil
        else 
            self.head = nil
        end
        popped_node.prev = nil
        self.tail = new_tail
        self.length -=1
        return popped_node
    end

    def unshift(val)
        new_node = Node.new(val)

        if(self.length == 0)
            self.tail = new_node
        else
            self.head.prev = new_node
            new_node.next = self.head
        end
        self.head = new_node
        self.length +=1

        pretty_print_node(new_node)
        return self
    end

    def shift
        if(self.length == 0)
            return false
        end
        shifted_node = self.head
        new_head = shifted_node.next
        if(new_head)
            new_head.prev = nil 
        else 
            self.tail = nil
        end
        shifted_node.next = nil
        self.head = new_head
        self.length -= 1

        pretty_print_node(shifted_node)
        return shifted_node
        
    end
    
end

list = DoublyLinkedList.new()
list.push(1)
list.push(2)
list.push(3)
list.shift
list.pretty_print_list
list.pretty_print_list_details




