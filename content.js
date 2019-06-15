function AgentModel() {
	this.Name = "John Smith";
	this.Desc = "Description Not Available";
}

function populateAgents() {
	
	var tempAgentArray = [];
	
	tempAgentArray[0] = new AgentModel();
	tempAgentArray[0].Name = "Agent1";
	tempAgentArray[0].Desc = "The First Agent";
	
	tempAgentArray[1] = new AgentModel();
	tempAgentArray[1].Name = "Agent2";
	tempAgentArray[1].Desc = "The Second Agent";
	
	
	return tempAgentArray;
}