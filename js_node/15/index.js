/*var http=require('http');
var fs=require('fs');
*/

/*http.createServer(function(req,res){
	if(res.url==='/'){
		res.write('hello woorld!');
		res.end();
	} else if(res.url==='/file'){
		fs.readFile('mp3.mp3', function (err, data) {
			res.write(data);
			res.end();
		});
	} else if (req.url === '/stop') {
		server.close();
	}
}).listen(3000,function(){
	console.log('go on localhost:3000!')
});*/

//for auto server restart nodemon was used
//and command nodemonnodemon index.js localhost 3000

// ----------------------------------------------------------

/*var parsedJSON = require('./file.json');
console.log(parsedJSON);*/

//------------------------------------------------------------
$.getJSON('file.json', function(data){
  console.log(data);

  $.each(data, function(key, val){
    var ccy = val.ccy;
    var base = val.base_ccy;
    var buy = val.buy;
    var sell = val.sell;

    $('.table-template').clone().appendTo('body');
    $('.table-template').find($('.ccy')).append('<span>' + name + '</span>');
    $('.table-template').find($('.base')).append('<span>' + age + '</span>');
    $('.table-template').find($('.buy')).append('<span>' + email + '</span>');
    $('.table-template').find($('.sell')).append('<span>' + phone + '</span>');
  });

});