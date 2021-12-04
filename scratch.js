function random255() {
    num = Math.floor(Math.random() * 255)
    return num
}

function random1() {
    num = Math.floor(Math.random() * 10) / 10
    return num
}

rgba = (`rgba(${random255()}, ${random255()}, ${random255()}, ${random1()})`)

function solver(num) {
    i = 0
    while (i < num) {
        if (i % 5 == 0 || i % 6 == 0) {
            console.log(i)
        }
        i++
    }
}
// solver(0) //5, 6整除

function sevenGame() {
    let i = 0
    while (i < 60) {
        if (i % 7 != 0 && i % 10 != 7) {
            console.log(i)
        }
        i++
    }
}
// sevenGame() //7 Game

function daffodil(hyaku, senn) {
    i = 100
    while (i >= hyaku && i < senn) {
        if (Math.pow(i % 10, 3) + Math.pow((i % 100 - i % 10) / 10, 3) + Math.pow(Math.floor(i / 100), 3) == i) {
            console.log(i)
        }
        i++
    }
}
// daffodil(100, 1000) 水仙花

function factor(userInput) {
    i = 0
    while (i < 1000) {
        if (userInput % i == 0) {
            console.log(i)
        }
        i++
    }
}
// factor(1000) //find the factor

function isPrimeNum(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'IsNotPrimeNumber';
        }
    };
    return 'IsPrimeNumber';
}
// console.log(isPrimeNum(11))

function factorial(number) {
    i = 1;
    sum = 1;
    while (i <= number) {
        sum = sum * i
        i++
    }
    return sum
}
// console.log(factorial(6))

function bounce(h, target) {
    counter = 0;
    while (h >= target) {
        h = h * 0.3
        counter += 1
    }
    return counter
}
// console.log(bounce(5, 0.1))

function adder(initial_num, num_times) {
    sum = 0;
    counter = 1;

    while (counter <= num_times) {
        sum = sum + initial_num;
        initial_num = initial_num * 2;
        counter++
    }
    return sum
}
// console.log(adder(1, 4))

function strAdder(n) {
    let counter = 0;
    let result = "";
    let arr = ["+", "-", "*", "/"]
    let arrCounter = 0;

    while (counter < n) {
        counter++;
        result += counter;
        if (counter != n) {
            result += arr[arrCounter]
        }
        arrCounter++;

        if (arrCounter == 4) { //reset arrCounter to zero
            arrCounter = 0;
        }
    }
    return result;
}
// console.log(strAdder(14))

var str = '';
for (var i = 1; i <= 5; i++) { // 外层循环负责打印五行
    for (var j = 1; j <= i; j++) { // 里层循环负责一行打印几个星星
        str = str + '★';
    }
    // 如果一行打印完毕, 就要另起一行 加 \n
    str = str + '\n';
}
// console.log(str);

// mid = ''
// result = '';
// for (var i = 1; i <= 9; i++) {
//     mid = mid + i
//     for (var j = 1; j <= i; j++) {
//         result = mid + ' * ' + j;
//         console.log(result);
//     }
//     mid = ''
//     result = '';
// } 99
//第一步，输入身高和体重
myList = [2, 3213, 21, 3234, 4, 21, 421321, 5236, 32, 43261, 513312, 212, 42, 1]
function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
// console.log(bubbleSort(myList))
// bubbleSort