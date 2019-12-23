def isPalindrome(str)
    if str[0] == str[str.length - 1]
        if str.length == 1
            return true
        else
            return isPalindrome(str[1..str.length - 2])
        end
    else
        return false
    end
end

# puts isPalindrome('awesome')
# puts isPalindrome('foobar')
# puts isPalindrome('tacocat')


def productOfArray(arr)
    if arr.length == 0 
        return 1;
    end
    return arr[0] * productOfArray(arr[1..(arr.size)]);
end

# puts productOfArray([1,2,3])

# function reverse(str){
#     if (str.length === 1) return str[0];
#     return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
# }
def reverse(str)
    if str.length == 1 
        return str[0]
    end
    return str[str.length - 1] + reverse(str[0..str.length - 2])
end

# puts reverse("helloworld")