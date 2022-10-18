const wordArr = ['hi', 'mississippi', 'hello', 'holiday']

const longestWord = () => {
    let longest = ''
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > longest.length){
            longest = wordArr[i]
        }
    }
    console.log(longest.length)
}

longestWord()

//runtime estimate: Linear