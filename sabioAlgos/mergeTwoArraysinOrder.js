// write a function that takes two parameters both arrays in order and returns one array in order 


const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let anwser = [];

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            anwser.push(arr1[i++]);
        } else {
            anwser.push(arr2[j++]);
        }
    }

    if (i === arr1.length) {
        for(j; j < arr2.length; j++) {
            anwser.push(arr2[j]);
        } 
    } else {
        for (i; i < arr1.length; i++) {
            anwser.push(arr1[i]);
        }
    }

    return anwser;
}

const main = () => {
    console.log(merge([1,3,5,7], [4,8,9]));
}

main();
