//var mybutton = document.getElementById("button1");

const insertHere = querySelector(textFromButton);

document.querySelector("#button1").addEventListener("click" , function(event){
    var createP = document.createElement('p');
    createP.innerHTML = "I'm right";
    console.log(insertHere.appendChild(createP));
    
})
/*
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/