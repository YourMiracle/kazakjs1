function onlyNumber(number) {
        for (var i in number){
            if (typeof numbers[i] != 'number'){
                delete numbers[i];
            }
        }
    return number;
}

var massive = onlyNumber([1, 'wtf', 3, true, 6]);
console.log(massive);
