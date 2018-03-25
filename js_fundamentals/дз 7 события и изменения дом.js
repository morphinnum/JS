//HTML разметка
/*<div>
  <div class="colorText">
    <button>Button</button>
    <p id="paragraph1">I am just paragraph</p>
  </div>
  <div>
    <input/>
  </div>
</div>

<button>BUTTON</button>*/

-------------

//1. При клике на кнопку изменить размер шрифта абзаца до 40px.

/*var btn=document.getElementsByTagName('button')[0];
var p=document.getElementsByTagName('p')[0];
btn.addEventListener('click', function(event){
	p.style.fontSize='40px';
  });*/
  
//2. При наведении указателя мыши на кнопку менять текст кнопки на "Наведён курсор".
/*var btn=document.getElementsByTagName('button')[0];
btn.addEventListener('mouseover',function(event){
	btn.textContent='Наведен курсор';
});
btn.addEventListener('mouseout',function(event){
	btn.textContent='Button';
});*/

//3.Для поля "input" навесить слушатель на событие change и проверять, если среди введённых символов нет символа "@", то через alert() вывести предупреждение
/*var input=document.getElementsByTagName('input')[0];
input.addEventListener('change', function(){
	if(input.value.indexOf('@') == -1){
    alert('введите e-mail');
  };
	});
});*/

//4. Через слушатели "focus" и "blur" менять фон input. Например сделать #69F0AE при фокусе и #FF8A80 при потере фокуса.
/*input=document.getElementsByTagName('input')[0];
 input.addEventListener('focus', function(event){
    input.style.backgroundColor = '#69F0AE';
  });
  input.addEventListener('blur', function(){
    input.style.backgroundColor = '#FF8A80';
  }); */
  
//5.
/* var body=document.getElementsByTagName ("body")[0];
var btn=document.getElementsByTagName ("button")[0];
btn.addEventListener ("click", function (event) {
  var user= prompt("Введите имя: "); 
   if(user.search(/STOP/i)!==-1 || user.search(/ESCAPE/i)!==-1){
   btn.removeEventListener("click", function (event){});
   } else {
    var p=document.createElement ("p");
    p.textContent=user;
    body.insertBefore (p, btn);
    }
}); */