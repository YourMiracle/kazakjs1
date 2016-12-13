function calc(first , second , char) {
    switch (char){
        case '+':
            return first + second;
            break;
        case '-':
            return first - second;
            break;
        case '*':
            return first * second;
            break;
        case '/':
            return first / second;
            break;
        default :
            return 0;
    }
}

console.log(calc(1 , 2 , ''));