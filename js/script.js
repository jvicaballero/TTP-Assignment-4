
// Question 1
function Button1() {
	let clickingOnButtonOne = document.getElementById('container');
	let b1Text = document.createElement('section');
	b1Text.innerHTML = "I'm right";
	clickingOnButtonOne.appendChild(b1Text);
}

function Button2() {
	let clickingOnButtonTwo = document.getElementById('container');
	let b2Text = document.createElement('section');
	b2Text.innerHTML = "No, I'm right!";
	clickingOnButtonTwo.appendChild(b2Text);
}


// Question 2
function onHover() {
	let hoveringText = document.getElementById('hover');
	let change = document.createElement('section');
	change.innerHTML = alert("Hey, I told you not to hover over me!");
	hoveringText.appendChild(change);
}


// Question 3 and 4
function clickingOnTheSubmitButton(event) {
	event.preventDefault();
	let belowTheSubmitButton = document.getElementById('q5');
	let username = document.getElementById('input1').value;
	let password = document.getElementById('input2').value;
	let addingAH1 = document.createElement('h1');
	belowTheSubmitButton.appendChild(addingAH1);

	for (var i = 0; i < username.length; i++) {
			if (
				parseFloat(username.length) && 
				parseInt(password) === 12345678
			) {
			addingAH1.innerHTML = 'Correct';
		} else {
			addingAH1.innerHTML = 'Incorrect';
		}
	}
}

window.onload = function() {
  document.querySelector('#button1').addEventListener('click', Button1);
  document.querySelector('#button2').addEventListener('click', Button2);
  document.querySelector('#hover').addEventListener('mouseover', onHover);
  document.querySelector('#enterTextHere').addEventListener('keypress',function(event) {
  	oneKey(event)
  });
  
};