#stacks and queues
class Node 
    attr_accessor :value, :prev, :next
    def initialize(value = nil)
        @value = value
        @prev = nil
        @next = nil
    end
end

class Stack

    attr_accessor :size, :first, :last

    def initialize
      @first = nil
      @last = nil
      @size = 0
    end

    def push(val)
        new_node = Node.new(val)

        if(self.size == 0)
            self.first = new_node
            self.last = new_node
        else
            new_node.next = self.first
            self.first = new_node
        end
        self.length +=1

        #pretty_print_node(new_node)
        return self
    end

    # take off first node of list
    def pop
        if(self.size == 0)
            return false
        end
        popped_node = self.first
        new_first = popped_node.next
        if(!new_first)
            self.last = new_first
        end
        popped_node.next = nil
        self.first = new_first
        self.length -= 1

        #pretty_print_node(popped_node)
        return popped_node
    end

    def pretty_print_list
        if self.length == 0
            puts "empty"
        else 
            current_node = self.first
            pretty_print_node(current_node)
            while(current_node.next)
                current_node = current_node.next
                pretty_print_node(current_node)
            end
        end
    end

    def pretty_print_node(node)
        puts "Node {
            value: #{node.value}
            prev: #{node.prev ? node.prev.value : "none"}
            next: #{node.next ? node.next.value : "none"}
        }"
    end

end