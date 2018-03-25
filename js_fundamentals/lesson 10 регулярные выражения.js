/*function Book(){};
Book.prototype.pages=0;
Book.prototype.read=function(){Book.prototype.pages+=5;console.log(Book.prototype.pages);};
var mybook1=new Book;
var mybook2=new Book;
mybook1.read();
mybook2.read();
mybook1.read();*/ //то, что выносится в прототип - доступно всем

/*var string='This / is some text';
//var pattern=/t/g;
var pattern=new RegExp('/','ig'); //флаг i позволяет искать вне зависимости от регистра,флаг g - все совпадения, а не только одно
console.log(string.match(pattern));*/

// \t - поиск табуляции, \s - поиск пробелов

/*var str='some \u0020 text'; // здесь \u0020 - это обозначение пробела
var pattern=/\s/;
console.log(str.match(pattern));*/

/*var str='year 1995, year 1900';
var pattern=/99/g;
co-nsole.log(str.match(pattern));*/

var str='This is some Text';
var pattern=/^t/ig; //так можно проверить, начинается ли строка с этого элемента. если нет - выдаст null 
console.log(str.match(pattern));

