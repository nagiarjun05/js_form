function convertTemp(temp,unit){
    if (unit==='K'){
        return temp+273
    }
    else if (unit==='C'){
        return temp-273
    }
    else {
        console.log('Invalid Unit Type')
        return -1
    }
}

console.log(convertTemp(50,'K'))
console.log(convertTemp(350,'C'))

