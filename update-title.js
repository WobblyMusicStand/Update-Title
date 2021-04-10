function updateTitle(){
	document.title = 'New Title!';
}

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
  updateTitle();
});