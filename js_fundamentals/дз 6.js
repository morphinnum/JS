//Задание 1 - найти и вывести через console.log() 2й абзац
/*var element = document.getElementsByTagName('p')[1];
console.log (element);*/

//Задание 2 - сделайте текст абзаца <p>abc</p> в верхнем регистре
/*var body=document.getElementsByTagName("body")[0];
var paragraph=document.createElement("p");
//2 варианта наполнения элемента:
//1) вариант 
//paragraph.textContent='abc';
//paragraph.style.textTransform='uppercase';
//2) вариант
paragraph.innerHTML='<p style="text-transform: uppercase;">abc</p>';
body.appendChild(paragraph);
console.log (body);*/

//Задание 3 - изменить абзац <p>DEF</p> на <p>Def</p>
/*var element=document.getElementsByTagName('p')[3]
var paragraph=element.lastChild.textContent;
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
var newContent=capitalize(paragraph);
element.innerHTML=newContent;
console.log (element.innerHTML);*/

//Задание 4 - через console.log() с помощью цикла вывести все абзацы
/*var element=document.getElementsByTagName('p');
for (i=0; i<element.length; i++) {
	console.log (element[i]);
}*/

//Задание 5 - Найти и вывести в консоль текст элемента с id="four"
/*var paragraph=document.getElementsByTagName('p');
console.log(paragraph [paragraph.length-2]);*/

//Задание 6 - Элементам с классом "two" поменять размер шрифта на "30px"
/*var element=document.ge                           tElementsByClassName ('two');
for(var i=0; i<element.length;i++){
  element[i].style.fontSize='30px';
}*/

//Задание 7 -  Элементу(ам) с name="five" изменить цвет текста на красный
//var element=document.getElementsByName('five')[0].style.color='red';

//Задание 8 - Создать абзац и вставьте после <p class="two">Two</p>.
/*var element=document.getElementsByTagName("div")[1];
var paragraph=document.createElement("p");
paragraph.textContent='Three';
element.appendChild(paragraph);*/

//Задание 9 - Поменять фон абзацев
