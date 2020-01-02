arr1 = [8,4,6,2,7]
require 'pry'

def swap(arr, index1, index2)
    temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
end

def bubble_sort(arr)
    end_index = arr.size - 1
    until (end_index < 0) do
        swaps = 0
        current_index = 0
        while(current_index < end_index) do
            
            if (arr[current_index] > arr[current_index + 1])
                swap(arr, current_index, current_index + 1)
                swaps +=1
            end
            
            current_index +=1

        end

        break if swaps == 0
        end_index -= 1
    end
    return arr
end

# print bubble_sort(arr1)

def selection_sort(arr)
    smallest_index = 0
    current_index = 1
    beginning_index = 0

    until(beginning_index > arr.size) do
        
        while (current_index < arr.size) do

            if(arr[smallest_index] > arr[current_index])
                smallest_index = current_index
            end
            current_index +=1
        end

        swap(arr, smallest_index, beginning_index) if smallest_index != beginning_index

        beginning_index +=1
        current_index = beginning_index + 1
        smallest_index = beginning_index

    end
    return arr
end

print selection_sort(arr1)

