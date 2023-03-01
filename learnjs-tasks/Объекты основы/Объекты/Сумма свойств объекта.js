let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumOfPropertys(obj){
    summary = 0
    for(let key in obj){
        summary += obj[key];
    }
    return summary
}

console.log(sumOfPropertys(salaries));