function checkObj() {
    var first = {};
    if (typeof first == 'object'){
        console.log(typeof first)
    }
    else {
        console.log('Эта функция принимает только обьект, будте добрый исправить это')
    }
    return first;
}

var call = checkObj({1:23,a:74,cc:"cot"});