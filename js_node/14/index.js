//const fs = require('fs');
//1 заносим текст в файл (существующий или создаем новый. если в файле был текст, он перезаписывается)
/*var text = 'Node.js is an open-source, cross-platform JavaScript run-time environment'+
			'for executing JavaScript code server-side. Historically,' + 
			'JavaScript was used primarily for client-side scripting, in which scripts' +
			'written in JavaScript are embedded in a webpages HTML, to be run client-side'+
			'by a JavaScript engine in the users web browser.';

fs.writeFile('text.txt', text, (err) => {  
    if (err) throw err;
    console.log('text saved!');
});*/

//2 заносим текст в файл (существующий или создаем новый. если в файле был текст, он перезаписывается)
/*var text = 'text2.txt';  
var buffer = new Buffer('Node.js enables JavaScript to be used for server-side scripting,'+
			'and runs scripts server-side to produce dynamic web page content before'+
			'the page is sent to the users web browser.');
fs.open(text, 'w', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('wrote the file successfully');
        });
    });
});*/

//3 дописываем текст к уже существующему (или, при отсутствии файла - создает новый и пишет в нем)
/*fs.appendFile('text.txt', '\nNode.js enables JavaScript to be used for server-side scripting,'+
			'and runs scripts server-side to produce dynamic web page content beforethe page is sent to the users web browser.', (err) => {  
    if (err) throw err;
    console.log('text was updated!');
});*/

//------------------------------------

//sending email
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aa.kremin@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'aa.kremin@gmail.com',
  to: 'temzatafud@gmail.com',
  subject: 'sending email using Node.js',
  text: 'wassup'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
