/*1) Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].*/
function addStrToArray(num, str){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(str);
    }
    return arr;
}
console.log(addStrToArray(3,'dog'));

/*2)Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в объект. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем {"dog0" : "dog0", "dog1": "dog1", "dog2": "dog2"}.*/
function addStrToObj(num, str){
    let obj = {};
    for(let i = 0; i<num; i++){
        obj[str+i] = str+i;
    }
    return obj;
}

console.log(addStrToObj(3, 'dog'));

/*3)Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.*/
function sumEven(arr){
    let resEven = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2 == 0) {
            resEven += arr[i];
        }
    }
    return resEven;
};
function sumOdd(arr){
    let resOdd = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2 != 0) {
            resOdd += arr[i];
        }
    }
    return resOdd;
};
function getBigger(arr){
    let num1 = sumEven(arr);
    let num2 = sumOdd(arr);
    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
};

let arr = [0, 1, 2, 4, 7, 9, 22, 35];
console.log(getBigger(arr));

/*4)Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32);*/
function convertCelToFar(grad){
    return (grad * 9/5) + 32;
}
console.log(convertCelToFar(0));
console.log(convertCelToFar(15));