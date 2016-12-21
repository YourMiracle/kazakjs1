function reverse(str) {
    var array = str.split('');
    var tmp = '';
    for (var index in array){
        tmp = array[array.length - 1 - index];
        array[array.length -1 - index] = array[index];
        array[index] = tmp;
        if (index == Math.ceil(array.length / 2) - 1){
            break;
        }
    }
    return array.join('');
}

var res = reverse('Denis');
console.log(res);