/*Модуль 5 Домашнее задание

1. Создать функцию double(), которая будет принимать в качестве аргумента число и удваивать его. Удвоенное число либо пусть функция возвращает через return, либо сразу выводит через console.log. Например
double(5) выдаст 10.

2. Создать функцию bye(), которая через prompt() будет спрашивать имя пользователя и прощаться с ним, выводя на экран "До свидания, <здесь будет имя>"

3. Создать функцию exponent() таким образом, чтобы можно было вызвать её до создания (вспомните что такое Function Expression и Function Declaration и выберете способ). Эта функция должна возводить в степень число. Она принимает на вход два параметра: число и степень.
Поскольку возведение в степень - это умножение самого себя заданное число раз, то можно организовать всё умножением через цикл (while или for).
Подсказка: например, если бы я создавал функцию возведения в куб и она только это и умела, то я мог бы написать
var cube = function(number){
var result = 1;
for(var i = 0; i < 3; i++){
result = result * number;
}
return result;
}
alert(cube(4));
но нам нужно сделать универсальный вариант, а не куб.

но можете решить и без цикла, я вас не ограничиваю. Использовать Math.pow() нельзя

4. Создайте свой пример с самовызывающейся функцией

5. Доработать наш пример из лекции с функцией calc(). На уроке у нас были две callback-функции subtract() и add(). Написать ещё и функции для умножения, деления, деления по модулю, возведения первого числа в степень второго.

Дополнительное задание

6. Создать функцию, которая проверять введено ли простое число или нет

*/

//Задание 1
function double(a) {
  return a * 2;
}
console.log(double(5));


//Задание 2
function bye(){
  let userName = prompt("Ваше имя");
  console.log('До свидания, ' +userName);
}
bye();


//Задание 3
function exponent(a,b){	
	var result = 1;
  for(var i = 0; i < b; i++){
     result =  a * result;
  }
  console.log(result);
}
exponent(2,4);

//Задание 4
(function(){
	alert('я самовызвалась')
})();

//Задание 5
var firstNum = +prompt('Введите первое число');
var secondNum = +prompt('Введите второе число');

add();
subtract();
division();
modul();
multiply();
exponent();

  function add(a,b){
    var a = firstNum;
    var b = secondNum;
     result = a + b;
     console.log('результатом сложения этих чисел будет ' +result);
  };
  
  function subtract(a,b){
    var a = firstNum;
    var b = secondNum;
     result = a - b;
     console.log('результатом вычетания этих чисел будет ' +result);
  };
  
  function division(a,b){
  	var a = firstNum;
    var b = secondNum;
    	result = a / b;
      console.log('результатом деления этих чисел будет ' +result);
  };
  
  function modul(a,b){
  	var a = firstNum;
    var b = secondNum;
    	result = a / b;
      console.log('Остатком при делении этих чисел будет ' +result);
  };
  
 	function multiply(a,b){
  	var a = firstNum;
    var b = secondNum;
    	result = a * b;
      console.log('Результатом умножения этих чисел будет ' +result);
  };
  
  function exponent(a,b){	
    var a = firstNum;
    var b = secondNum;
    var result = 1;
      for(var i = 0; i < b; i++){
         result =  a * result;
      }
  		console.log('Результатом возведения первого числа в степень второго будет ' +result);
	};