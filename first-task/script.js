
 const sum = (...arguments) => {
    var total = 0;
    for (var i=0; i < arguments.length; i++) {
        typeof(arguments[i]) == 'number' ? total += arguments[i] : null;
    }
    return Math.round(total* 1000)/1000
    // output 15, 0 , 9 , 0.3
    //return total.toFixed(1) will output 15.0 , 0.0, 9.0 , 0.3
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(5, null, -5));
console.log(sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1))
console.log(sum(0.1, 0.2))


