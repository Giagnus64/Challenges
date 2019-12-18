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

puts linear_search([1,2,3], 3)
puts linear_search([1,2,3], 4)


# #binary search
# def binary_search

# end