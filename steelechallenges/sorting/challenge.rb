arr1 = [2,4,6,8]
arr2 = [1,2,3,4]
arr3 = [32,6,7,45,34,24,57]

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

#print selection_sort(arr1)

def insertion_sort(arr)
    
    beginning_index = 0
    current_index = 1

    while(current_index < arr.length) do

        while(current_index > 0) do
            current_value = arr[current_index]
            
            print current_value, arr

            if(current_value <= arr[current_index - 1])
                swap(arr, current_index, current_index - 1)
                current_index -=1
            else 

                break

            end
            
            
        end

        beginning_index +=1
        current_index = beginning_index + 1
        
    end
    
    return arr
    
end

# ASSUMES ARRAYS ARE SORTED
def merge(arr1, arr2)
    sorted_array = []
    first_pointer = 0
    second_pointer = 0
    while(first_pointer < arr1.size && second_pointer < arr2.size)
        if(arr2[second_pointer] >= arr1[first_pointer])
            sorted_array.push(arr1[first_pointer])
            first_pointer += 1
        else 
            sorted_array.push(arr2[second_pointer])
            second_pointer += 1
        end
    end
    while(first_pointer < arr1.size)
        sorted_array.push(arr1[first_pointer])
        first_pointer += 1
    end
    while(second_pointer < arr2.size)
        sorted_array.push(arr2[second_pointer])
        second_pointer += 1
    end
   
    return sorted_array
end

def merge_sort(arr)
    if(arr.size <= 1)
        return arr
    end
    midpoint = (arr.size/2).floor
    left = merge_sort(arr.slice(0...midpoint))
    right = merge_sort(arr.slice(midpoint..arr.size))

    return merge(left, right)
end

#print merge_sort(arr3)

def pivot(arr, start_index = 0, end_index = arr.size - 1) 
    pivot_number = arr[start_index]
    pivot_index = start_index
    for i in (start_index + 1)..end_index do 
        if(pivot_number > arr[i])
            pivot_index += 1
            swap(arr, i, pivot_index)
        end
    end
    swap(arr, start_index, pivot_index)
    #print arr
    return pivot_index
end
#print pivot(arr3)

def quick_sort(arr, left = 0, right = arr.size - 1)
    if(left < right)
        pivot_index = pivot(arr, left, right)
        quick_sort(arr, left, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, right)
    end
    return arr
end
print quick_sort(arr3)
