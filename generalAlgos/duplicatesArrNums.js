const duplicates = ( intArr ) => {
    let duplicateArr = [];
    let checkedObj = {};
    for (let i = 0; i < intArr.length; i++) {
        let checked = checkedObj[`${intArr[i]}`];
        if (!checked) {
            checkedObj[`${intArr[i]}`] = 1;
        } else {
            checkedObj[`${intArr[i]}`] += 1;
            if (checkedObj[`${intArr[i]}`] === 2 ) {
                duplicateArr.push(intArr[i]);
            } 
        }   
    }

    console.log(duplicateArr);
}

const duplicates2 = (intArr) => {
    const checkedObj = {};
    const results = [];
    const sortArr = intArr.sort((a,b) => a - b); 
    for(let i = 0; i < sortArr.length; i++) {
        if((i + 1 !== sortArr.length) && (sortArr[i + 1] === sortArr[i])) {
            if (checkedObj[`${sortArr[i]}`]) {
                continue;
            } else {
                checkedObj[`${sortArr[i]}`] = 1;
                results.push(sortArr[i]);
            }
        }
    }

    console.log(results);
    
}


// duplicates([2,3,4,5,3,7,9,2,3,4,4]);
duplicates2([2,3,4,5,7,9,2,3,4,4]);

