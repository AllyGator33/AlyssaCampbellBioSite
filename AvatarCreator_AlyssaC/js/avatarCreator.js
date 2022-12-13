// JavaScript Document

var character={wrapping:"", cake:"", icing:"", topping:""};

//wrapping
function setWrapping(changling){
	
	
	character.wrapping=changling;
	console.log(character.wrapping);
	bodyBuilder();
}

//cake
function setCake(changling){
	
	character.cake=changling;
	console.log(character.cake);
	bodyBuilder();
}
	
//Icing
function setIcing(changling){
	
	character.icing=changling;
	console.log(character.icing);
	bodyBuilder();
}

//topping
function setTopping(changling){
	
	character.topping=changling;
	console.log(character.topping);
	bodyBuilder();
}



function bodyBuilder(){
	
if(character.wrapping!=""){
   document.getElementById('wrapping').innerHTML="<img class='img-fluid' src='imahes/"+character.wrapping+"' alt='wrapping'>";

   }
	
	
	if(character.cake!=""){
	document.getElementById('cake').innerHTML="<img class='img-fluid' src='imahes/"+character.cake+"' alt='cake'>";
}
	
	if(character.icing!=""){
	document.getElementById('icing').innerHTML="<img class='img-fluid' src='imahes/"+character.icing+"' alt='icing'>";
}

	if(character.topping!=""){
	document.getElementById('topping').innerHTML="<img class='img-fluid' src='imahes/"+character.topping+"' alt='topping'>";
	}
	
}
function write(){
	

var userName = document.getElementById('name').value;
console.log(userName);
	
document.getElementById('output').innerHTML = "<h3>"+userName+" 's cupcake!</h3>";

}
