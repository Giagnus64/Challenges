#stacks and queues
class Node 
    attr_accessor :value, :next
    def initialize(value = nil)
        @value = value
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
        self.size +=1

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
        self.size -= 1

        #pretty_print_node(popped_node)
        return popped_node
    end

    def pretty_print_list
        if self.size == 0
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
            next: #{node.next ? node.next.value : "none"}
        }"
    end
    def pretty_print_list_details
        puts "List {
            length: #{self.size}
            head: #{self.first ? self.first.value : "none"}
            tail: #{self.last ? self.last.value : "none"}
        }"
    end
    

end
=begin
stack_trial = Stack.new()

stack_trial.push("a")
stack_trial.pretty_print_list_details
stack_trial.pretty_print_list()

stack_trial.push("b")
stack_trial.pretty_print_list_details
stack_trial.pretty_print_list()

stack_trial.push("c")
stack_trial.pretty_print_list()

stack_trial.pop()
stack_trial.pretty_print_list()
=end
class Queue

    attr_accessor :size, :first, :last

    def initialize
      @first = nil
      @last = nil
      @size = 0
    end

    def enqueue(val)
        new_node = Node.new(val)

        if(self.size == 0)
            self.first = new_node
            self.last = new_node
        else
            self.last.next = new_node
            self.last = new_node
        end

        self.size +=1

        #pretty_print_node(new_node)
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

        #pretty_print_node(dequeued_node)
        return dequeued_node
    end

    def pretty_print_list
        if self.size == 0
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
            next: #{node.next ? node.next.value : "none"}
        }"
    end
    def pretty_print_list_details
        puts "List {
            length: #{self.size}
            head: #{self.first ? self.first.value : "none"}
            tail: #{self.last ? self.last.value : "none"}
        }"
    end
    

end

queue_trial = Queue.new()

queue_trial.enqueue("a")
queue_trial.pretty_print_list_details
queue_trial.pretty_print_list()

queue_trial.enqueue("b")
queue_trial.pretty_print_list_details
queue_trial.pretty_print_list()

queue_trial.enqueue("c")
queue_trial.pretty_print_list()

queue_trial.dequeue()
queue_trial.pretty_print_list()