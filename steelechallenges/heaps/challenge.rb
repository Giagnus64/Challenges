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

end

heap1 = Max_Binary_Heap.new()
heap1.values = [100,99]

heap1.insert(110)
puts heap1.values
heap1.insert(12)
puts heap1.values
heap1.insert(68)
puts heap1.values
heap1.insert(103)
puts heap1.values
