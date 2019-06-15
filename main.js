/*
Create object file
 - Agent object
 - Mission object 
 


*/

var topSection;
var mainSection;
var tailSection;
var agentListing;
var agentThumbs;
var agentDetails;
var missionListing;
var activeListing;

var updateConsoleArray = [];
var agentArray = [];


function mainInit() {
	
	tailSection = document.getElementById("tailSection");
	updateConsole("Initialising...")
	topSection = document.getElementById("topSection");
	mainSection = document.getElementById("mainSection");
	agentListing = document.getElementById("agentListing");
	agentThumbs = document.getElementById("agentThumbs");
	agentDetails = document.getElementById("agentDetails");
	missionListing = document.getElementById("missionListing");
	activeListing = document.getElementById("activeListing");
	
	updateConsole("Retrieving agent details...")
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
