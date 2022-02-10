// consonants (except y): move back 3 letters, a wraps back to z
// bcdfghjklmnpqrstvwxz

// vowels (except y): are an assigned number
// aeiou
// 01234

// y : ANY special character found on the keyboard numbers 1-8


// abcdefghijklmnopqrstuvwxyz
// 1yza2cde3ghijk4mnopq5stu*w

// I love cryptography!
// 2 i3s1 zo%mq3do0me^!

const alphabet =["X","Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C"]
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
const vowels = ['a', 'e' ,'i', 'o', 'u']
const nums = ['0', '1', '2', '3', '4']
const specialChars = ['!','@','#','$','%','^','&','*']




const removeSpecials = (str) => {
    const regex = new RegExp(/['!.?"$&;:]/, 'g')
    const strArry = str.toLowerCase().split('')
    
    for(let i = 0; i < strArry.length; i++){
        if (regex.test(strArry[i])){
            strArry.splice(i, 1)
            i -= 2
        }
    }
    return strArry
}


const cipher = (str) => {
    const strArry = removeSpecials(str)

    for (let i = 0; i < strArry.length; i++){
        if(consonants.includes(strArry[i])){
            strArry[i] = alphabet[alphabet.indexOf(strArry[i]) - 3]

        } else if (vowels.includes(strArry[i])) {
            strArry[i] = vowels.indexOf(strArry[i])
         
        } else if (strArry[i] === 'y'){
        strArry[i] = specialChars[Math.floor(Math.random()*specialChars.length)]
        } 
    }

    return strArry.join('').toLowerCase()

}

const decipher = (str) => {
    const strArry = str.split('')

    for (let i = 0; i < strArry.length; i++){
        if(alphabet.includes(strArry[i])){
            strArry[i] = alphabet[alphabet.indexOf(strArry[i]) + 3]

        } else if (nums.includes(strArry[i])) {
            strArry[i] = vowels[+nums[strArry[i]]]
            
         } else if (specialChars.includes(strArry[i])){
            strArry[i] = 'y'
        } 
    }

    return strArry.join('').toLowerCase()
}

console.log(cipher('I love cryptography!'));
console.log(decipher('2 i3s1 zo$mq3do0me*'));