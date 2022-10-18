const arr = [1, 2, 3]

const sumToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 1; k < arr.length; k++) {
            if ((arr[i] + arr[k]) === 0) {
                return console.log('true')
            }
        }
    }
    console.log('false')
}

sumToZero (arr)

//runteime estimate: Quadratic