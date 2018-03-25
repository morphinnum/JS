/*var a ={width:10};
var b=a;
b.width = 100;

console.log(a);
console.log(b);*/

/*var obj1={width:100, height:50, info:function(){ //с помощью метода инфо можно получать информацию без риска изменений данных
		console.log(this.width);
    console.log(this.height);}
};
//obj1.info(); 
var obj2=obj1;
obj1=null; //с помощью null можно очищать память переменной и ее удалять
obj2.info(); 
console.log(this);*/

//создание типа данных
//типы данных описываются функциями и называются с заглавной буквы
/*function Car(){this.wheels=4; //"чертеж" объекта, новый класс, тип данных. здесь функция=класс
							var color='red'; //объявление свойство таким образом делает его инкапсулированным и недоступным для изменения
              showColor=function(){return color}; //this.showColor - это метод, с помощью которого снаружи можно увидеть информацию (цвет) класса
              this.changeColor=function(userColor){color=userColor;}} //вызов такого метода позволяет менять с его помощью цвет класса
var car1=new Car(); // car1 car2 - экземпляр, созданный по чертежу, объект класса Сar(). здесь Car() это конструктор(функция)
//var car2=new Car();
//car1.wheels=6;
//car1.changeColor('black');
//console.log(car1.showColor());
function Car(price){var material='plastic'; if (price>10000){material='metal'}
			this.showMaterial=function(){return material};}
var myCar=new Car(50000);//конструктор позволяет что-то задать по умолчанию изначально
console.log(myCar.showMaterial());*/



/*var student={name:'john',age:20,info:function(){console.log(this.name);console.log(this.age)}}
var student1={name:'ejen',age:22};
//call-apply-bind - функции наследования
//student.info.call(student1);
//console.log(student1);
var student2={name:'adam',age:30};
var students=[student1,student2];
for (var i=0;i<students.length;i++){student.info.call(students[i]);}*/



/*var obj={display:function(name,surname){ //display это метод, который принимает значения
		console.log(name,surname);
   	console.log(this.age);}
}
var obj1={age:25};
var obj2={age:30};
obj.display.call(obj1,'john','ivanov'); //obj1 это то что принимает в this, все другое - аргументы 
obj.display.apply(obj2,['sarah','johnson']);//call aplly помогает передать параметры в метод. apply передает аргументы в массиве*/


/*function Animal(){var sleep=false;
			this.sleep=(function(){sleep:true;console.log('sleep')}) //this.sleep  это функция внутри функции-типа
			this.active=function(){sleep=false;console.log('active')};
      this.say=function(voice,times){for(var i=0;i<times;i++){console.log(voice);} }} 
function Cat(){Animal.call(this); //call - наследование
				var meowTimes=0; this.sayMeow=function(times){meowTimes=times; this.say('meow',meowTimes);}}
var myCat=new Cat();
//myCat.active();
//myCat.sayMeow(5);
console.log(myCat.sleep);*/



//"ненастоящее" наследование
/*function Parent(){this.p1=function(){console.log('p1');}
									this.p2=function(){console.log('p2');}
                  }
function Child(){var myParent=new Parent();
								this.c1=function(){myParent.p1();}
                this.c2=function(){myParent.p2();}
                }
var myChild=new Child();
myChild.c1();
myChild.c2();*/




//прототипный стиль
//прототип описывается при создании нового типа данных(класса). в прототип кладется то что будет общедоступно
/*function User(name,age){this.name=name;this.age=age;
												this.info=function(){console.log(this.name);console.log(this.age);}}
User.prototype.hello=function(){console.log('hello','my name is '+this.name);}
var myUser=new User('john',30);
myUser.info();
myUser.hello();*/



function Animal(name){this.name=name;this.speed=0;}//стандартное описание класса animal
Animal.prototype.run=function(speed){this.speed+=speed;console.log(this.name+' runs with speed '+this.speed+' km per hour');}//run - метод
Animal.prototype.stop=function(){this.speed=0;console.log(this.name+' have stoped');}
function Rabbit(name){this.name=name;this.speed=0}
//Rabbit.protorype=new Animal();
//Rabbit.prototype=Animal.prototype;
Rabbit.prototype=Object.create(Animal.prototype); //наиболее приемлемый метод записания прототипа. таким образом прототип не перепишется
Rabbit.prototype.jump=function(){console.log(this.name+' jumps');}
var myRabbit=new Rabbit('bunny');
//myRabbit.run(5);
var myRabbit2=new Rabbit('rbbt');
//myRabbit2.run(5);

var myAnimal=new Animal('cat');
//myAnimal.run(10);
var myRabbit=new Rabbit('rb');
myRabbit.run(10)

Rabbit.prototype.run=function(){console.log('sup');}
var myAnimal2=new Animal('a n i ma ls');
myAnimal2.run(12)