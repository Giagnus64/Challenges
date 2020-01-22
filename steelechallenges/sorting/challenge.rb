arr1 = [2,4,6,8]
arr2 = [1,2,3,4]
arr3 = [3,6,7,45,34,24,57]

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

puts merge_sort(arr3)

#print merge(arr1, arr2)

# print insertion_sort(arr1)

# // merge sort
# // start with merging array function
# //ASSUMES THE ARRAYS ARE SORTED*****
# const merge = (arr1, arr2) => {
#     //establish a final sorted array to sort the elements, and a pointer for each array
#     let sortedArray = [];
#     let firstPointer = 0;
#     let secondPointer = 0;
#     //while the first pointer and the second pointer have not reached the end of their respective arrays
#     while (firstPointer <  arr1.length && secondPointer < arr2.length){
#         //add lesser number to array, and move pointer
#         if(arr2[secondPointer] >= arr1[firstPointer]){
#             sortedArray.push(arr1[firstPointer])
#             firstPointer++;
#         } else{
#             sortedArray.push(arr2[secondPointer])
#             secondPointer++;
#         } 
#     }
#     //after arrays have been exhausted, add the rest of the numbers from whatever array's pointer has not reached gone through the array
#     while(firstPointer < arr1.length) {
#         sortedArray.push(arr1[firstPointer]);
#         firstPointer++;
#     } 
#     while(secondPointer < arr2.length) {
#         sortedArray.push(arr2[secondPointer])
#         secondPointer++;
#     }
#     return sortedArray
# }


# const mergeSort = (arr) => {
#     //if array is SORTED(length is 0 or 1), return array
#     if (arr.length <= 1) return arr;
#     //find midpoint
#     let midpoint = Math.floor(arr.length/2);
#     //split array by midpoint and merge sort the split arrays
#     let arr1 = mergeSort(arr.slice(0, midpoint))
    
#     let arr2 = mergeSort(arr.slice(midpoint))
#     //return the merged arrays
#     return merge(arr1, arr2)
# }

# //console.log(mergeSort([4,1,5,2,7]))