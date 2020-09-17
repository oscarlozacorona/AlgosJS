function anwser(lambs) {
    let generous = Math.floor(Math.log2(lambs + 1));



    let stingy = 0;
    let stingyArr = []
    total = 0;
    while (lambs > total ) {
        if(stingy < 2) {
            stingyArr[stingy] = 1;
        } else {
            stingyArr[stingy] = stingyArr[stingy - 1] + stingyArr[stingy - 2];
        }
        total += stingyArr[stingy];
        stingy++; 
    }

    return stingy - generous;
}

console.log(anwser(143));