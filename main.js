

var topSection;
var mainSection;
var tailSection;

var updateConsoleArray = [];
var agentArray = [];


function mainInit() {
	
	topSection = document.getElementById("topSection");
	mainSection = document.getElementById("mainSection");
	tailSection = document.getElementById("tailSection");
	updateConsole("Initialising...")
	
	updateConsole("Loading agent details...")
	agentArray = populateAgents();
	
	
	
	updateConsole("Ready.")

}

function updateConsole(addString) {
	
	if (updateConsoleArray.length > 9) {
		updateConsoleArray.splice(0,1);
	}
	
	updateConsoleArray.push(addString);
	
	while(tailSection.firstChild){
		tailSection.removeChild(tailSection.firstChild);
	}
	
	var arrayLength = updateConsoleArray.length;
	
	for (var i = 0; i < arrayLength; i++) {
		tailSection.innerHTML += (updateConsoleArray[i] + "<BR />")
	}
	
}
