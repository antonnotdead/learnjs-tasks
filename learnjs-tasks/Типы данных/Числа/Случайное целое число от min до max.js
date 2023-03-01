function randomInteger(min, max){
    let returnalRandom = min - 0.5 + Math.random()*(max-min+1);
    return Math.round(returnalRandom);
}

console.log(randomInteger(1,3));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));