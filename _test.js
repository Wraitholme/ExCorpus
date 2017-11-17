

var topSection;
var mainSection;
var tailSection;

var WriteString;
var WriteString2;
var WriteString3;

var stringed;

var testArray = {};





function jsonTest() {

	WriteString = "";
	WriteString2 = "";
	WriteString3 = "";
	
	for (var i = 0; i < 5; i++) {
		
		var subArray = {};
		
		for (var j = 0; j < 5; j++) {
			
			var tTotal = i + j;
			
			WriteString += tTotal.toString();
			
			subArray[j] = tTotal;
			
		}
		
		testArray[i] = subArray;
		
		//mainSection.innerHTML += "<BR>";
	}
	
	stringed = JSON.stringify(testArray);
	
	var parseTest = JSON.parse(stringed);
	
	for (var i = 0; i < 5; i++) {
		
		for (var j = 0; j < 5; j++) {
			
			
			WriteString2 += testArray[i][j].toString();
			
		}
		
		testArray[i] = subArray;
		
		//mainSection.innerHTML += "<BR>";
	}
	
	for (var i = 0; i < 5; i++) {
		
		for (var j = 0; j < 5; j++) {
			
			
			WriteString3 += parseTest[i][j].toString();
			
		}
		
		testArray[i] = subArray;
		
		//mainSection.innerHTML += "<BR>";
	}
	
	mainSection.innerHTML += WriteString;
	mainSection.innerHTML += "<BR>";
	mainSection.innerHTML += WriteString2;
	mainSection.innerHTML += "<BR>";
	mainSection.innerHTML += WriteString3;
	mainSection.innerHTML += "<BR>";
	mainSection.innerHTML += stringed;
}







function mainInit() {
	

	topSection = document.getElementById("topSection");
	mainSection = document.getElementById("mainSection");
	tailSection = document.getElementById("tailSection");
	
	//jsonTest();
	
	
}
