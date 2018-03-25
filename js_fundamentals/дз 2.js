/*Домашнее задание
Модуль 2. Основы JS

1.Написать код, который будет выводить максимум из ДВУХ чисел
Подсказка в виде кода для минимума из двух чисел:
var number1 = 5, number2 = 3;
var minNumber;
if(number1 < number2){
minNumber = number1;
}else{
minNumber = number2;
}
alert(minNumber);

2.Написать код, который будет выводить максимум из ТРЁХ чисел

3.Написать код, который переведёт градусы по Цельсию в градусы по Фаренгейту. Подсказка:
var degreesCelsius = 100;
var degreesFahrenheit;
degreesFahrenheit = ваш код;
alert(degreesFahrenheit);
результат вывести округлённым в меньшую сторону

4.Написать код, который будет принимать от пользователя три числа и выводить среднее по значению число. Например, если ввели 2,5,7 - среднее 5, если 3,50,12 - среднее из них 12. Задача, так сказать, со звёздочкой. Вспомните, что мы учили операторы сравнения и логические И, ИЛИ. Подсказка:
var num1 = Number(prompt());
var num2 = Number(prompt());
var num3 = Number(prompt());
//ваш код
alert(среднее число);
можно использовать дополнительную переменную, можно обойтись и без неё, на ваше усмотрение.*/


//Задание№1
var number1 = prompt("First number?");
var number2 = prompt("Second number?");
var maxNumber;
if(number1 > number2){
maxNumber = number1;(number3 > number1&&number3>number2)
}else{
maxNumber = number2;
}
alert(maxNumber);*/
//Задание№2
/*var number1 = prompt("First number?");
var number2 = prompt("Second number?");
var number3 = prompt("Third number?");
var maxNumber;
if(number1 > number2&&number1>number3){
maxNumber = number1;
}else if(number2 > number1&&number2>number3)
{
maxNumber = number2;
}
else
maxNumber = number3;
alert(maxNumber);



//Задание№3
var degreesCelsius = prompt("Celsius?");
var degreesFahrenheit;
degreesFahrenheit = Math.floor(degreesCelsius*1.8)+32;
alert(degreesFahrenheit);

//Задание№4
var num1 = prompt("First number?");
var num2 = prompt("Second number?");
var num3 = prompt("Third number?");
var middle;
if((num1>=num2&&num1<=num3)||(num1>=num3&&num1<=num2))
{
middle=num1;
}
if((num2>=num1&&num2<=num3)||(num2>=num3&&num2<=num1))
{
middle=num2;
}
if((num3>=num2&&num3<=num1)||(num3>=num1&&num3<=num2)){
middle=num3;}
alert(middle);  
