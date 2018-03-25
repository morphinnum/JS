<!-- 1 задача
<button>
  Button
</button>
-->

<!-- 2 задача
<input/>
-->

<!-- 3 задача
<input/>
-->


<button>
  Button
</button>



//1 задача если нажимать на кнопку слишком много раз, 
//то мы создадим массив слишком большого размера 
//Задача - отловить нашу исключительную ситуацию, 
//правильно обернув нужные моменты в try/catch finally
var btn = document.getElementsByTagName("button")[0];
var number = 10;
var exp = 2;
btn.addEventListener("click", function(){
    	if (number === 100000000){
  	try{
    	throw "max length";
    } catch (e){
    	console.log(e);
    } finally {
    	console.log(number);
    }
  } else {
  number = Math.pow(number, exp);
    var arr = new Array(number);
    console.log(number);
  }
})

//2 задача
//сделать так, чтобы через 5 секунд после срабатывания 
//события "change" через alert() выводился текст, 
//который мы ввели в input. Подсказка - используйте setTimeout().
var input = document.getElementsByTagName("input")[0];
input.addEventListener("change", function(){
	setTimeout(function(){
  	alert(input.value);
  },5000);
})

//3 задача
//сделать проверку: если пользователь ввёл 10 или больше 10-ти символов, 
//то СРАЗУ выводить сообщение, что он молодец и обрывать выполнение setTimeout(). 
//Если он ввёл меньше 10-ти символов, то через 5 секунд ему выведет информацию, 
//что слишком мало букв.
var inp = document.getElementsByTagName("input")[0];
inp.addEventListener("change", function(){
	if (inp.value.length >= 10) {
	  	setTimeout(function(){ 
	    	alert("nice job!");
	      clearTimeout(timer);
	  }, 0);}
	else {
	  	timer = setTimeout(function(){
	    	console.log("not enough");
	    }, 5000) }  
});



//4 задача
//При нажатии на кнопку в консоли выводится информация о том, 
//сколько прошло секунд с момента нажатия.
//Сделать так, чтобы на 10-й раз setInterval() завершил свою работу.
//Напомню, для остановки есть clearInterval(), нужно применить его правильно
var btn = document.getElementsByTagName("button")[0];
var counter = 0;
btn.addEventListener("click", function(){
	var int = setInterval(function(){
  	counter++;
		console.log("Прошло " + counter + " секунд");
    if (counter > 9) {
    	clearInterval(int);
      alert("final")
    }
  }, 1000);  
});


