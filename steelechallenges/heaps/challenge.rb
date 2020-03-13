class Max_Binary_Heap
    
    attr_accessor :values

    def initialize()
      @values = [];
    end

    def swap(index1, index2)
        temp = self.values[index1]
        self.values[index1] = self.values[index2]
        self.values[index2] = temp
        return self.values
    end

    def bubble_up()
        index = self.values.size - 1

        while(index > 0)
            parent_index = ((index - 1)/2).floor()
            if(self.values[parent_index] < self.values[index])
                self.swap(index, parent_index)
                index = parent_index
            else
                break
            end
        end
        return 0
    end

    def insert(value)
        self.values.push(value)
        self.bubble_up()
        return self.values
    end

    def bubble_down()
        parent_index = 0
        length = self.values.size
        element = self.values[0]
        while(true)
            left_child_index = (2*parent_index) + 1
            right_child_index = (2*parent_index) + 2
            index_to_swap = nil
            if(left_child_index < length)
                left_child = self.values[left_child_index]
                if(left_child > element)
                    index_to_swap = left_child_index
                end
            end
            if(right_child_index < length)
                right_child = self.values[right_child_index]
                if(
                    (right_child > element && index_to_swap == nil) ||
                    (right_child > left_child && index_to_swap != nil)
                  )
                  index_to_swap = right_child_index
                end
            end

            if(index_to_swap == nil)
                break
            end

            self.swap(parent_index, index_to_swap)

            parent_index = index_to_swap
        end
    end

    def remove_max()
        self.swap(0, self.values.size - 1)

        popped_value = self.values.pop()
        
        if(self.values.length > 1)
            self.bubble_down()
        end
        return popped_value
    end

end

heap1 = Max_Binary_Heap.new()
heap1.values = [103,100,99,12,68]


heap1.remove_max()
puts heap1.values
heap1.remove_max()
puts heap1.values
heap1.remove_max()
puts heap1.values


class Node
    attr_accessor :value, :priority

    def initialize(value, priority)
      @value = value
      @priority = priority
    end
end



class Priority_Queue
    
    attr_accessor :values

    def initialize()
      @values = [];
    end

    def swap(index1, index2)
        temp = self.values[index1]
        self.values[index1] = self.values[index2]
        self.values[index2] = temp
        return self.values
    end

    def bubble_up()
        index = self.values.size - 1

        while(index > 0)
            parent_index = ((index - 1)/2).floor()
            if(self.values[parent_index].priority > self.values[index].priority)
                self.swap(index, parent_index)
                index = parent_index
            else
                break
            end
        end
        return 0
    end

    def enqueue(value)
        self.values.push(value)
        self.bubble_up()
        return self.values
    end

    def bubble_down()
        parent_index = 0
        length = self.values.size
        element_priority = self.values[0].priority
        while(true)
            left_child_index = (2*parent_index) + 1
            right_child_index = (2*parent_index) + 2
            index_to_swap = nil
            if(left_child_index < length)
                left_child_priority = self.values[left_child_index].priority
                if(left_child_priority < element_priority)
                    index_to_swap = left_child_index
                end
            end
            if(right_child_index < length)
                right_child_priority = self.values[right_child_index].left_child_priority
                if(
                    (right_child_priority < element_priority && index_to_swap == nil) ||
                    (right_child_priority < left_child_priority && index_to_swap != nil)
                  )
                  index_to_swap = right_child_index
                end
            end

            if(index_to_swap == nil)
                break
            end

            self.swap(parent_index, index_to_swap)

            parent_index = index_to_swap
        end
    end

    def dequeue()
        self.swap(0, self.values.size - 1)

        popped_value = self.values.pop()
        
        if(self.values.length > 1)
            self.bubble_down()
        end
        return popped_value
    end

end