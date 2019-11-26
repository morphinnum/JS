//----------------------------------------------------------------------------------
//Task 1
//Write a function that find the most frequent character in a string (case insensitive)

var getMax = function (str) {
    var max = 0;
        maxChar = '';
    str.split('').forEach(function(char){
        if(str.split(char).length > max) {
            max = str.split(char).length;
            maxChar= char;
        }
    });
    return maxChar;
};

//----------------------------------------------------------------------------------
//Task 2
//Create simple HTML form with text field and buttons “Set” and “Clear”. 
//On submit form set item to local storage with key “num23” and value from the text field. 
//On click “Clear” button clean up text field and delete item “num23” from local storage. 
//On page load get item “num23” from local storage, create paragraph element, 
//set according value into paragraph, and insert it before form. Paint paragraph in red if item value 
//is odd and in green if item value is even.

//disable "set" if the input is empty
function activeBtn() {
    if(document.getElementById('digitfield').value==="") { 
        document.getElementById('digitset').disabled = true; 
    } else { 
            document.getElementById('digitset').disabled = false;
            }
} 
window.onload = function(){        
        //setting variables
    var form = document.getElementById('form');
    var div = document.getElementById('num23');
    var input = document.getElementById('digitfield');
    var button = document.getElementById('digitclear');
    //creating array where input value will be stored under key "num23"
        //JSON.stringify() will turn a data array,created in localStorage, to a string
        //data variable stores parsed localStorage contents
        //on page load, check if there is existing LS
        var numArray = localStorage.getItem('num23') ?
        JSON.parse(localStorage.getItem('num23')) : []

    localStorage.setItem('num23', JSON.stringify(numArray));
    var data = JSON.parse(localStorage.getItem('num23'));
        
        //func that will append p tag before form after form is submited
    var pMaker = text => {
        var p = document.createElement('p');
        p.textContent = text;
        //check if the number is odd/even and set class accordingly
        if (parseInt(text)%2 == 0) {
            p.className = 'even';
        } else { p.className = 'odd';}
        div.appendChild(p);      
    }

        //listener will work when form will be submited
        form.addEventListener('submit', function (e) {
            e.preventDefault();

        //pushing any new input into array and setting LS to the new value
        numArray.push(input.value);
        localStorage.setItem('num23', JSON.stringify(numArray)); 
    
        //setting input value to an empty string to avoid need in erasing last entered item
        pMaker(input.value);
        input.value = '';
    })

        //going through data var, which has all existing LS in a form that js can use; 
        //then we're running pMaker again to display found info on the page.
        data.forEach(item => {
            pMaker(item)
        })

        //adding event that clears all data from LS and removing p elements
        button.addEventListener('click', function() {
            localStorage.clear();
            while (div.firstChild) {
                div.removeChild(div.firstChild)
            }
        })
 
        //checking if number in p is even/odd and setting bg color accordingly
        //собрать значения из ls в массив и перебрать его функцией которая определяет четное число и в результате успеха меняет класс или просто фон параграфа
        //function isEven(value) {
        // 	if (value%2 == 0)
        //     return true;
        // else
        //     return false;
        // }
    }

//----------------------------------------------------------------------------------  
//Task 3
//Write script that will parse query params from url and transform it into object with according key and value.

var urlParams;
(window.onpopstate = function() {
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g, // Regex for replacing addition symbol with a space
        decode = function(s) {return decodeURIComponent(s.replace(pl, " ")); },
        query = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]); 
})();

//Task 4
//Write script that displays a list of products from server response data.
//Request URL: http://54.39.188.42/
//Request method: GET
//Server returns encoded JSON string in base64

var xhr  = new XMLHttpRequest();
xhr.open('GET', 'http://54.39.188.42/');
xhr.responseType = 'text';

xhr.send();

xhr.onload = function() {
    var base = xhr.response;
    var prodInfo = atob(base);
   
    prodCard(prodInfo);
};

function prodCard(obj) {
    var base = xhr.response;
    var products =  JSON.parse(atob(base)); //converting decoded string

    for (var i=0; i < products.length; i++) {
        var options = (products[i].options);

        var art = document.createElement('article');
        art.className = 'prodCard';
        var id = document.createElement('p');
        var title = document.createElement('p');
        var sku = document.createElement('p');
        var img = document.createElement('div');
        // var metal_type = document.createElement('p');
        // var metal_color = document.createElement('p');
        var priceTag = document.createElement('h2');
        priceTag.className = 'priceTag';


        id.textContent = '#' + products[i].id;
        title.textContent = products[i].title;
        sku.textContent = products[i].sku;
        img.innerHTML += '<img src=\"' + products[i].image + '\" alt="ring" style="width: 250px; height: 250px;">';
        //metal_type.textContent = 'Metal type: ' + JSON.stringify(products[i].options);

        for (var j=0; j < options.length; j++) {
            
            var optDiv = document.createElement('div');
            optDiv.className = 'optionsDiv';

            var metal_type = document.createElement('p');
            var metal_color = document.createElement('p');
            var stone_shape = document.createElement('p');
            var gemstone_color = document.createElement('p');

            metal_type.textContent = 'Metal type: ' + options[j].metal_type;
            metal_color.textContent = 'Metal color: ' + options[j].metal_color;
            stone_shape.textContent = 'Metal type: ' + options[j].stone_shape;
            gemstone_color.textContent = 'Metal color: ' + options[j].gemstone_color;

            optDiv.appendChild(metal_type);
            optDiv.appendChild(metal_color);
            optDiv.appendChild(stone_shape);
            optDiv.appendChild(gemstone_color);
        }

        priceTag.textContent = Math.round(products[i].price) + '.00 \n' + products[i].currency;

        var section = document.getElementById('prodSection');

        art.appendChild(id);
        art.appendChild(title);
        art.appendChild(sku);
        art.appendChild(img);
        art.appendChild(optDiv);
        art.appendChild(priceTag);

        section.appendChild(art);
    }
}

