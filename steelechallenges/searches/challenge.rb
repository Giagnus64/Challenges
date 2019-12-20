#linear search
def linear_search(arr, ele)
    index = 0
    while index < arr.size 
        if(arr[index] == ele)
            return index
        end
        index += 1
    end
    return -1
end

# puts linear_search([1,2,3], 3)
# puts linear_search([1,2,3], 4)


# #binary search
def binary_search(arr, ele)
    min = 0;
    max = arr.size - 1;

    while min <= max  
        
        middle = ( (min + max) / 2).floor
        
        if ele == arr[middle]
            return middle
        elsif ele < arr[middle]
            max = middle - 1
        elsif ele > arr[middle]
            min = middle + 1
        end

    end

    return -1
end

puts binary_search([1,2,3,4,5,6,7,8,9], 3)
puts binary_search([1,2,3,4,5,6,7,8,9,10,11], 4)
puts binary_search([1,2,3,4,5,6,7,9,10,11], 8)

# function binarySearch(arr, ele){
#     let lesser = 0;
#     let greater = arr.length - 1;
    
#     while(lesser <= greater){
#         let middle = Math.floor((lesser + greater) / 2)
#         if (ele === arr[middle]){
#             return middle
#         } else if (ele < arr[middle]){
#             greater = middle - 1;
#         } else if(ele > arr[middle]){
#             lesser = middle + 1;
#         }
#     }
#     return -1;
#   }