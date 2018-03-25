// Ф У Н К Ц И И. у функций есть параметры и аргументы

var a  = 100, b = 50, c = 20;
function sum(x,y) { //х и у это параметры функции.  sum это ключевое слово, оно может быть любым
  console.log(x+y);
}
sum(a,b);
sum(a,c);
sum(30,80);
//рукописная функция суммирования



var a  = 100, b = 50, c = 20;
function sum(x,y) {
  return arguments [2]; // RETURN выводит, возвращает значение справа от него вызывающему коду. преимущество над консолью - универсальность
}
console.log (sum (100, 200, 500));
console.log (sum (sum (a,b), c));




var name = prompt('name?');
function greet(personName){
  console.log ('hello ' + personName)
}
greet(name);


function addArray (outer, inner) {
  var arr = [];
  for (var i=0; i < outer; i++) {
    arr [i]= [];
    for (var j=0; j < inner; j++) {
      arr [i][j]= Math.floor(Math.random()*11+10);
      }
  }
 return arr;
}
console.log (addArray(5,3)); //создание рандомного массива 5х3 с помощью функции



function square(a){
  var message = 'площадь квадрата = ';
  var _a = a*a; //переменная с _ означает что переменная существует внутри функции, она локальна и не меняет значение параметра
  return message + _a + '; сторона = '+a;
}
console.log (square(5)); //рукописная функция вовзедения в квадрат


function devine (x=1,y=1) {
  return (x/y)
}
console.log (devine ());



var student = {
  name: 'john',
  age: 20,
  sayInfo: function() {return this.name},  // THIS переменная, которая хранит ссылку на ближайший объект
  changeAge: function (a) {this.age = a}
}
console.log (student.sayInfo());
student.changeAge (10);
console.log (student.age);



function add (a,b) {
  return a+b;             
}
function result (foo) {
  return foo;
}
function subtract (a,b) {
  return a-b;
}
console.log (result (add(5,10)));
console.log (result (subtract(5,10))); //есть функции высшего порядка и кол-бэк функции !!


// ФУНКЦИИ С  С А М О В Ы З О В О М

(function () {
  console.log ('h e l l o');
}) (); //такая функция отрабатывается один раз и не хранит никаких данных



var sum = (function foo (a,b) {
  return a+b;
 }) (5,20);
console.log (sum);



function saySomething () {
  console.log ('w h a t');
  console.log ('return');
  console.log ('l o l _ b y e');
}
saySomething ();


function income (obj) {
  var sum = 0;
  for (var dep in obj) {
    sum+=obj[dep]["body"]*obj[dep]["percent"]/100;
  }
  return sum;
}
var account = {
  deposit1: {body: 1000, percent: 15},
  deposit2: {body: 5000, percent: 12},
  deposit3: {body: 2000, percent: 10} // для объектов лучший цикл - FOR IN
}
console.log (income(account));
console.log (account["deposit2"]["body"]);


// LET ПЕРЕМЕННАЯ еs6 меняет область видимости

let a = 10;
 a = 20;
console.log (a);

if(true){
  let number = 100; //с помощью лэт мы ограничиваем область видимости. так переменная будет работать только внутри своего слоя кода, и не будет видна снаружи
}
console.log (number);