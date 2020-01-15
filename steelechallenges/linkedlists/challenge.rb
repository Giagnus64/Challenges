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
    # add to front of list
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

        #pretty_print_node(new_node)
        return self
    end

    # take off first node of list
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

        #pretty_print_node(shifted_node)
        return shifted_node
    end

    def insert_at_index(index, val)
        #return false if index doesnt exist
        if(index > self.length)
            return false
        end
        #handle edge cases
        if(index == 0)
            self.unshift(val)
        elsif(index == self.length)
            self.push(val)
        else
            new_node = Node.new(val)
            current_node = self.head.next
            current_index = 1

            while(current_index != index)
                current_node = current_node.next
                current_index += 1
            end

            before = current_node.prev
            after = current_node
            before.next = new_node
            after.prev = new_node
            new_node.next = after
            new_node.prev = before
            self.length += 1
        end

        return self
    end

#     insertAtIndex(index, val) {
#     //if index doesn't exist
#     if(index > this.length){
#         return false
#     }
#     if (index == 0) {
#       this.unshift(val);
#     } else if (index == this.length - 1) {
#       this.push(val);
#     } else {
#       const newNode = new Node(val);
#       const after = this.accessAtIndex(index);
#       const before = after.prev;
#       after.prev = newNode;
#       before.next = newNode;
#       newNode.next = after;
#       newNode.prev = before;
#       this.length++;
#     }
#     return this;
#   }
    
end

list = DoublyLinkedList.new()
list.push("b")
list.push("c")
list.push("e")
list.insert_at_index(0, "a")
list.insert_at_index(3, "d")
list.insert_at_index(5, "f")
puts list.insert_at_index(8, "foo")


list.pretty_print_list
list.pretty_print_list_details




