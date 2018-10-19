var words = ['code', 'rouge', 'printemps', 'cinq', 'interdiction', 'nul', 'accent' ];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
nb = getRandomInt(words.length);
var underline = words[nb].length;
var empty ='_ ';
var emptyNB = empty.repeat(underline);

document.getElementsByTagName('p')[0].innerHTML=emptyNB;

var alph="abcdefghijklmnopqrstuvwxyz".split("");
var char = 0;
            function addButton() 
            { 
                
                while (char < 26) {
                    var achar = alph[char];
                    char++;
                    var button = document.createElement("input");
                    button.type="button";
                    button.value=achar; 
                    button.className="letters";
                    button.setAttribute("onClick", "letter()");                     
                    alphabet.appendChild(button);
                    
             }

}
addButton();

function letter()
{
  var selLetter = document.getElementsByClassName("letters").value;
  document.getElementById("test").innerHTML=selLetter;
}


// let form = document.getElementById('alphabet');
//     for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//       form.innerHTML += '<button type="button">'+String.fromCharCode(i)+'</button>';
//     }

//     let buttons = document.getElementsByTagName('button');
//     for(var i = 0; i < buttons.length; i++) {
//       buttons[i].addEventListener('click', function() {
//         this.style.display = "none";
//       });
//     }