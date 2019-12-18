# function isPalindrome(str) {
#     // add whatever parameters you deem necessary - good luck!
#     if(str[0] === str[str.length - 1]){
#         if(str.length === 1){
#             return true
#         } else{
#             return isPalindrome(str.slice(1, str.length - 1))
#         }
#     } else{
#         return false
#     }
# }
# console.log(isPalindrome('awesome')) // false
# console.log(isPalindrome('foobar')) // false
# console.log(isPalindrome('tacocat'))// true)

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

puts isPalindrome('awesome')
puts isPalindrome('foobar')
puts isPalindrome('tacocat')
