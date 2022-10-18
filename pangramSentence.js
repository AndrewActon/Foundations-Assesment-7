const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const phrase = 'I like cats, but not mice' //false
// const phrase = 'The quick brown fox jumps over the lazy dog!' //true

const isPangram = () => {
    // const split = phrase.split('')
    const strArr = phrase.toLowerCase()
    for(let i = 0; i < alphabet.length; i++){
        if (strArr.indexOf(alphabet[i]) < 0){
            return console.log('false')
        }
    }
    return console.log('true')
}

isPangram()

//runtime estimate: Linear