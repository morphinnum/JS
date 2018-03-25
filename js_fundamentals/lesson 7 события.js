//HTML разметка
/*<div>
	<button>BUTTON</button>
</div>

<button onclick='saySomething()'>BUTTON</button>
	<script>
		function saySomething(){console.log('bye');}
	</script>

<input id='id1'>

<button>PLAY</button>
	*/

var div=document.getElementByTagName('div')[0];
var btn=div.children[0];
btn.addEventListener('click', function(event){console.log(hi);});

var input=document.getElementById('id1');
input.addEventListener('focus/blur',function(event){
	console.log(event);
	console.log(input.value.length);
	if (input.value.lenth<2){  //если длина написаного меньше двух символов
		input.setAttribute('class','wrong'); //подсвечиваем поле красным (стиль в цсс)
	}else{input.setAttribute('class','ok');} //а если больше - зеленым
	console.log(change); //показывает изменения, действия на странице
	});


var paragpraph=document.getElementByTagName('p')[0];
paragpraph.addEventListener('mouseover',function(event){
	paragpraph.style.color='rgb(255,0,0)';
	console.log(mouseover)
})


var btn=document.getElementByTagName('button')[0];
btn.style.width='100px';
btn.style.height='20px';
var w=0, h=0;
btn.addEventListener('mouseover',function(){
	w=parseInt(btn.style.width);
	h=parseInt(btn.style.height);
	btn.style.width=w+5+'px';
	btn.style.height=h+5+'px';
});
btn.addEventListener('mouseout',function(){
	btn.style.width=w+'px';
	btn.style.height=h='px';
})





var input=document.getElementByTagName('input')[0];
var par=document.getElementByTagName('p')[0];
input.addEventListener('keypress',function(event){
	par.textContent=input.value;
	console.log(event)
})




function callback(event){
	console.log('hello');
	if (event.code==75){ //код клавиши k=75. можно написать (event.code=='k')
		input.removeEventListener('keypress',callback);
		console.log('bye');
	}
}