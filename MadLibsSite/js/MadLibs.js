//Define a function called 'write'
//A function is a GROUP of statements (instructions) that we always want to run all at once
//Always just descriptive names to functions
//This is called a 'Function Definition'. 
//Functions DO NOT run automatically. We need to 'call' them to tell the computer to run them
//The 'function call' here happens from our form  'action' when the button is called by saying 'write()'
function write(){
	
	
////////////action verb////////////
var actionverb = document.getElementById('actionverb').value;
console.log(actionverb);
/////////////animal noise///////////
	var animalnoise = document.getElementById('animalnoise').value;
console.log(animalnoise);
//////////////multiple choice////////////
	
var numbers = document.querySelector('input[name="num"]:checked').value;
	console.log(numbers);

	var myPic = document.getElementById('numbers').value;
console.log(myPic);
	
	
if(numbers=="3"){ 
	myPic="<img class='img-fluid' src='Images/geckoo1.jpeg'>";
	
}else if(numbers=="15"){
	myPic="<img class='img-fluid' src='Images/beardeddragon.jpeg'>";
	
}else if(numbers=="27"){
	myPic="<img class='img-fluid' src='Images/cutelilguy.jpeg'>";
}


///////////////animal//////////////
	
var animal = document.getElementById('favouriteanimal').value;
console.log(animal);
	
//////////////person//////////////////
	
	
var person = document.getElementById('person').value;
console.log(person);
	
/////////////superpower///////////////
	
var superpower = document.getElementById('superpower').value;
console.log(superpower);
	
////////////word similar to yelled///////
	
var yelling = document.getElementById('yelling').value;
console.log(yelling);
	
//////////action verb 2////////////////
	
var secondverb = document.getElementById('secondverbendingining').value;
console.log(secondverb);

	
///////////action verb 3//////////////
	
var thirdverb = document.getElementById('thirdverb').value;
console.log(thirdverb);
	
///////////action verb 4/////////////
	
var fourthverb = document.getElementById('fourthverb').value;
console.log(fourthverb);
	
////////////body part///////////////
	
var bodypart = document.getElementById('bodypart').value;
console.log(bodypart);
	
//////////amount of time///////////
	
var time = document.getElementById('time').value;
console.log(time);
	
////////place in nature/////////////

var nature = document.getElementById('nature').value;
console.log(nature);




	
	
	
	
	////////////output////////////////



	
	document.getElementById('output').innerHTML += myPic+ "<p>One day, a spry young lad was "+actionverb+" down his usual path to get to school. However, he was stopped In his tracks when he heard the terrifying noise of something "+animalnoise+" behind him. His head whipped around to see an "+numbers+" foot tall "+animal+" , with the face of "+person+". His eyes went wide, as he didn’t know what to do. Hiding wasn’t an option, the "+animal+" had powers unlike the lad had ever seen. The "+animal+" had the power of "+superpower+", and the boy didn’t want to anger him, because facing off against the "+animal+" ‘s unearthly powers did not sound like a fun time. He gave himself two options. One: run and hope escape is possible. Or two: stand still and pray to the almighty "+animal+" for mercy. He chose to run. The "+animal+" was not happy about his option and chased the boy down, "+yelling+" as it tried to grab him. The boy ran to a nearby house and "+secondverb+" frantically on the door. An old lady opened it and her eyes went wide when she saw the "+animal+" behind the boy, "+thirdverb+" down the lawn towards them. The boy ran inside and closed and locked the door. The old lady clutched her chest in fear as the boy tried to calm her down. The "+animal+" was "+fourthverb+" and slamming on the door with it’s big "+bodypart+". The boy led the old lady to the couch and sat her down as he called animal control. "+time+" later, just as the "+animal+" was about to breach the locked door, animal control apprehended it and took it back to the "+nature+", far away from the city. The boy learned a valuable lesson that day. Never mess with a "+animal+".  </p>";
	}