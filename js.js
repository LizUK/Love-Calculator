//Love Test

function loveTest() {
	var yourName = document.getElementById("yourName").value;
	var trueLoveName = document.getElementById("trueLoveName").value;
	
	var firstChar1 = yourName.slice(0,1);
	var firstChar2 = trueLoveName.slice(0,1);
	
	var upperCasefirstChar1 = firstChar1.toUpperCase();
	var upperCasefirstChar2 = firstChar2.toUpperCase();
	
	var restOfName1 = yourName.slice(1,yourName.length);
	var restOfName2 = trueLoveName.slice(1,trueLoveName.length);
	
	var capYourName = upperCasefirstChar1 + restOfName1;
	var capTrueLoveName = upperCasefirstChar2 + restOfName2;
	
	if (capYourName === "Jason" && capTrueLoveName === "Elizabeth" || capYourName === "Elizabeth" && capTrueLoveName === "Jason") {
	var lovePercent = 100;	
	}
		
	else { var lovePercent = Math.random() * 100;
	lovePercent = Math.floor(lovePercent) + 1;
	}

	document.getElementById("you").innerHTML = capYourName;
	document.getElementById("trueLove").innerHTML = capTrueLoveName; 
	document.getElementById("lovePercent").innerHTML = lovePercent;
	
	if (lovePercent <= 20) {
	document.querySelector("span.result").innerHTML = " is none existant.";	
	document.getElementById("congrat").innerHTML = "Maybe they're not the one, Sorry!";
	}
	
	else if (lovePercent <= 35 && lovePercent >= 21) {
	document.querySelector("span.result").innerHTML = " could be better.";	
	document.getElementById("congrat").innerHTML = "Keep working at it, the love will grow!";
	document.querySelectorAll("img")[1].setAttribute("src", "images/25-heart.png");
	}
	
	else if (lovePercent <= 75 && lovePercent >= 36) {
	document.querySelector("span.result").innerHTML = " has a solid foundation.";	
	document.getElementById("congrat").innerHTML = "Firm roots, firm branches!";
	document.querySelectorAll("img")[1].setAttribute("src", "images/50-heart.png");
	}
	
	else if (lovePercent <= 99 && lovePercent >= 76) {
	document.querySelector("span.result").innerHTML = " is a deep and strong love connection.";
	document.getElementById("congrat").innerHTML = "You're definitely doing something right!";	
	document.querySelectorAll("img")[1].setAttribute("src", "images/75-heart.png");
	}
	
	else if (lovePercent === 100) {
	document.querySelector("span.result").innerHTML = " is True Love!";
	document.getElementById("congrat").innerHTML = "You were made for each other!";	
	document.querySelectorAll("img")[1].setAttribute("src", "images/full-heart.png");
	}

	

}


var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);