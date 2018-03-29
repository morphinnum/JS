/*1. На основе событий создать свой логер(logger). Который будет регистрировать пользователя со временем посещения и выводит эти данные в консоль. Также можно добавить информацию типа (такой то пользователь вошёл и вышел), набросать событий типа logIn, logout, someAction…. Код произвольный, главное использовать события класса EventEmitter.
2. Решить проблему закрытия терминала при запущенном сервере! (сторонний модуль).*/

var http = require('http');
var event = require('events').EventEmitter;

var logger = new event();
logger.on('login', function () {
    var date1 = new Date();	
    console.log('Logged in: '+ date1);
});

logger.on('someAction', function () {
	var date2 = new Date();		
	console.log('Did action: '+ date2);
});

logger.on('Logged out', function () {
	var date3 = new Date();	
	console.log('User out: '+ date3);  
});

http.createServer(function(req, res){

	if (req.url === '/'){
	   
	   logger.emit('login');
		
	}else if (req.url === '/action') {
		
           logger.emit('someAction');
	   	
	}else if(req.url === '/out') {
		
          logger.emit('logout');		
	}

}).listen(3000, function() {
	
	console.log('Go to localhost 3000!');
});