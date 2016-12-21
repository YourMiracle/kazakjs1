function onlyNumber() {
    var first = [];
    var second = [];
    for (var index in arguments ){
        if (typeof arguments[index] == 'number'){
            first[0].push(arguments[index]);
        }
        if (typeof arguments[index] == 'string'){
           second[0].push(arguments[index]);
        }
        if (typeof arguments[index] == 'boolean'){
            second[0].push(arguments[index]);
        }
        delete second;

    }
    return first;
}

var massive = onlyNumber(1, 'wtf', 3, 'wwe', 6);
console.log(massive);
