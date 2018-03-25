//задание 1
//Создать класс Radio, у которого будет внутренняя переменная "frequency" с числом, которое означает частоту радиостанции и метод play(), доступный снаружи. Если мы создаём экземпляр класса и вызываем на нём play(), то нам выводится сообщение типа "играю на частоте " + frequency.
/*function Radio(frequency){
	this.frequency=frequency;
	this.play=function (){console.log('я играю на частоте  '+frequency);}
}
var radio= new Radio(50);
radio.play();*/

//задание 2
//Создать класс Bender у которого будет переменная "wasted", созданная через var. При создании экземпляра мы присваиваем ей значение true или false в виде var myBender = new Bender(true);
//то есть то, что мы помещаем в new Bender должно присвоиться в "wasted". У класса есть два метода: bend() или say(), написанные через this. Если wasted === true, то при вызове bend() будет сообщение в консоль "не могу работать", а для say() сообщение "Kiss my shiny metal ass".
//Если wasted === false, то bend() выдаст "сгибаю", а say() выдаст "Привет".
/*function Bender(wasted){
	var wasted=wasted;
  this.bend=function(){if(wasted){return console.log('не могу работать');}else{return console.log('сгибаю');}};
  this.say=function(){if(wasted){console.log('Kiss my shiny metal ass');}else{console.log('привет');}};
}
var bender=new Bender(false);
bender.say();*/


//задание 3
//Если прототип одного объекта просто присвоить другому объекту, то будет то, что в этом коде https://jsfiddle.net/gybpsezq/6/ . Если у дочернего объекта в прототипе будет такой же метод, как у родителя, то метод родителя перезатрётся, а это не есть хорошо. Исправьте код, чтобы он работал корректно.
/*function Animal(name) { this.name = name;}
Animal.prototype.walk = function() {
  alert(this.name + " может ходить");};
function Rabbit(name) {
  Animal.call(this, name);}
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.walk = function() {
  alert( this.name + " может прыгать, ходить и бегать");};

var a = new Animal("Кто-то");
var r = new Rabbit("Мой кролик");
a.walk();
r.walk();*/

//задание 4
//Создать класс Gadget у которого будут поля с информацией о производителе, диагонали и цвете и их мы можем задать через конструктор по типу function Gadget(manufacturer, diagonal, color). Функция sayInfo() задана через прототип и выводит всю эту информацию в консоль.
//Добавить два класса наследника: Smartphone и Tablet. У смартфона сделать дополнительное поле через прототип, которое хранит количество времени звонков "callDuration" (начальное значение = 0) и метод callMe(), который увеличивает время звонков на 5 минут при каждом его вызове и пишет "callDuration" в консоль.
//создать экземпляры Smartphone и Tablet, передать им информацию о производителе, диагонали и цвете, вывести методом sayInfo() и для смартфона совершить пару звонков. Создать ещё один экземпляр Smartphone и тоже совершить пару звонков.
function Gadget(manufacturer, diagonal, color){
	this.manufacturer=manufacturer;
	this.diagonal=diagonal;
  this.color=color;
  this.sayInfo=function(){console.log('производитель этого устройства - '+manufacturer+', диагональ этого устройства - '+diagonal+'",'+' цвет этого устройства - '+color);}}
var gadget=new Gadget('I', 5, 'black');
gadget.sayInfo();
function Tablet(manufacturer, diagonal, color){
	Gadget.call(this,manufacturer, diagonal, color)
}
function Smartphone(manufacturer, diagonal, color){
	Gadget.call(this,manufacturer, diagonal, color)
}
Smartphone.prototype=Object.create(Gadget.prototype);
Smartphone.prototype.callDuration=0;
Smartphone.prototype.callMe = function(){
  console.log(this.callDuration);
  return this.callDuration += 5;
};
Tablet.prototype=Object.create(Gadget.prototype);
var mobile=new Smartphone('wow',4,'red');
mobile.sayInfo();
mobile.callMe();
mobile.callMe();
mobile.callMe();
var tablet=new Tablet('cyber',7,'silver');
tablet.sayInfo();
var sellphone=new Smartphone('prime',4.2,'cyan');
sellphone.sayInfo();
sellphone.callMe();
sellphone.callMe();
sellphone.callMe();