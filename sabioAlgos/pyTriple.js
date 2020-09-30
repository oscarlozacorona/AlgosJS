// from an array of number detect a pythagorean triple

const pyTriple = (arr) => {
    let sortedArr = arr.sort();
    
    for(let i=0; i < sortedArr.length - 2; i++) {
        let aSquared = sortedArr[i] * sortedArr[i];
        for(let j=0; j< sortedArr.length; j++) {
            let leftSide = Math.sqrt(aSquared + (sortedArr[j] * sortedArr[j]))
            if (Number.isInteger(leftSide)) {
                for (let k = j+1; k < sortedArr.length && leftSide <= sortedArr[k]; k++) {
                    if(leftSide === sortedArr[k]) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

console.log(pyTriple([3,4,5]));
console.log(pyTriple([3,2,4,6,5]));
