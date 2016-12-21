function quest() {
    var temp = [
        [],
        []
    ];
    for (var index in arguments ){
        if (typeof arguments[index] == 'number'){
            temp[0].push(arguments[index]);
        }
        if (typeof arguments[index] == 'string'){
            temp[1].push(arguments[index]);
        }
    }
    return temp;
  
}

var res = quest(1,2,'aasd',4, 'sdf', 324);
console.log(res);