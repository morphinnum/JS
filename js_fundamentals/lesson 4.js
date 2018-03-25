var arr = []
for (var i = 0; i < 5; i++) { //возведение в квадрат math.pow (i,2), i**2 (6ES)
	arr [i] = i*i
}
console.log (arr);

//функции push () и pop(), первая добавляет элемент в конец массива, вторая удаляет элемент с конца
//стеки - вид хранения информации, фифо, лифо - детальнее см

var arr = []
for (var i = 0; i < 5; i++) { //возведение в квадрат math.pow (i,2), i**2 (6ES)
	arr.push (Math.pow (i,2));
}
console.log (arr);
arr.pop ();
console.log (arr);

var arr = []
for (var i = 0; i < 5; i++) { 
	arr.push (i, i+1, i+2);
}
console.log (arr);
arr.pop ();
arr.pop ();
console.log (arr);

var arr = [-5, 10, 20];
//функции для массива shift() - удаляет первый элемент из массива и unshift() добавляет элемент в массив - эти функции более медленные, чем работа с концом массива, потому что они требуют смещение индекса элементов массива
arr.shift();
console.log (arr);
arr.unshift(100);
console.log (arr);

//функция reverse()
var arr = [-5, 10, 20];
arr.shift();
console.log (arr);
arr.unshift(100);
console.log (arr);
console.log (arr.reverse()); //функция медленная, но для удаления чего-то вначале помогает развернуть массив и работать с его концом
console.log (arr);

//функции slice() и splice()
//	slice
var arr = [-5, 10, 20,30,0];
//console.log (arr.slice(1,3)); у функции есть начальный индекс и конечный - 1 это начальный, 3 конечный, но изымаются элементы 1 и 2 (конечный индекс читается как n-1) 
console.log (arr.slice(1,-1)); //индекс с минусом позволяет удалять элемент с конца массива
console.log (arr);

//	splice
var arr = [-5, 10, 20,30,0];
console.log (arr.splice(3,1,500,200,40));//первый аргумент это индекс, с которого начинаем действовать, второй - количество элементов на удаление, и третий и последующие - элементы на добавление; функция медленная, 
console.log (arr);*/

var arr = [-5, 10, 20,30,0,20,10];
console.log (arr.indexOf(20,4)); //выводит индекс указанного элемента, второй аргумент говорит, начиная с какой позиции начинать искать элемент


var arr = [-5, 10, 20,30,0,20,10];
var pos = 0;
for (var i=0; i<arr.length; i++){
	if (indexOf(20,pos)) {
  
  }
}

//	ФУНКЦИЯ JOIN
var arr = [-5, 10, 20,30,0,20,10];
console.log (arr.join('_')); //join соединяет каждый элемент массива и выводит его на экран строкой, внутрь скобок можно поместить разделитель, который будет находиться между элементами в отображаемой строке
console.log (arr);


// СЛОЖЕНИЕ МАССИВОВ

var arr1 = ['abc', 'ABC'], arr2 = [-10,20,50];
var myArr = arr1/arr2; //сложение двух массивов вернет строку, а не массив, а деление-сложение-вычитание вернет число
//console.log (typeof myArr);
console.log (arr1.concat (arr2));
console.log (arr1);


var arr1 = ['abc', 'ABC'], arr2 = [-10,20,50];
for (var i =0; i<arr2.length; i++) {
	arr1.push (arr2[i]);
}
console.log (arr1); //рукописный метод concat



// SORT
var arr = [-100, 0, -20, 10, 5];
arr.sort (); //сортировка идет посимвольно (по спервому символу). 5 больше 1, поэтому отобразится сперва 10, и дальше 5, а не наоборот (хотя 10 больше 5)
console.log (arr);

var arr = [-100, 0, -20, 10, 5];
arr.sort (function (x,y) {
	return x-y; //функция берет по паре чисел, например -100 это х, 0 это у. каждая пара при вычитании х-у должна давать число меньше нуля, если больше - числа пары меняются местами. так происходит сортировка чисел от меньшего к большему
});
console.log (arr);

var arr = [-100, 0, -20, 10, 5];
arr.sort (function (x,y) {
	return true; //true false это функции-предикаты, дают прямую сортировку или обратную 
});
console.log (arr);

var arr = [-100, 0, -20, 10, 5];
arr.sort (function (x,y,z) {
	return y>x; 
});
console.log (arr);



/*var account = [10,8,7];
account.forEach (function (value,index,arr){ //чтобы провести операцию с каждым элементом мы используем forEach
	//arr[index]=value+'%'; //value*value
  //or
  account [index] = value*value; //пропись чере аккаунт и арр работают одинаково
});
console.log (account);
*/

// 	FUNCTION FILTER
/*var account = [10,8,7];
var arr= account.filter (function(value) {
	return value >= 8;
});
console.log (arr);
*/


/*var account = [10,8,7];
var arr = [];
for (var i=0; i<account.length; i++){
	if (account[i] >= 8) { 
  arr.push (account [i]);
  }
};
console.log (arr); //то же самое что фильтр, но рукописно
*/

/*var account = [10,8,7];
var arr = [];
for (var i=0; i<account.length; i++){
	account[i] >= 8 && arr.push (account [i]);
}
console.log (arr); //укороченая запись того что выше, без if, но данный код менее читабелен и меньше используется
*/

// МНОГОМЕРНЫЕ МАССИВЫ
/*
var coordinates = [0,1,-2,3];
coordinates.forEach (function (value,index) {
	if (index%2 == 1) {
  console.log (coordinates[index]+ '-y');
  }
});
*/

var arr = [[5,10],[-1,2]];
for (var i=0; i<arr.length;i++){
	console.log (arr [i][1]); //первый аргумент обращается к массиву внутри массива, а второй к индексу элемента внутри него
}





var obj = {
	name: 'john',
  age: 20,
  mark: 5,
  books: [
  	{title: 'js', year: 2001},
    {title: 'html', year: 2010}
  ]
}
 for (var i=0; i<obj['books'].length; i++){
 console.log (obj['books'].length);
}

