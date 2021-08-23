function add() {
    var cal = 0;
    for (const e of arguments) {
        cal += e;
    }
    console.log(cal);

}

add(10, 20, 2)


// var add = (num1, num2) => num1 + num2;
// v