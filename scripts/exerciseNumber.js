function onlyNumber() {
    var number = [];
    var other = [];
        for (var i in arguments){
            if (typeof arguments[i] == 'number'){
                number.push(arguments[i]);
            }
            else {
                other.push(arguments[i]);
            }
        }
    return number;
    

}

var massive = onlyNumber(1, 'wtf', 3, true, 6);
console.log(massive);
