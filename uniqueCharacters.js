const word = 'slither'

const hasUniqChar = (word) => {
    arr = word.split('')
    for (let i = 0; i < arr.length ; i++) {
        for (let k = i+1; k < arr.length; k++) {
            if (arr[i] === arr[k]){
                return console.log('false')
            }
        }
    }
    return console.log('true')
}

hasUniqChar(word)

//runtime estimate: Quadratic