require 'pry'

def swap(arr, index1, index2)
    temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
end

def bubble_sort(arr)
    end_index = arr.length - 1

    until (end_index > 0) do
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
    puts arr
    return arr
end
arr1 = [8,4,6,2,7]
puts bubble_sort(arr1)
